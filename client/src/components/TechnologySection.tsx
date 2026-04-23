/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Technology: Intelligence as a Core Layer
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, Cog, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const techIcons = [Brain, LineChart, Cog, Activity];
const techKeys = ["t1", "t2", "t3", "t4"];

export default function TechnologySection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="gold-line mx-auto mb-4" />
          <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
            {t("tech.tag")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
            {t("tech.h2_1")} <span className="text-gold">{t("tech.h2_2")}</span>
          </h2>
          <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            {t("tech.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techKeys.map((key, i) => {
            const Icon = techIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center"
              >
                <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
                <div className="w-14 h-14 mx-auto flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {t(`tech.${key}Title`)}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm" style={{ fontWeight: 300 }}>
                  {t(`tech.${key}Desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-12 ${dir === "rtl" ? "border-r-2 pr-6" : "border-l-2 pl-6"} border-gold`}
        >
          <p className="text-warm-gray italic text-base lg:text-lg">
            {t("tech.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
