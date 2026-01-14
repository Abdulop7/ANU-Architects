"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/about-hero.webp"

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage} // replace with your about hero image
          alt="About ANU Architects"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          About <span className="text-orange-500">ANU Architects</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Crafting timeless designs with precision, innovation, and a deep
          commitment to turning visions into reality.
        </p>
      </motion.div>
    </section>
  );
}
