/*
 * Design: Refined Elegance
 * About: Alternating layout — image left, text right
 * Gold accent line, stats counter, warm cream bg
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Our team collaborating"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold -z-10" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:right-8 bg-navy text-white px-8 py-6 shadow-xl"
            >
              <div className="text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-heading)" }}>
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-sm text-white/70 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gold-line mb-4" />
            <p
              className="text-sm font-medium tracking-widest uppercase text-gold mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Us
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building Trust Through{" "}
              <span className="text-gold">Excellence</span>
            </h2>
            <p
              className="text-warm-gray leading-relaxed mb-6 text-base lg:text-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Founded with a vision to redefine business consulting, Apex has
              grown into a trusted partner for organizations worldwide. We
              combine deep industry expertise with innovative thinking to deliver
              solutions that drive real, measurable growth.
            </p>
            <p
              className="text-warm-gray leading-relaxed mb-8 text-base lg:text-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our approach is rooted in understanding your unique challenges and
              crafting tailored strategies that align with your goals. Every
              engagement is built on transparency, collaboration, and a
              relentless commitment to your success.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-gold pl-4">
                  <div
                    className="text-2xl lg:text-3xl font-bold text-navy"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    className="text-sm text-warm-gray mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
