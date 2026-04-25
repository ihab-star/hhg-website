/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Footer: Navy background, gold accents, HHG white logo
 */
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HHG_LOGO_WHITE = "/manus-storage/hhglogowhite_babfdaea.png";

const navKeys = ["about", "sectors", "platforms", "presence", "esg", "news", "contact"];
const navHrefs = ["#about", "#sectors", "#platforms", "#presence", "#esg", "#news", "#contact"];

export default function Footer() {
  const { t } = useLanguage();

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
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={HHG_LOGO_WHITE}
                alt="Hebashi Holding Group"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-white/50 leading-relaxed max-w-md text-sm mb-4" style={{ fontWeight: 300 }}>
              {t("footer.desc")}
            </p>
            <p className="text-white/30 text-xs">
              {t("footer.est")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase text-gold mb-4">
              {t("footer.navTitle")}
            </h4>
            <ul className="space-y-3">
              {navKeys.map((key, i) => (
                <li key={key}>
                  <a
                    href={navHrefs[i]}
                    onClick={(e) => { e.preventDefault(); scrollTo(navHrefs[i]); }}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
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
