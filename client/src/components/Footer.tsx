/*
 * Design: Refined Elegance
 * Footer: Navy background, gold accents, clean layout
 */
import { ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Strategic Planning", href: "#services" },
    { label: "Financial Advisory", href: "#services" },
    { label: "Team Development", href: "#services" },
    { label: "Market Expansion", href: "#services" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-2xl font-bold text-white mb-4 inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Apex<span className="text-gold">.</span>
            </a>
            <p
              className="text-white/50 leading-relaxed max-w-sm text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Elevating businesses through strategic consulting, innovative
              solutions, and a relentless commitment to excellence. Your success
              is our mission.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()} Apex Consulting. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
