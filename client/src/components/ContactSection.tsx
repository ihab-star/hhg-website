/*
 * Design: Refined Elegance
 * Contact: Split layout — form left, info + image right
 * Gold accents, warm cream bg, elegant form styling
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const CONTACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663591529917/L5JksiWy8AeHi8qNJL6E4C/contact-section-ghjiyFNif5CduHCWitmekk.webp";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Business Avenue, Suite 500\nNew York, NY 10001" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@apexconsulting.com" },
  { icon: Clock, label: "Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM" },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent successfully.", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-white border border-gold/20 text-navy placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors duration-300 text-sm";

  return (
    <section id="contact" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
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
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's Start a <span className="text-gold">Conversation</span>
          </h2>
          <p
            className="text-warm-gray text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Ready to take your business to the next level? Reach out and let's
            discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase text-navy mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClasses}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase text-navy mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClasses}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-medium tracking-wider uppercase text-navy mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className={inputClasses}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium tracking-wider uppercase text-navy mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wider uppercase bg-navy text-white hover:bg-navy-light transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            {/* Image */}
            <div className="relative mb-8 overflow-hidden hidden lg:block">
              <img
                src={CONTACT_IMAGE}
                alt="Our office"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-medium tracking-wider uppercase text-navy mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm text-warm-gray whitespace-pre-line"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
