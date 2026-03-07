import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IPhoneMockup from "../phone/IPhoneMockup";
import PhoneBootSequence from "../phone/PhoneBootSequence";
import { Section } from "../layout/Section";

export function HeroSection() {
  return (
    <Section
      className="flex min-h-[calc(100vh-100px)] items-center overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24"
      containerClassName="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full"
    >
      {/* Left Content - Hero Text */}
      <div className="max-w-2xl flex-1 text-left">
        {/* Trusted by founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2"
        >
          <div className="flex -space-x-2">
            <div className="bg-dark-light h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <div className="h-full w-full bg-gradient-to-br from-gray-600 to-gray-800" />
            </div>
            <div className="bg-mid-dark h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <div className="h-full w-full bg-gradient-to-br from-gray-500 to-gray-700" />
            </div>
            <div className="bg-mid h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <div className="h-full w-full bg-gradient-to-br from-gray-400 to-gray-600" />
            </div>
          </div>
          <span className="text-muted font-body text-sm">
            Studio de produits technologiques.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1
            className="text-darkest font-heading"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Produits
            <span className="mx-1 inline-flex items-center align-middle md:mx-2">
              <span
                className="bg-primary relative inline-flex overflow-hidden rounded-full shadow-sm"
                style={{
                  width: "clamp(40px, 6vw, 70px)",
                  height: "clamp(28px, 4vw, 50px)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1766241632392-1c84994a5e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Tech Product"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    mixBlendMode: "luminosity",
                    opacity: 0.7,
                  }}
                />
              </span>
            </span>
            <span className="text-primary">Technologiques</span>
            <br className="hidden md:block" /> et
            <span className="mx-1 mt-2 inline-flex items-center align-middle md:mx-2 md:mt-0">
              <span
                className="bg-dark relative inline-flex overflow-hidden rounded-full shadow-sm"
                style={{
                  width: "clamp(40px, 6vw, 70px)",
                  height: "clamp(28px, 4vw, 50px)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="AI Work"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </span>
            </span>{" "}
            Intelligence Artificielle
            <br className="hidden md:block" /> basé à{" "}
            <span style={{ fontWeight: 400 }}>Montréal</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted font-body text-base-body mb-10 max-w-lg leading-[1.7]"
        >
          Nous accompagnons les industries dans la conception de SaaS robustes
          et l'intégration d'intelligence artificielle sur mesure.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.95 }}
          className="btn-dark font-body text-base-body flex w-fit items-center gap-2 px-8 py-3.5"
        >
          Découvrir notre offre
          <ArrowRight size={16} />
        </motion.button>
      </div>

      {/* Right Content - Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none flex flex-1 items-center justify-center md:pointer-events-auto"
      >
        <div className="relative scale-[0.85] transition-transform duration-500 md:scale-[0.9] lg:scale-100">
          <IPhoneMockup>
            <PhoneBootSequence />
          </IPhoneMockup>

          {/* Added a subtle glow behind the phone */}
          <div className="bg-primary/5 absolute -inset-20 -z-10 rounded-full blur-[100px]" />
        </div>
      </motion.div>
    </Section>
  );
}
