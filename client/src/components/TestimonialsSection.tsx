/*
 * Design: Refined Elegance
 * Testimonials: Elegant cards with quote marks, navy bg section
 * Gold accent elements, subtle animations
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Horizon Tech",
    text: "Apex transformed our strategic approach entirely. Their team's deep understanding of our industry, combined with their innovative thinking, helped us achieve a 40% growth in just one year.",
    initials: "SM",
  },
  {
    name: "James Rodriguez",
    role: "CFO, Sterling Group",
    text: "The financial advisory services from Apex were instrumental in our successful IPO. Their attention to detail and market expertise gave us the confidence to make bold decisions.",
    initials: "JR",
  },
  {
    name: "Emily Chen",
    role: "Director, Nova Industries",
    text: "Working with Apex on our market expansion into Asia was a game-changer. Their local insights and strategic framework made what seemed impossible entirely achievable.",
    initials: "EC",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="section-padding bg-navy relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

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
            Testimonials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our <span className="text-gold">Clients</span> Say
          </h2>
        </motion.div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-gold/30 transition-all duration-500 group"
            >
              <Quote
                size={32}
                className="text-gold/30 mb-4 group-hover:text-gold/60 transition-colors duration-500"
              />
              <p
                className="text-white/70 leading-relaxed mb-8 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-white font-medium text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/50 text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial - Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8"
          >
            <Quote size={32} className="text-gold/30 mb-4" />
            <p
              className="text-white/70 leading-relaxed mb-8 text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="text-white font-medium text-sm">
                  {testimonials[active].name}
                </div>
                <div className="text-white/50 text-xs">
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    i === active ? "bg-gold w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
