/*
 * Design: Refined Elegance — Hebashi Holding Group
 * ESG: Sustainable and Responsible Growth
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Shield,
  Lightbulb,
  Leaf,
  Handshake,
  Users,
} from "lucide-react";

const esgItems = [
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description: "Driving sustainable value creation across markets and communities.",
  },
  {
    icon: Shield,
    title: "Governance & Integrity",
    description: "Upholding the highest standards of transparency and accountability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embedding forward-thinking solutions into every layer of operations.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Minimizing footprint and advancing sustainable business practices.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Building strategic alliances that amplify long-term impact.",
  },
  {
    icon: Users,
    title: "Human Capital",
    description: "Investing in people as the foundation of organizational resilience.",
  },
];

export default function ESGSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="esg" className="section-padding bg-background" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="gold-line mx-auto mb-4" />
          <p
            className="text-sm font-medium tracking-widest uppercase text-gold mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ESG
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sustainable and <span className="text-gold">Responsible Growth</span>
          </h2>
          <p
            className="text-warm-gray text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            HHG aligns its operations with global ESG frameworks, integrating sustainability, governance, and social impact into its business model.
          </p>
        </motion.div>

        {/* ESG Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {esgItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-bold text-navy mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-warm-gray leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
