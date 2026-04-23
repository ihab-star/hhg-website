/*
 * Design: Refined Elegance — Hebashi Holding Group
 * ESG: Values aligned with SDGs + ESG Commitment
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Lightbulb, Leaf, Handshake, Users, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const esgIcons = [TrendingUp, Shield, Lightbulb, Leaf, Handshake, Users, Heart];
const valueKeys = ["v1", "v2", "v3", "v4", "v5", "v6", "v7"];

export default function ESGSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="esg" className="section-padding bg-background" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-4" />
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
              {t("esg.tag")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t("esg.h2_1")} <span className="text-gold">{t("esg.h2_2")}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
              {t("esg.desc")}
            </p>
          </motion.div>
        </div>

        {/* First row: 4 values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {valueKeys.slice(0, 4).map((key, i) => {
            const Icon = esgIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 text-gold mb-5 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{t(`esg.${key}`)}</h3>
                <p className="text-warm-gray leading-relaxed text-sm" style={{ fontWeight: 300 }}>
                  {t(`esg.${key}d`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Second row: 3 values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueKeys.slice(4).map((key, i) => {
            const Icon = esgIcons[i + 4];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (i + 4) }}
                className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 text-gold mb-5 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{t(`esg.${key}`)}</h3>
                <p className="text-warm-gray leading-relaxed text-sm" style={{ fontWeight: 300 }}>
                  {t(`esg.${key}d`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ESG Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 bg-navy p-8 sm:p-10"
        >
          <h4 className="text-xl font-bold text-white mb-4">
            {t("esg.commitTitle")}
          </h4>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-6" style={{ fontWeight: 300 }}>
            {t("esg.commitDesc")}
          </p>
          <div className="flex flex-wrap gap-4">
            {[t("esg.gri"), t("esg.ifc"), t("esg.intl")].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-wider uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
