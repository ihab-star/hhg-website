/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Hero Splash: Full-screen cinematic entrance with Tbilisi background.
 * - Fade from black → reveal
 * - Background zoom-in (scale 1.1 → 1 over 3s)
 * - Title: fade + slide up + scale with letter-spacing glow
 * - Slogan: fade + slide up with delay
 * - Subtle parallax on scroll
 * - Pure CSS keyframes for performance (no heavy libraries)
 */
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── High-quality Tbilisi, Georgia — Unsplash (free) ── */
const TBILISI_IMAGE =
  "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=2000&q=85";

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [entered, setEntered] = useState(false);

  /* Trigger entrance after mount */
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* Lightweight parallax — only requestAnimationFrame, passive listener */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY * 0.25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ── Black overlay that fades out (cinematic reveal) ── */}
      <div
        className="absolute inset-0 z-30 bg-black pointer-events-none"
        style={{
          opacity: entered ? 0 : 1,
          transition: "opacity 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* ── Background image with zoom-in + parallax ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url(${TBILISI_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            transform: entered ? "scale(1)" : "scale(1.12)",
            opacity: entered ? 1 : 0.6,
            transition:
              "transform 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 2s ease-out",
          }}
        />
      </div>

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* ── Subtle vignette for cinematic depth ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Gold accent line */}
        <div
          className="mb-8"
          style={{
            width: entered ? "80px" : "0px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C5A572, transparent)",
            transition: "width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s",
          }}
        />

        {/* HHG Title */}
        <h1
          className="font-heading leading-none select-none"
          style={{
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            fontWeight: 700,
            letterSpacing: entered ? "0.25em" : "0.15em",
            color: "#ffffff",
            textShadow: "0 0 60px rgba(197,165,114,0.25), 0 0 120px rgba(197,165,114,0.1)",
            opacity: entered ? 1 : 0,
            transform: entered
              ? "translateY(0) scale(1)"
              : "translateY(40px) scale(0.95)",
            transition:
              "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s, letter-spacing 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s",
          }}
        >
          HHG
        </h1>

        {/* Slogan */}
        <p
          className="font-body max-w-xl"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
            fontWeight: 300,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.75)",
            marginTop: "1.2rem",
            textTransform: "uppercase",
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s",
          }}
        >
          Building Platforms, Not Companies
        </p>

        {/* Thin separator */}
        <div
          className="mt-8"
          style={{
            width: entered ? "40px" : "0px",
            height: "1px",
            background: "rgba(197,165,114,0.5)",
            transition: "width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s",
          }}
        />

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-10"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s",
          }}
        >
          <a
            href="#platforms"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#platforms")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-500 rounded-sm"
            style={{
              background: "linear-gradient(135deg, #C5A572, #D4B98A)",
              color: "#1B2A4A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #D4B98A, #E0C89E)";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(197,165,114,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #C5A572, #D4B98A)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-[0.15em] uppercase border transition-all duration-500 rounded-sm"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.85)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C5A572";
              e.currentTarget.style.color = "#C5A572";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        aria-label="Scroll down"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 0.8s ease 2.4s",
        }}
      >
        <div className="flex flex-col items-center gap-2 group">
          <span
            className="text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Scroll
          </span>
          <div
            className="w-[1px] h-8 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <div
              className="absolute top-0 left-0 w-full bg-gold"
              style={{
                height: "50%",
                animation: "scrollPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </button>

      {/* ── Keyframe for scroll indicator ── */}
      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
}
