import { motion } from "motion/react";

interface LockScreenClockProps {
  delay?: number;
}

export default function LockScreenClock({ delay = 0 }: LockScreenClockProps) {
  return (
    <motion.div
      className="ls-clock"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="ls-clock-digit">0</span>
      <span className="ls-clock-digit">9</span>
      <span className="ls-clock-colon">:</span>
      <span className="ls-clock-digit">4</span>
      <span className="ls-clock-digit">1</span>
    </motion.div>
  );
}
