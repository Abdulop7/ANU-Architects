"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

function slugify(title, id) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    id
  );
}

export default function JournalClient({ articles }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    return ["All", ...new Set(articles.map((a) => a.category))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (activeCategory !== "All") {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(term) ||
          a.excerpt.toLowerCase().includes(term) ||
          a.category.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [articles, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative pt-[200px] pb-[100px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
        <div className="container-custom relative z-10">
          <FadeIn>
            <h1
              className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-primary leading-[1] mb-6 uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Journal
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="max-w-xl text-[1.1rem] md:text-[1.3rem] leading-[1.6] text-secondary font-sans font-light">
                Perspectives on modern architecture, interior design, and the evolving landscape of construction in Pakistan.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
                {articles.length} Publications
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Interactive Toolbar */}
      <section className="border-b border-white/10 bg-[#0a0a0a] sticky top-[80px] md:top-[100px] z-40">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                  ? "bg-white text-[#050505] border-white"
                  : "bg-transparent text-secondary border-white/10 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              placeholder="SEARCH JOURNAL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-white/10 text-white px-5 py-3 pl-12 text-[0.7rem] uppercase tracking-[0.15em] font-medium outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-white/30"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="container-custom py-[4rem] lg:py-[8rem]">
        {filteredArticles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-none h-60 text-center bg-[#0a0a0a] max-w-2xl mx-auto"
          >
            <div
              className="w-16 h-16 rounded-none flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(255, 122, 0, 0.1)" }}
            >
              <Sparkles className="w-8 h-8" style={{ color: "#FF7A00" }} />
            </div>
            <h3
              className="text-xl font-black tracking-tighter text-primary mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              No Articles Found
            </h3>
            <p className="text-[0.95rem] text-secondary">
              Try adjusting your search criteria or selecting a different category.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={`/journal/${slugify(article.title, article.id)}`}
                    className="group block h-full flex flex-col border border-white/5 bg-[#0a0a0a] hover:border-white/20 transition-all duration-500"
                  >
                    {/* Image Wrapper (No Tag) */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111]">
                      <Image
                        src={article.cover}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover:opacity-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-50" />
                    </div>

                    {/* Content Block */}
                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary mb-4">
                        <span className="text-accent">{article.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h2
                        className="text-2xl md:text-3xl font-bold tracking-tight text-primary leading-[1.2] mb-6 group-hover:text-accent transition-colors duration-300 line-clamp-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {article.title}
                      </h2>

                      <p className="text-[0.9rem] leading-[1.7] text-secondary mb-8 line-clamp-3 flex-grow hidden md:block">
                        {article.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                          Read Article
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
