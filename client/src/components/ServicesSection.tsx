/*
 * Design: Refined Elegance
 * Services: Cards with subtle glass morphism, gold icon accents
 * Marble-like background texture, outline icons
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  Globe,
  Lightbulb,
  Shield,
} from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663591529917/L5JksiWy8AeHi8qNJL6E4C/services-bg-S9bqrKxtpobtK7Zm4LUmtn.webp";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description:
      "We develop comprehensive roadmaps that align your business objectives with actionable strategies for sustainable growth.",
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "Expert financial guidance to optimize your capital structure, manage risk, and maximize returns on investment.",
  },
  {
    icon: Users,
    title: "Team Development",
    description:
      "Build high-performing teams through leadership coaching, talent acquisition, and organizational development programs.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description:
      "Navigate new markets with confidence through our research-driven approach to international growth and market entry.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Transform your business with cutting-edge digital solutions, process automation, and technology integration.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Protect your business with proactive risk assessment, compliance frameworks, and crisis management strategies.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src={SERVICES_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
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
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Services Tailored to{" "}
            <span className="text-gold">Your Needs</span>
          </h2>
          <p
            className="text-warm-gray text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            We offer a comprehensive suite of consulting services designed to
            address every facet of your business growth journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative bg-white/70 backdrop-blur-sm p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Gold top line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />

                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl font-bold text-navy mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-warm-gray leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
