/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Leadership: Cinematic split-layout with CEO photo background.
 * Left: Full-bleed CEO image with diagonal clip + gradient overlay.
 * Right: Name, title, quote, governance, philosophy — clean & minimal.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Users, Scale, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CEO_IMAGE = "/manus-storage/HaniHebashi_f2f09a70.webp";

const govIcons = [Users, Scale, BookOpen];
const govKeys = ["execTeam", "advisory", "legal"];
const philKeys = ["phil1", "phil2", "phil3", "phil4", "phil5", "phil6"];

export default function LeadershipSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0F1A2E" }}
    >
      {/* ── Full-width cinematic layout ── */}
      <div className="relative min-h-[90vh] flex flex-col lg:flex-row">

        {/* ── LEFT: CEO Photo Side ── */}
        <div className="relative lg:w-[45%] w-full h-[60vh] lg:h-auto flex-shrink-0">
          {/* Photo */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${CEO_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
            }}
          />

          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F1A2E]/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F1A2E] lg:hidden" />
          <div className="absolute inset-0 bg-[#0F1A2E]/20" />

          {/* Subtle gold accent line on the edge */}
          <div
            className="absolute top-[15%] bottom-[15%] right-0 w-[2px] hidden lg:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(197,165,114,0.4), transparent)",
            }}
          />

          {/* Name overlay at bottom of photo (mobile) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("leadership.name")}
              </h3>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A572]">
                {t("leadership.title")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Content Side ── */}
        <div className="lg:w-[55%] w-full flex items-center">
          <div className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-20 max-w-2xl">

            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div
                className="w-10 h-[2px] mb-5"
                style={{ background: "linear-gradient(90deg, #C5A572, transparent)" }}
              />
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A572]/80 mb-3">
                {t("leadership.tag")}
              </p>

              {/* Name + Title (desktop) */}
              <div className="hidden lg:block">
                <h3
                  className="text-3xl xl:text-4xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("leadership.name")}
                </h3>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A572] mb-1">
                  {t("leadership.title")}
                </p>
                <p className="text-[11px] tracking-wider text-white/40">
                  {t("leadership.subtitle")}
                </p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-12 relative"
            >
              <div className="absolute -top-2 -left-2 opacity-10">
                <Quote size={48} className="text-[#C5A572]" />
              </div>
              <blockquote
                className="text-white/65 text-base sm:text-lg leading-relaxed italic pl-4 border-l-[2px] border-[#C5A572]/30"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("leadership.quote")}
              </blockquote>
            </motion.div>

            {/* Governance — horizontal compact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3">
                {govKeys.map((key, i) => {
                  const Icon = govIcons[i];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-4 py-2.5 border border-white/8 hover:border-[#C5A572]/25 transition-all duration-500 group"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#C5A572]/60 group-hover:text-[#C5A572] transition-colors"
                      />
                      <span className="text-xs text-white/60 font-medium group-hover:text-white/80 transition-colors">
                        {t(`leadership.${key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Founder's Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <h4 className="text-sm font-bold text-white/90 mb-5 tracking-wide">
                {t("leadership.philTitle_1")}{" "}
                <span className="text-[#C5A572]">{t("leadership.philTitle_2")}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {philKeys.map((key, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: dir === "rtl" ? 15 : -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + 0.06 * i }}
                    className="flex items-start gap-2.5 group"
                  >
                    <div
                      className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rotate-45 transition-colors duration-500"
                      style={{ background: "rgba(197,165,114,0.5)" }}
                    />
                    <p className="text-xs text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                      {t(`leadership.${key}`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Subtle bottom gold line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(197,165,114,0.2), transparent)",
        }}
      />
    </section>
  );
}
