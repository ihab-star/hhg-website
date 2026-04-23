/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Technology: Intelligence as a Core Layer
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, Cog, Activity } from "lucide-react";

const techItems = [
  {
    icon: Brain,
    title: "Investment Intelligence",
    description: "AI-driven analysis for smarter capital allocation and opportunity identification.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forward-looking models that anticipate market shifts and operational needs.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamlined workflows across platforms to reduce friction and increase throughput.",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description: "Real-time dashboards and KPI tracking across all business units.",
  },
];

export default function TechnologySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={sectionRef}>
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
            Technology
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Intelligence as a <span className="text-gold">Core Layer</span>
          </h2>
          <p
            className="text-warm-gray text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Artificial Intelligence and data systems are embedded across HHG operations to enhance decision-making, optimize performance, and enable scalable growth.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-14 h-14 mx-auto flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-bold text-navy mb-3"
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
