import { motion } from "motion/react";

interface LockScreenDateProps {
  delay?: number;
}

export default function LockScreenDate({ delay = 0 }: LockScreenDateProps) {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[now.getDay()];
  const dayNumber = now.getDate();

  return (
    <motion.p
      className="ls-date"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {dayName} {dayNumber}
    </motion.p>
  );
}
