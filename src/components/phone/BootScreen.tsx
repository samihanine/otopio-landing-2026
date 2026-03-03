import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import OtipioLogo from "./OtipioLogo";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Delay before showing logo (simulates power-on)
    const showTimer = setTimeout(() => setShowLogo(true), 500);

    // Total boot duration before transitioning
    const completeTimer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>{showLogo && <OtipioLogo key="logo" />}</AnimatePresence>
    </motion.div>
  );
}
