/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Contact: Form + info, HHG-specific content
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Globe, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663591529917/L5JksiWy8AeHi8qNJL6E4C/contact-section-ghjiyFNif5CduHCWitmekk.webp";

export default function ContactSection() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.success"), { description: t("contact.successDesc") });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-white border border-gold/20 text-navy placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors duration-300 text-sm";

  return (
    <section id="contact" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="gold-line mx-auto mb-4" />
          <p className="text-sm font-medium tracking-widest uppercase text-gold mb-3">
            {t("contact.tag")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
            {t("contact.h2_1")} <span className="text-gold">{t("contact.h2_2")}</span>
          </h2>
          <p className="text-warm-gray text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-navy mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePh")}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-navy mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPh")}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-navy mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePh")}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wider uppercase bg-navy text-white hover:bg-navy-light transition-colors duration-300"
              >
                <Send size={16} />
                {t("contact.submit")}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative mb-8 overflow-hidden hidden lg:block">
              <img src={CONTACT_IMAGE} alt="HHG office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/20" />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider uppercase text-navy mb-1">
                    {t("contact.hq")}
                  </div>
                  <div className="text-sm text-warm-gray" style={{ fontWeight: 300 }}>
                    {t("contact.hqVal")}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <Globe size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider uppercase text-navy mb-1">
                    {t("contact.ops")}
                  </div>
                  <div className="text-sm text-warm-gray" style={{ fontWeight: 300 }}>
                    {t("contact.opsVal")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
