import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card-custom-cursor")) {
        // Initials mouse position properly before making it show up
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsHovering(true);
        document.body.style.cursor = "none";
      } else {
        setIsHovering(false);
        document.body.style.cursor = "auto";
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full text-white opacity-50 shadow-md backdrop-blur-md"
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: isMouseDown
              ? "var(--color-primary-lighter)"
              : "var(--color-primary)",
          }}
          initial={{
            opacity: 0,
            scale: 0.3,
            x: mousePosition.x - 28,
            y: mousePosition.y - 28,
          }}
          animate={{
            x: mousePosition.x - 28,
            y: mousePosition.y - 28,
            opacity: 0.85,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            x: { type: "spring", stiffness: 800, damping: 40, mass: 0.5 },
            y: { type: "spring", stiffness: 800, damping: 40, mass: 0.5 },
            opacity: { duration: 0.2 },
            scale: { type: "spring", stiffness: 400, damping: 25 },
          }}
        >
          <motion.span
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.05, duration: 0.2 }}
          >
            <ArrowUpRight strokeWidth={2} size={24} />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
