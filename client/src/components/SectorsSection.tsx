/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Sectors: Grid of sector cards with icons
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  TrendingUp,
  Building2,
  HardHat,
  Palmtree,
  Wifi,
  Film,
  GraduationCap,
  Trophy,
} from "lucide-react";

const sectorIcons = [TrendingUp, Building2, HardHat, Palmtree, Wifi, Film, GraduationCap, Trophy];
const sectorKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
const sectorColors = [
  "from-gold/20 to-gold/5", "from-navy/20 to-navy/5",
  "from-gold/20 to-gold/5", "from-navy/20 to-navy/5",
  "from-gold/20 to-gold/5", "from-navy/20 to-navy/5",
  "from-gold/20 to-gold/5", "from-navy/20 to-navy/5",
];

export default function SectorsSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="sectors" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-4" />
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
              {t("sectors.tag")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t("sectors.h2_1")} <span className="text-gold">{t("sectors.h2_2")}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
              {t("sectors.desc")}
            </p>
          </motion.div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {sectorKeys.map((key, i) => {
            const Icon = sectorIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className={`group relative bg-gradient-to-br ${sectorColors[i]} p-6 lg:p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold mb-5 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm lg:text-base font-bold text-navy leading-snug">
                  {t(`sectors.${key}`)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
