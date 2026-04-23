/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Platforms: Cards for each of the 7 integrated platforms
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const platforms = [
  {
    category: "Investment & Real Estate",
    name: "Virtu",
    description:
      "A modern investment company focused on creating accessible opportunities in real estate and strategic assets. Through innovation, structured investment models, and growth-driven projects, Virtu connects investors with high-potential opportunities designed for long-term value creation.",
  },
  {
    category: "Media & Production",
    name: "HMBC",
    description:
      "A dynamic media and production company specializing in film production, creative content, and entertainment projects. HMBC focuses on delivering high-quality cinematic experiences, innovative storytelling, and professional production services for regional and international markets.",
  },
  {
    category: "Hospitality & Real Estate",
    name: "Batumi Pearl",
    description:
      "A premier real estate development and hospitality platform in Georgia. Batumi Pearl specializes in luxury property development, resort management, and strategic asset creation, positioning itself as a cornerstone of Georgia's tourism and investment landscape.",
  },
  {
    category: "Construction & Engineering",
    name: "ZMC",
    description:
      "Construction and engineering execution platform delivering infrastructure and development projects across emerging markets.",
  },
  {
    category: "Telecommunications",
    name: "CTC",
    description:
      "Telecommunications and outsourcing solutions providing connectivity and operational excellence across regional markets.",
  },
  {
    category: "Real Estate",
    name: "OTI Real Estate",
    description:
      "Real estate development and services platform creating premium residential and commercial properties.",
  },
  {
    category: "Hospitality & Tourism",
    name: "Caucasus Paradise",
    description:
      "Tourism and hospitality platform delivering exceptional travel experiences and resort management services.",
  },
];

export default function PlatformsSection() {
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
            <p
              className="text-sm font-medium tracking-widest uppercase text-gold mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Integrated Ecosystem
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our <span className="text-gold">Platforms</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p
              className="text-warm-gray text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Seven integrated business platforms working synergistically to create value across investment, media, technology, and real estate sectors.
            </p>
          </motion.div>
        </div>

        {/* Top 3 platforms - larger cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {platforms.slice(0, 3).map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative bg-white p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              <p
                className="text-xs font-medium tracking-widest uppercase text-gold mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {platform.category}
              </p>
              <h3
                className="text-2xl font-bold text-navy mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {platform.name}
              </h3>
              <p
                className="text-warm-gray leading-relaxed text-sm mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {platform.description}
              </p>
              <button
                onClick={() => toast.info("Platform page coming soon")}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Learn More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom 4 platforms - smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.slice(3).map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 3) }}
              className="group relative bg-white p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              <p
                className="text-xs font-medium tracking-widest uppercase text-gold mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {platform.category}
              </p>
              <h3
                className="text-lg font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {platform.name}
              </h3>
              <p
                className="text-warm-gray leading-relaxed text-sm mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {platform.description}
              </p>
              <button
                onClick={() => toast.info("Platform page coming soon")}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Learn More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
