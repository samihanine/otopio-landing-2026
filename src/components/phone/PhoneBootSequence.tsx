import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import BootScreen from "./BootScreen";
import HomeScreen from "./HomeScreen";
import "./phone.css";

export default function PhoneBootSequence({
  isReady = true,
}: {
  isReady?: boolean;
}) {
  const [phase, setPhase] = useState<
    "off" | "booting" | "lockscreen" | "homescreen"
  >("off");

  useEffect(() => {
    if (!isReady) {
      setPhase("off");
      return;
    }
    // Start boot sequence shortly after mount or when ready
    const timer = setTimeout(() => {
      setPhase("booting");
    }, 300);

    return () => clearTimeout(timer);
  }, [isReady]);

  return (
    <div className="phone-screen-container">
      <AnimatePresence mode="wait">
        {phase === "off" && <div key="off" className="phone-screen-off" />}

        {phase === "booting" && (
          <BootScreen key="boot" onComplete={() => setPhase("homescreen")} />
        )}

        {phase === "homescreen" && <HomeScreen key="home" />}
      </AnimatePresence>
    </div>
  );
}
