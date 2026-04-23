/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Leadership: Chairman & CEO highlight
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function LeadershipSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mx-auto mb-4" />
            <p
              className="text-sm font-medium tracking-widest uppercase text-gold mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Leadership
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8"
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 mx-auto bg-gold/20 flex items-center justify-center text-gold text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              HH
            </div>

            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hani Hebashy
            </h3>
            <p
              className="text-xs font-medium tracking-widest uppercase text-gold mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Chairman & CEO
            </p>

            <div className="relative">
              <Quote size={40} className="text-gold/20 mx-auto mb-4" />
              <p
                className="text-white/70 text-lg sm:text-xl leading-relaxed italic max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "Leading HHG with a vision focused on building scalable, future-ready platforms across global markets."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
