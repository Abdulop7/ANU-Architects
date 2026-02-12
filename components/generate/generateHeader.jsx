"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/blogs-hero.webp"; // replace with your hero image

export default function GenerateImageHero() {
  return (
    <section className="relative w-full h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="AI Image Generation"
          className="w-full h-full object-cover opacity-30"
          priority
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Generate{" "}
          <span className="text-orange-500">
            Images
          </span>{" "}
          with AI
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Upload your images, choose a style, and let AI craft high‑quality
          visuals for your projects in seconds.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
        </motion.div>
      </motion.div>
    </section>
  );
}