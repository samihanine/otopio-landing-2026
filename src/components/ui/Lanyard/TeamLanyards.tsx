import Lanyard from "./Lanyard";
import maissaneGLB from "./maissane.glb";
import mathildeGLB from "./mathilde.glb";
import noahGLB from "./noah.glb";
import samiGLB from "./sami.glb";

export function TeamLanyards() {
  return (
    /* 
      Conteneur visible : h-[50vh]
      On restaure l'ombre et le masquage des débordements.
    */
    <div className="pointer-events-auto relative z-10 hidden h-[50vh] w-full overflow-hidden inset-shadow-[0_16px_32px_-10px_rgba(0,0,0,0.15)] md:block">
      {/* 
        On agrandit le Canvas (120vh) et on le décale (-35vh).
        Le centre du Canvas (y=0) est maintenant aligné au centre du bloc de 50vh.
        Le Canvas commence bien au-dessus de la section, ce qui évite le culling.
      */}
      <div className="absolute -top-[35vh] left-0 h-[120vh] w-full">
        <Lanyard
          position={[0, 0, 30]}
          gravity={[0, -40, 0]}
          fov={20}
          items={[
            {
              id: "maissane",
              modelSrc: maissaneGLB,
              // y=3.5 correspond maintenant au "plafond" du conteneur de 50vh
              startPosition: [-4.5, 3.5, 0],
            },
            {
              id: "mathilde",
              modelSrc: mathildeGLB,
              startPosition: [-1.5, 3.5, 0],
            },
            { id: "noah", modelSrc: noahGLB, startPosition: [1.5, 3.5, 0] },
            { id: "sami", modelSrc: samiGLB, startPosition: [4.5, 3.5, 0] },
          ]}
        />
      </div>
    </div>
  );
}
