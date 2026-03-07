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
      className="bg-darkest relative overflow-hidden"
      style={{ minHeight: "340px" }}
    >
      {/* Background gradient - Lightened Neon Effect */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255, 85, 0, 0.21) 0%, rgba(255, 85, 0, 0.1) 40%, rgba(26, 26, 26, 0) 100%)",
        }}
      /> */}

      {/* Dot texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          maskImage: "linear-gradient(to bottom, transparent, black 150px)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 150px)",
        }}
      />

      {/* Top bar */}
      <div className="font-body text-caption relative z-10 flex flex-col items-center justify-between px-8 py-10 text-white/40 sm:flex-row md:px-16">
        <div className="order-2 mt-6 flex flex-col items-center gap-4 text-center sm:order-1 sm:mt-0 sm:items-start sm:text-left">
          <p>&copy; {new Date().getFullYear()} Otopio. Tous droits réservés.</p>

          <div className="flex flex-col gap-2.5 opacity-60">
            <a
              href={email.url}
              className="hover:text-primary group flex items-center gap-2.5 transition-colors"
            >
              <div className="group-hover:bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                <Mail size={12} />
              </div>
              <span>{email.value}</span>
            </a>
            <a
              href={phoneNumber.url}
              className="hover:text-primary group flex items-center gap-2.5 transition-colors"
            >
              <div className="group-hover:bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                <Phone size={12} />
              </div>
              <span>{phoneNumber.value}</span>
            </a>
            <a
              href={formattedAddress.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary group flex items-center gap-2.5 transition-colors"
            >
              <div className="group-hover:bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                <MapPin size={12} />
              </div>
              <span className="max-w-[200px] sm:max-w-none">
                {formattedAddress.value}
              </span>
            </a>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center gap-6 sm:order-2 sm:flex-row sm:gap-12">
          <p className="flex items-center gap-2">
            Montréal <span className="text-white/20">/</span> {time}
          </p>

          <button
            onClick={scrollToTop}
            className="text-primary hover:text-primary-light text-label cursor-pointer border-none bg-transparent font-semibold tracking-widest uppercase transition-colors"
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
        className="pointer-events-none absolute right-0 bottom-0 left-0 flex w-full justify-center overflow-visible text-center select-none"
        style={{
          transform: "translateY(20%)",
        }}
      >
        <span
          className="font-heading w-full"
          style={{
            fontSize: "clamp(90px, 16vw, 300px)",
            fontWeight: 700,
            lineHeight: 0.8,
            letterSpacing: "0.02em",
            padding: "0 40px",
            color: "white",
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
