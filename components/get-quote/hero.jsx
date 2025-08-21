"use client";

import { motion } from "framer-motion";

export default function QuoteHero() {
  // Smooth scroll to quote form
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    if (!element) return;

    const headerOffset = 150; // adjust if sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 overflow-hidden flex items-center">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-700/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          Get a <span className="text-orange-500">Quote</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Tell us about your vision, and our team will prepare a tailored
          proposal with transparent pricing and timelines — crafted just for you.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={scrollToForm}
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Quote
          </button>
        </motion.div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-10 md:opacity-20 pointer-events-none">
        <img
          src="/quote-hero.jpg"
          alt="Get a Quote Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
    </section>
  );
}
