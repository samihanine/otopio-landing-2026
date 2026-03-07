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
    <div className="bg-darker border-dark-border relative z-10 w-full overflow-hidden border-y py-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] md:py-6">
      {/* 
        We use a flex container that is twice as wide to create the infinite scroll effect.
        By translating from 0 to -50%, we seamlessly loop the content.
        Since we duplicate the array of items, -50% exactly matches the start of the second half.
      */}
      <motion.div
        className="flex w-max items-center whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25, // Adjust this to make it faster/slower
          ease: "linear",
        }}
      >
        {/* We map twice (original + duplicate) to ensure seamless looping */}
        {[...Array(2)].map((_, arrayIndex) => (
          <Fragment key={arrayIndex}>
            {bannerItems.map((item, index) => (
              <div
                key={`${arrayIndex}-${index}`}
                className="text-subtle flex items-center px-8 transition-colors duration-300 hover:text-white md:px-12"
              >
                <span className="font-heading text-xl font-medium tracking-wider md:text-2xl">
                  {item}
                </span>

                {/* Decorative dot separator */}
                <div className="bg-primary ml-16 h-2 w-2 rounded-full opacity-80 shadow-[0_0_8px_rgba(255,85,0,0.5)] md:ml-24"></div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
