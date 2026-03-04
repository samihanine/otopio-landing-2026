import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { email, phoneNumber, formattedAddress } from "../../types/contact";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("fr-CA", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden bg-dark"
      style={{ minHeight: "340px" }}
    >
      {/* Background gradient - Lightened Neon Effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255, 85, 0, 0.21) 0%, rgba(255, 85, 0, 0.1) 40%, rgba(26, 26, 26, 0) 100%)",
        }}
      />

      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Top bar */}
      <div
        className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-8 md:px-16 py-10 text-white/40 font-body text-caption"
      >
        <div className="flex flex-col gap-4 order-2 sm:order-1 mt-6 sm:mt-0 items-center sm:items-start text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Otopio. Tous droits réservés.</p>

          <div className="flex flex-col gap-2.5 opacity-60">
            <a
              href={email.url}
              className="flex items-center gap-2.5 hover:text-primary transition-colors group"
            >
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/10">
                <Mail size={12} />
              </div>
              <span>{email.value}</span>
            </a>
            <a
              href={phoneNumber.url}
              className="flex items-center gap-2.5 hover:text-primary transition-colors group"
            >
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/10">
                <Phone size={12} />
              </div>
              <span>{phoneNumber.value}</span>
            </a>
            <a
              href={formattedAddress.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-primary transition-colors group"
            >
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/10">
                <MapPin size={12} />
              </div>
              <span className="max-w-[200px] sm:max-w-none">
                {formattedAddress.value}
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 order-1 sm:order-2">
          <p className="flex items-center gap-2">
            Montréal <span className="text-white/20">/</span> {time}
          </p>

          <button
            onClick={scrollToTop}
            className="text-primary hover:text-primary-light transition-colors cursor-pointer bg-transparent border-none uppercase tracking-widest font-semibold text-label"
          >
            Retour en haut ↑
          </button>
        </div>
      </div>

      {/* Giant "Otopio" text at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 w-full text-center pointer-events-none select-none flex justify-center overflow-visible"
        style={{
          transform: "translateY(20%)",
        }}
      >
        <span
          className="w-full font-heading"
          style={{
            fontSize: "clamp(90px, 16vw, 300px)",
            fontWeight: 700,
            lineHeight: 0.8,
            letterSpacing: "0.02em",
            padding: "0 40px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
            textAlign: "center",
          }}
        >
          Otopio
        </span>
      </motion.div>
    </footer>
  );
}
