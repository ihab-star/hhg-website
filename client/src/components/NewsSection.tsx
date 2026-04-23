/*
 * Design: Refined Elegance — Hebashi Holding Group
 * News & Updates: Latest company news with featured article + grid layout
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const newsKeys = ["n1", "n2", "n3", "n4"];
const newsImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
];

export default function NewsSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="news" className="section-padding bg-cream" ref={sectionRef}>
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
              {t("news.tag")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t("news.h2_1")} <span className="text-gold">{t("news.h2_2")}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
              {t("news.desc")}
            </p>
          </motion.div>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group relative grid lg:grid-cols-2 bg-white border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl overflow-hidden mb-8"
        >
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img
              src={newsImages[0]}
              alt={t("news.n1title")}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
            <div className={`absolute top-4 ${dir === "rtl" ? "right-4" : "left-4"}`}>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase bg-gold text-navy">
                {t("news.featured")}
              </span>
            </div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-gold">
                <Tag size={12} />
                {t("news.n1cat")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-warm-gray">
                <Calendar size={12} />
                {t("news.n1date")}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
              {t("news.n1title")}
            </h3>
            <p className="text-warm-gray leading-relaxed text-sm mb-6" style={{ fontWeight: 300 }}>
              {t("news.n1desc")}
            </p>
            <button
              onClick={() => toast.info(t("news.comingSoon"))}
              className={`inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link self-start`}
            >
              {t("news.readFull")}
              <ArrowRight size={14} className={`group-hover/link:translate-x-1 transition-transform duration-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </button>
          </div>
        </motion.div>

        {/* Regular Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsKeys.slice(1).map((key, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-white border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={newsImages[i + 1]}
                  alt={t(`news.${key}title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-gold">
                    <Tag size={11} />
                    {t(`news.${key}cat`)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-warm-gray">
                    <Calendar size={11} />
                    {t(`news.${key}date`)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                  {t(`news.${key}title`)}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm mb-4 line-clamp-2" style={{ fontWeight: 300 }}>
                  {t(`news.${key}desc`)}
                </p>
                <button
                  onClick={() => toast.info(t("news.comingSoon"))}
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link"
                >
                  {t("news.readMore")}
                  <ArrowRight size={14} className={`group-hover/link:translate-x-1 transition-transform duration-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
