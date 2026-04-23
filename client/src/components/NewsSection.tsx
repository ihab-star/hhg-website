/*
 * Design: Refined Elegance — Hebashi Holding Group
 * News & Updates: Latest company news with featured article + grid layout
 * Colors: Cream bg, navy text, gold accents
 * Fonts: Playfair Display headings, Lato body
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { toast } from "sonner";

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "April 15, 2026",
    category: "Expansion",
    title: "HHG Expands Operations into Southeast Asian Markets",
    excerpt:
      "Hebashi Holding Group announces strategic expansion into Malaysia, strengthening its presence across emerging markets with new investment and hospitality ventures.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    date: "March 28, 2026",
    category: "Real Estate",
    title: "Batumi Pearl Launches Luxury Waterfront Development",
    excerpt:
      "A new premium residential and hospitality project on Georgia's Black Sea coast, setting new standards in luxury living.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 3,
    date: "March 10, 2026",
    category: "Technology",
    title: "AI-Powered Analytics Platform Deployed Across All Business Units",
    excerpt:
      "HHG integrates advanced artificial intelligence systems to enhance decision-making and operational performance across its portfolio.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 4,
    date: "February 20, 2026",
    category: "Media",
    title: "HMBC Secures International Film Production Partnership",
    excerpt:
      "A landmark collaboration bringing world-class cinematic production capabilities to regional and international markets.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
];

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="group relative grid lg:grid-cols-2 bg-white border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase bg-gold text-navy"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Tag size={12} />
            {item.category}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs text-warm-gray"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Calendar size={12} />
            {item.date}
          </span>
        </div>

        <h3
          className="text-xl lg:text-2xl font-bold text-navy leading-snug mb-4 group-hover:text-gold transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.title}
        </h3>

        <p
          className="text-warm-gray leading-relaxed text-sm mb-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {item.excerpt}
        </p>

        <button
          onClick={() => toast.info("Full article coming soon")}
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link self-start"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Read Full Article
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </motion.div>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group bg-white border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Tag size={11} />
            {item.category}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs text-warm-gray"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Calendar size={11} />
            {item.date}
          </span>
        </div>

        <h3
          className="text-lg font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.title}
        </h3>

        <p
          className="text-warm-gray leading-relaxed text-sm mb-4 line-clamp-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {item.excerpt}
        </p>

        <button
          onClick={() => toast.info("Full article coming soon")}
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 group/link"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Read More
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featured = newsItems.find((n) => n.featured);
  const regular = newsItems.filter((n) => !n.featured);

  return (
    <section id="news" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-4" />
            <p
              className="text-sm font-medium tracking-widest uppercase text-gold mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Latest Updates
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              News & <span className="text-gold">Insights</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p
              className="text-warm-gray text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Stay informed with the latest developments, strategic milestones,
              and industry insights from across the HHG ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-8">
            <FeaturedCard item={featured} />
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
