import { motion } from "motion/react";

interface LockScreenWidgetsProps {
  delay?: number;
}

export default function LockScreenWidgets({
  delay = 0,
}: LockScreenWidgetsProps) {
  return (
    <motion.div
      className="ls-widgets"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Widget 1 — Otopio icon */}
      <div className="ls-widget">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>

      {/* Widget 2 — Activity icon */}
      <div className="ls-widget">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" />
          <path d="M12 6a6 6 0 0 1 0 12 6 6 0 0 1 0-12" />
          <circle cx="12" cy="12" r="2" fill="white" />
        </svg>
      </div>
    </motion.div>
  );
}
