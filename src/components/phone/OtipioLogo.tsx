import { motion } from "motion/react";

export default function OtipioLogo() {
  return (
    <div className="otopio-logo">
      <motion.div
        className="otopio-logo-text"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="otopio-logo-name">Otop</span>
        <span className="otopio-logo-os text-[#FF5501]!">iOS</span>
      </motion.div>
    </div>
  );
}
