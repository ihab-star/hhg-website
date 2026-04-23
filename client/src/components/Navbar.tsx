/*
 * Design: Refined Elegance — Scandinavian-inspired
 * Navbar: Clean, minimal with gold accent underlines on hover
 * Font: Playfair Display for logo, Lato for nav links
 * Colors: Navy text on cream background, gold accents
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-gold-light)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Apex<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${scrolled ? 'text-navy-light hover:text-navy' : 'text-white/80 hover:text-white'}`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
          className={`hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-primary-foreground bg-navy hover:bg-navy-light' : 'text-navy bg-gold hover:bg-gold-light'}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Get in Touch
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream/98 backdrop-blur-md border-t border-gold-light/30 overflow-hidden"
          >
            <ul className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="block text-base font-medium text-navy-light hover:text-navy transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-primary-foreground bg-navy mt-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
