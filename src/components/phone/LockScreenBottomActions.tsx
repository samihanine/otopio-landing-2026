import { motion } from "motion/react";

interface LockScreenBottomActionsProps {
  delay?: number;
}

export default function LockScreenBottomActions({
  delay = 0,
}: LockScreenBottomActionsProps) {
  return (
    <motion.div
      className="ls-bottom-actions"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Flashlight */}
      <button
        className="ls-action-btn"
        type="button"
        aria-label="Toggle Flashlight"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M9 2h6l1 7H8l1-7zM8 11h8v2a1 1 0 01-1 1h-1v8h-4v-8H9a1 1 0 01-1-1v-2z" />
        </svg>
      </button>

      {/* Camera */}
      <button className="ls-action-btn" type="button" aria-label="Camera">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
          <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.5l1.83-2h3.34L15.5 6H20v12z" />
        </svg>
      </button>
    </motion.div>
  );
}
