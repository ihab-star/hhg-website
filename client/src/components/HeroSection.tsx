/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Hero: Full-width image background with overlay, elegant typography
 */
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663591529917/L5JksiWy8AeHi8qNJL6E4C/hero-banner-KnbyzXLM7r5yDMYwYZBmxS.webp";

export default function HeroSection() {
  const { t, dir } = useLanguage();

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Hebashi Holding Group headquarters"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#1B2A4A]/85 via-[#1B2A4A]/50 to-transparent`} />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4">
              {t("hero.tag")}
            </p>
            <div className="gold-line-wide mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
              {t("hero.h1_1")}
              <br />
              <span className="text-gold">{t("hero.h1_2")}</span>
              <br />
              {t("hero.h1_3")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-lg"
            style={{ fontWeight: 300 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#platforms"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#platforms")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase bg-gold text-navy hover:bg-gold-light transition-colors duration-300"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase border-2 border-white/40 text-white hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
