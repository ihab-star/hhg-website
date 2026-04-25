/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Navbar: Clean, minimal — transparent over hero, subtle white/cream after scroll.
 * Uses HHG logo images (white on dark, black on light).
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const HHG_LOGO_WHITE = "/manus-storage/hhglogowhite_babfdaea.png";
const HHG_LOGO_BLACK = "/manus-storage/HHGlogoblack_3b2ba390.jpg";

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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  /* ── Style tokens ── */
  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
    : "bg-transparent";

  const textColor = scrolled ? "text-[#1B2A4A]" : "text-white/90";
  const textHover = scrolled ? "hover:text-[#1B2A4A]" : "hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${navBg}`}
    >
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="transition-opacity duration-500 hover:opacity-80 flex-shrink-0"
        >
          <img
            src={scrolled ? HHG_LOGO_BLACK : HHG_LOGO_WHITE}
            alt="Hebashi Holding Group"
            className="h-10 w-auto object-contain transition-all duration-500"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navKeys.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-500 group ${textColor} ${textHover}`}
              >
                {t(`nav.${link.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-500 border rounded-sm ${
                scrolled
                  ? "text-[#1B2A4A] border-[#1B2A4A]/15 hover:border-gold"
                  : "text-white/80 border-white/25 hover:border-gold hover:text-white"
              }`}
            >
              <Globe size={13} />
              <span>{currentLang.flag}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full mt-2 right-0 bg-white border border-gray-100 shadow-xl shadow-black/5 min-w-[140px] z-50 rounded-sm overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-cream ${
                        lang === l.code ? "text-gold font-medium" : "text-[#1B2A4A]"
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
            className={`inline-flex items-center px-6 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-500 rounded-sm ${
              scrolled
                ? "bg-[#1B2A4A] text-white hover:bg-[#2a3d62]"
                : "bg-gold text-[#1B2A4A] hover:bg-gold-light"
            }`}
          >
            {t("nav.getInTouch")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? "text-[#1B2A4A]" : "text-white"}`}
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <ul className="container py-6 space-y-4">
              {navKeys.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="block text-base font-medium text-[#1B2A4A]/80 hover:text-[#1B2A4A] transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
              {/* Mobile Language Switcher */}
              <li className="pt-3 border-t border-gray-100">
                <div className="flex gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setMobileOpen(false); }}
                      className={`px-4 py-2 text-sm font-medium border rounded-sm transition-colors duration-200 ${
                        lang === l.code
                          ? "bg-[#1B2A4A] text-white border-[#1B2A4A]"
                          : "text-[#1B2A4A] border-gray-200 hover:border-gold"
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
                  className="inline-flex items-center px-6 py-2.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#1B2A4A] rounded-sm mt-2"
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
