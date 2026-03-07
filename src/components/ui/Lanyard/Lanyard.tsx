/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import type { RigidBodyProps, RapierRigidBody } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

import cardGLB from "./sami.glb";
import lanyard from "./otopio.jpg";

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardItem {
  id: string;
  modelSrc: string;
  startPosition?: [number, number, number];
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  items?: LanyardItem[];
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  items = [{ id: "default", modelSrc: cardGLB, startPosition: [0, 0, 0] }],
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-0 flex h-full w-full items-center justify-center">
      <Canvas
        frameloop="always"
        camera={{ position: new THREE.Vector3(...position), fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }: { gl: THREE.WebGLRenderer }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          {items.map((item) => (
            <Band
              key={item.id}
              isMobile={isMobile}
              modelSrc={item.modelSrc}
              startPosition={item.startPosition}
            />
          ))}
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  modelSrc: string;
  startPosition?: [number, number, number];
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  modelSrc,
  startPosition = [0, 0, 0],
}: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody & { lerped?: THREE.Vector3 }>(null);
  const j2 = useRef<RapierRigidBody & { lerped?: THREE.Vector3 }>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 5,
    linearDamping: 5,
  };

  const { nodes, materials } = useGLTF(modelSrc) as any;
  const texture = useTexture(lanyard);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 0.75]);
  useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 0.75]);
  useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 0.75]);
  useSphericalJoint(j3 as any, card as any, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state: any, delta: number) => {
    if (dragged && card.current && fixed.current) {
      vec.set(state.pointer.x, state.pointer.y, 1).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();

      // Calculate intersection with the Z=0 plane (where the lanyards hang)
      const distance = -state.camera.position.z / dir.z;
      vec.copy(state.camera.position).add(dir.multiplyScalar(distance));

      const fixedPos = new THREE.Vector3().copy(
        fixed.current.translation() as THREE.Vector3,
      );
      const targetPos = new THREE.Vector3(
        vec.x - dragged.x,
        vec.y - dragged.y,
        vec.z - dragged.z,
      );

      // Clamp distance so we don't stretch the rope joints physically
      if (targetPos.distanceTo(fixedPos) > 4.5) {
        const clampDir = targetPos.clone().sub(fixedPos).normalize();
        targetPos.copy(fixedPos).add(clampDir.multiplyScalar(4.5));
      }

      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation(targetPos);
    }

    if (
      fixed.current &&
      j1.current &&
      j2.current &&
      j3.current &&
      band.current &&
      card.current
    ) {
      [j1, j2].forEach((ref) => {
        if (!ref.current) return;
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation() as THREE.Vector3,
          );
        }
        const clampedDistance = Math.max(
          0.1,
          Math.min(
            1,
            ref.current.lerped.distanceTo(
              ref.current.translation() as THREE.Vector3,
            ),
          ),
        );
        ref.current.lerped.lerp(
          ref.current.translation() as THREE.Vector3,
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation() as THREE.Vector3);
      curve.points[1].copy(j2.current.lerped!);
      curve.points[2].copy(j1.current.lerped!);
      curve.points[3].copy(fixed.current.translation() as THREE.Vector3);

      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

      const cardAngVel = card.current.angvel();
      const cardRot = card.current.rotation();
      if (cardAngVel && cardRot) {
        ang.copy(cardAngVel as THREE.Vector3);
        const euler = new THREE.Euler().setFromQuaternion(
          new THREE.Quaternion(cardRot.x, cardRot.y, cardRot.z, cardRot.w),
        );
        card.current.setAngvel(
          { x: ang.x, y: ang.y - euler.y * 0.25, z: ang.z },
          true,
        );
      }
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={startPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              if (card.current) {
                const cardPos = card.current.translation() as THREE.Vector3;
                drag(new THREE.Vector3().copy(e.point).sub(cardPos));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry} frustumCulled={false}>
              <meshPhysicalMaterial
                map={materials.base.map || null}
                map-anisotropy={materials.base.map ? 16 : undefined}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
              frustumCulled={false}
            />
            <mesh
              geometry={nodes.clamp.geometry}
              material={materials.metal}
              frustumCulled={false}
            />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band} frustumCulled={false}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
