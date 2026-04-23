/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Navbar: Clean, minimal with gold accent underlines, language switcher
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "about", href: "#about" },
  { key: "sectors", href: "#sectors" },
  { key: "platforms", href: "#platforms" },
  { key: "presence", href: "#presence" },
  { key: "esg", href: "#esg" },
  { key: "news", href: "#news" },
  { key: "contact", href: "#contact" },
];

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ka", label: "ქართული", flag: "KA" },
  { code: "ar", label: "العربية", flag: "AR" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentLang = languages.find((l) => l.code === lang)!;

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
          HHG<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navKeys.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${scrolled ? 'text-navy-light hover:text-navy' : 'text-white/80 hover:text-white'}`}
              >
                {t(`nav.${link.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Language + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 border ${
                scrolled
                  ? "text-navy border-gold/30 hover:border-gold"
                  : "text-white/80 border-white/30 hover:border-gold hover:text-white"
              }`}
            >
              <Globe size={14} />
              <span>{currentLang.flag}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 right-0 bg-white border border-gold/20 shadow-lg min-w-[140px] z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-cream ${
                        lang === l.code ? "text-gold font-medium" : "text-navy"
                      }`}
                    >
                      <span className="text-xs font-bold tracking-wider w-6">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className={`inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-primary-foreground bg-navy hover:bg-navy-light' : 'text-navy bg-gold hover:bg-gold-light'}`}
          >
            {t("nav.getInTouch")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}
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
            className="lg:hidden bg-cream/98 backdrop-blur-md border-t border-gold-light/30 overflow-hidden"
          >
            <ul className="container py-6 space-y-4">
              {navKeys.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="block text-base font-medium text-navy-light hover:text-navy transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
              {/* Mobile Language Switcher */}
              <li className="pt-3 border-t border-gold/10">
                <div className="flex gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setMobileOpen(false); }}
                      className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
                        lang === l.code
                          ? "bg-navy text-white border-navy"
                          : "text-navy border-gold/30 hover:border-gold"
                      }`}
                    >
                      {l.flag}
                    </button>
                  ))}
                </div>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-primary-foreground bg-navy mt-2"
                >
                  {t("nav.getInTouch")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
