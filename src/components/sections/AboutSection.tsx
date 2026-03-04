import { motion } from "framer-motion";
import { GradientTitle } from "../ui/GradientTitle";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen py-24 px-8 md:px-16 overflow-hidden">
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-32"
        >
          <div className="mb-4">
            <GradientTitle className="opacity-10 mb-[-60px] md:mb-[-100px]">
              Otopio
            </GradientTitle>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight max-w-3xl font-heading"
          >
            Une Fusion de{" "}
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-primary italic font-medium block"
            >
              Passion
            </motion.span>
            et d'innovation
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24 md:space-y-32"
        >
          {/* Section 1 */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-0.5 bg-primary mb-8"
            />
            <h2
              className="section-heading"
            >
            </h2>
            <p className="text-xl text-body leading-relaxed font-light">
              Chez Otopio, la technologie et la créativité ne font qu'un grâce à
              notre équipe dévouée de professionnels passionnés. Nous sommes
              dirigés par un CTO visionnaire, soutenus par une designeuse UI/UX
              de renom, et renforcés par une équipe dynamique de développeurs.
              Chaque membre apporte une expertise unique, une énergie créative,
              et un engagement sans faille pour transformer vos idées en
              réalités numériques exceptionnelles.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl ml-auto md:text-right"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-0.5 bg-primary mb-8 ml-auto"
            />
            <h2
              className="section-heading"
            >
            </h2>
            <p className="text-xl text-body leading-relaxed font-light">
              Nous plaçons la barre haut en termes de qualité et de performance.
              Notre objectif n'est pas seulement de répondre à vos attentes,
              mais de les surpasser. Nous sommes dédiés à bien faire les choses,
              à rendre nos clients entièrement satisfaits, et à donner le
              meilleur de nous-mêmes dans chaque projet. Chez Otopio, chaque
              détail compte, et chaque projet est une opportunité de démontrer
              notre excellence et notre dévouement.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-0.5 bg-primary mb-8"
            />
            <h2
              className="section-heading"
            >
            </h2>
            <p className="text-xl text-body leading-relaxed font-light">
              Otopio est synonyme de flexibilité et d'adaptabilité. Nous
              comprenons que chaque client est unique, avec des besoins et des
              budgets variés. Que vous soyez une start-up avec des ressources
              limitées, ou une entreprise établie cherchant à redéfinir votre
              présence numérique, nous sommes là pour vous. Nous accueillons
              chaque projet, grand ou petit, avec la même ardeur, prêts à nous
              adapter et à innover pour réaliser vos visions. Chaque client est
              précieux, et chaque projet est une aventure passionnante vers de
              nouveaux horizons numériques.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
