/*
 * Design: Refined Elegance — Hebashi Holding Group
 * Warm cream bg, navy text, gold accents, Playfair Display + Lato fonts
 * Sections: Hero, About, Operating Model, Sectors, Platforms, Presence,
 *           Technology, ESG, Leadership, News & Insights, Contact, Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import PlatformsSection from "@/components/PlatformsSection";
import PresenceSection from "@/components/PresenceSection";
import TechnologySection from "@/components/TechnologySection";
import ESGSection from "@/components/ESGSection";
import LeadershipSection from "@/components/LeadershipSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <PlatformsSection />
      <PresenceSection />
      <TechnologySection />
      <ESGSection />
      <LeadershipSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
