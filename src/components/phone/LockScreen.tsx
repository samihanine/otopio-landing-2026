import { motion, useDragControls } from "motion/react";
import LockScreenWallpaper from "./LockScreenWallpaper";
import LockScreenDate from "./LockScreenDate";
import LockScreenClock from "./LockScreenClock";
import LockScreenWidgets from "./LockScreenWidgets";
import LockScreenBottomActions from "./LockScreenBottomActions";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const dragControls = useDragControls();

  return (
    <motion.div
      className="lock-screen"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      drag="y"
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0.8, bottom: 0.1 }}
      onDragEnd={(_e, info) => {
        if (info.offset.y < -50 || info.velocity.y < -500) {
          onUnlock();
        }
      }}
    >
      <LockScreenWallpaper />

      <div className="ls-content">
        <div className="ls-top-section">
          <LockScreenDate delay={0.5} />
          <LockScreenClock delay={0.7} />
          <LockScreenWidgets delay={1.0} />
        </div>

        <LockScreenBottomActions delay={1.3} />
      </div>

      {/* Invisible overlay for clicking the home indicator area */}
      <div
        className="ls-home-indicator-hitarea"
        onPointerDown={(e) => dragControls.start(e)}
        onClick={onUnlock}
        aria-label="Swipe up or click to unlock"
      />
    </motion.div>
  );
}
