/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Leadership: Chairman & CEO highlight + Governance + Founder's Philosophy
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Users, Scale, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const govIcons = [Users, Scale, BookOpen];
const govKeys = ["execTeam", "advisory", "legal"];
const philKeys = ["phil1", "phil2", "phil3", "phil4", "phil5", "phil6"];

export default function LeadershipSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="gold-line mx-auto mb-4" />
          <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
            {t("leadership.tag")}
          </p>
        </motion.div>

        {/* Leader Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="w-24 h-24 mx-auto bg-gold/20 flex items-center justify-center text-gold text-2xl font-bold mb-6">
            HH
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t("leadership.name")}
          </h3>
          <p className="text-xs font-medium tracking-widest uppercase text-gold mb-1">
            {t("leadership.title")}
          </p>
          <p className="text-xs font-medium tracking-wider text-white/50 mb-8">
            {t("leadership.subtitle")}
          </p>

          <div className="relative">
            <Quote size={40} className="text-gold/20 mx-auto mb-4" />
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed italic max-w-2xl mx-auto">
              {t("leadership.quote")}
            </p>
          </div>
        </motion.div>

        {/* Governance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {govKeys.map((key, i) => {
            const Icon = govIcons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <p className="text-sm text-white/80 font-medium">
                  {t(`leadership.${key}`)}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Founder's Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
            {t("leadership.philTitle_1")} <span className="text-gold">{t("leadership.philTitle_2")}</span>
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {philKeys.map((key, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + 0.08 * i }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-2 h-2 bg-gold flex-shrink-0" />
                <p className="text-sm text-white/80">
                  {t(`leadership.${key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
