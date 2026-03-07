import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Nos projets", path: "/projets" },
  { name: "Expertises", path: "/expertises" },
  { name: "À propos", path: "/a-propos" },
  { name: "Équipe", path: "/equipe" },
  // { name: "Blog", path: "/blog" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between py-6 md:max-w-3/4 md:mx-auto"
      >
        <div className="text-primary font-semibold text-[28px] border-none font-heading">
          <Link to="/">Otopio.</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base-body">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-dark-light hover:text-primary transition-colors duration-300 font-medium [&.active]:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-dark px-6 py-2.5 text-sm-body"
            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-light"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative ml-auto w-[80%] max-w-sm h-full shadow-xl flex flex-col p-6 font-medium"
            >
              <button
                className="self-end mb-8 text-dark-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>

              <nav className="flex flex-col gap-6 text-lg-body">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-dark-light hover:text-primary transition-colors [&.active]:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 btn-dark px-6 py-3 text-md-body text-center"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
