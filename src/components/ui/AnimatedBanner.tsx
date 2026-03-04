import { Fragment } from "react";
import { motion } from "framer-motion";

export function AnimatedBanner() {
  // Elements that will scroll in the banner
  const bannerItems = [
    "SaaS B2B",
    "INTELLIGENCE ARTIFICIELLE",
    "APPLICATIONS MOBILES",
    "AUTOMATISATION",
    "GROWTH HACKING",
  ];

  return (
    <div className="w-full bg-darker overflow-hidden py-4 md:py-6 relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-y border-dark-border">
      {/* 
        We use a flex container that is twice as wide to create the infinite scroll effect.
        By translating from 0 to -50%, we seamlessly loop the content.
        Since we duplicate the array of items, -50% exactly matches the start of the second half.
      */}
      <motion.div
        className="flex whitespace-nowrap items-center w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Adjust this to make it faster/slower
          ease: "linear",
        }}
      >
        {/* We map twice (original + duplicate) to ensure seamless looping */}
        {[...Array(2)].map((_, arrayIndex) => (
          <Fragment key={arrayIndex}>
            {bannerItems.map((item, index) => (
              <div
                key={`${arrayIndex}-${index}`}
                className="flex items-center px-8 md:px-12 text-subtle hover:text-white transition-colors duration-300"
              >
                <span
                  className="text-xl md:text-2xl font-medium tracking-wider font-heading"
                >
                  {item}
                </span>

                {/* Decorative dot separator */}
                <div className="w-2 h-2 rounded-full bg-primary ml-16 md:ml-24 opacity-80 shadow-[0_0_8px_rgba(255,85,0,0.5)]"></div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
