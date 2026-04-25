/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Platforms: Cards for each of the 7 integrated platforms
 * HMBC renamed to HMPC. Logos for HMPC and OTI included.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const HMPC_LOGO = "/manus-storage/HMPClogo_e6637af3.png";
const OTI_LOGO = "/manus-storage/OtilogoB_73e91374.png";

const platformKeys = ["virtu", "hmpc", "batumi", "zmc", "ctc", "oti", "caucasus"];
const platformNames = ["Virtu", "HMPC", "Batumi Pearl", "ZMC", "CTC", "OTI Development", "Caucasus Paradise"];

/* Map platform keys to their logos (only for those that have logos) */
const platformLogos: Record<string, string> = {
  hmpc: HMPC_LOGO,
  oti: OTI_LOGO,
};

export default function PlatformsSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="platforms" className="section-padding bg-background" ref={sectionRef}>
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
              {t("platforms.tag")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t("platforms.h2_1")} <span className="text-gold">{t("platforms.h2_2")}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
              {t("platforms.desc")}
            </p>
          </motion.div>
        </div>

        {/* Top 3 platforms - larger cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {platformKeys.slice(0, 3).map((key, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
              
              {/* Logo if available */}
              {platformLogos[key] && (
                <div className="mb-4">
                  <img
                    src={platformLogos[key]}
                    alt={platformNames[i]}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              )}
              
              <p className="text-xs font-medium tracking-widest uppercase text-gold mb-4">
                {t(`platforms.${key}.cat`)}
              </p>
              <h3 className="text-2xl font-bold text-navy mb-4">
                {platformNames[i]}
              </h3>
              <p className="text-warm-gray leading-relaxed text-sm mb-6" style={{ fontWeight: 300 }}>
                {t(`platforms.${key}.desc`)}
              </p>
              <button
                onClick={() => toast.info(t("platforms.comingSoon"))}
                className={`inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link`}
              >
                {t("platforms.learnMore")}
                <ArrowRight size={14} className={`group-hover/link:translate-x-1 transition-transform duration-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom 4 platforms - smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformKeys.slice(3).map((key, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 3) }}
              className="group relative bg-white p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
              
              {/* Logo if available */}
              {platformLogos[key] && (
                <div className="mb-3">
                  <img
                    src={platformLogos[key]}
                    alt={platformNames[i + 3]}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}
              
              <p className="text-xs font-medium tracking-widest uppercase text-gold mb-3">
                {t(`platforms.${key}.cat`)}
              </p>
              <h3 className="text-lg font-bold text-navy mb-3">
                {platformNames[i + 3]}
              </h3>
              <p className="text-warm-gray leading-relaxed text-sm mb-4" style={{ fontWeight: 300 }}>
                {t(`platforms.${key}.desc`)}
              </p>
              <button
                onClick={() => toast.info(t("platforms.comingSoon"))}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link"
              >
                {t("platforms.learnMore")}
                <ArrowRight size={14} className={`group-hover/link:translate-x-1 transition-transform duration-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
