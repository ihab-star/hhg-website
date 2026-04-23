/*
 * Design: Refined Elegance — Hebashi Holding Group
 * About: Who We Are + Operating Model combined
 */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663591529917/L5JksiWy8AeHi8qNJL6E4C/about-section-4GdwputMwLkFx43L5scwFk.webp";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const modelRef = useRef(null);
  const modelInView = useInView(modelRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 7, suffix: "+", label: t("about.countries") },
    { value: 8, suffix: "", label: t("about.sectors") },
    { value: 970, suffix: "+", label: t("about.professionals") },
  ];

  const operatingModel = [
    { step: "01", title: t("model.s1Title"), description: t("model.s1Desc") },
    { step: "02", title: t("model.s2Title"), description: t("model.s2Desc") },
    { step: "03", title: t("model.s3Title"), description: t("model.s3Desc") },
  ];

  return (
    <>
      {/* Who We Are */}
      <section id="about" className="section-padding bg-cream" ref={sectionRef}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={ABOUT_IMAGE}
                  alt="HHG team collaborating"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
                <div className={`absolute -bottom-3 ${dir === "rtl" ? "-left-3" : "-right-3"} w-full h-full border-2 border-gold -z-10`} />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`absolute -bottom-6 ${dir === "rtl" ? "-left-4 lg:left-8" : "-right-4 lg:right-8"} bg-navy text-white px-8 py-6 shadow-xl`}
              >
                <div className="text-3xl font-bold text-gold">
                  {t("about.est")}
                </div>
                <div className="text-sm text-white/70 mt-1">
                  {t("about.estSub")}
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="gold-line mb-4" />
              <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
                {t("about.tag")}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                {t("about.h2_1")}{" "}
                <span className="text-gold">{t("about.h2_2")}</span>
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6 text-base lg:text-lg" style={{ fontWeight: 300 }}>
                {t("about.p1")}
              </p>
              <p className="text-warm-gray leading-relaxed mb-4 text-base lg:text-lg" style={{ fontWeight: 300 }}>
                {t("about.p2")}
              </p>
              <p className="text-warm-gray leading-relaxed mb-8 text-base lg:text-lg" style={{ fontWeight: 300 }}>
                {t("about.p3")}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className={`${dir === "rtl" ? "border-r-2 pr-4" : "border-l-2 pl-4"} border-gold`}>
                    <div className="text-2xl lg:text-3xl font-bold text-navy">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-warm-gray mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="section-padding bg-background" ref={modelRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={modelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-16"
          >
            <div className="gold-line mb-4" />
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
              {t("model.tag")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t("model.h2_1")} <span className="text-gold">{t("model.h2_2")}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {operatingModel.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={modelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500`} />
                <span className="text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-navy mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm" style={{ fontWeight: 300 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={modelInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mt-12 ${dir === "rtl" ? "border-r-2 pr-6" : "border-l-2 pl-6"} border-gold`}
          >
            <p className="text-warm-gray italic text-base lg:text-lg">
              {t("model.quote")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
