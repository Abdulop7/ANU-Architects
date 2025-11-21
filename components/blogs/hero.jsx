"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/blog-hero.webp"
import { useEffect } from "react";

export default function BlogsHero() {
  const scrollToBlogs = () => {
    const element = document.getElementById("blogs");
    if (!element) return;

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Automatically scroll to the projects section when page loads
    const projectsSection = document.getElementById("search");
    const headerOffset = 100; // adjust this if your header is taller
    const elementPosition = projectsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    if (projectsSection) {
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 1200); // small delay so hero finishes loading first
    }
  }, []);

  return (
    <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 overflow-hidden flex items-center">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-700/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-28 right-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          Insights & <span className="text-orange-500">Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Articles on design thinking, case studies, and architectural practice — curated by ANU Architects.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8"
        >
          <button
            onClick={scrollToBlogs}
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Articles
          </button>
        </motion.div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-10 md:opacity-20 pointer-events-none">
        <Image
          src={heroImage}
          alt="Blogs Hero"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
    </section>
  );
}
