/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Presence: Global footprint with location cards
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { country: "Georgia", role: "Strategic Gateway", highlight: true },
  { country: "United Arab Emirates", role: "Regional Hub", highlight: false },
  { country: "Egypt", role: "North Africa", highlight: false },
  { country: "Turkey", role: "Crossroads Market", highlight: false },
  { country: "Oman", role: "Gulf Presence", highlight: false },
  { country: "Malaysia", role: "Southeast Asia", highlight: false },
];

export default function PresenceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="presence" className="section-padding bg-navy relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
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
            Global Footprint
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Global <span className="text-gold">Footprint</span>
          </h2>
          <p
            className="text-white/60 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            HHG operates through a hub-and-network model, with Georgia serving as a strategic gateway connecting regional markets.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`group relative p-6 border transition-all duration-500 ${
                loc.highlight
                  ? "bg-gold/10 border-gold/30 hover:bg-gold/20"
                  : "bg-white/5 border-white/10 hover:border-gold/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center ${
                  loc.highlight ? "bg-gold text-navy" : "border border-gold/30 text-gold"
                }`}>
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {loc.country}
                  </h3>
                  <p
                    className="text-xs font-medium tracking-widest uppercase text-gold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {loc.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
