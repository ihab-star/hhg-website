/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Footer: Navy background, gold accents, HHG branding
 */
import { ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Sectors", href: "#sectors" },
    { label: "Platforms", href: "#platforms" },
    { label: "Presence", href: "#presence" },
    { label: "ESG", href: "#esg" },
    { label: "Contact", href: "#contact" },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-2xl font-bold text-white mb-4 inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              HHG<span className="text-gold">.</span>
            </a>
            <p
              className="text-white/50 leading-relaxed max-w-md text-sm mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Building integrated platforms for long-term value creation across global markets.
            </p>
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Est. 2008
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
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
            &copy; {new Date().getFullYear()} Hebashi Holding Group. All rights reserved.
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
