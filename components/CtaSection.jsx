"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Ruler, Building2, BrainIcon, Grid } from "lucide-react";

export default function CTASection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-6 sm:px-12 lg:px-32 text-white overflow-hidden"
    >
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-blue-500/10"
              style={{ top: `${(i + 1) * 8}%` }}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-blue-500/10"
              style={{ left: `${(i + 1) * 8}%` }}
            />
          ))}
        </div>

        {/* Architectural Elements */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-20 left-10 text-blue-500/5"
        >
          <Building2 size={120} />
        </motion.div>
        <motion.div
          style={{ y, opacity: opacity }}
          className="absolute bottom-20 right-10 text-orange-500/5 rotate-45"
        >
          <Grid size={100} />
        </motion.div>
      </div>

      {/* Elevation Indicator */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4">
        <div className="h-40 w-px bg-gradient-to-b from-orange-500 to-transparent"></div>
        <div className="flex items-center space-x-2 text-sm text-gray-400 rotate-90 origin-left">
          <Ruler size={12} />
          <span>ELEVATION 01</span>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1]
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-5xl mx-auto text-center"
      >

        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-orange-400 font-mono text-sm tracking-widest">CALL TO ACTION</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Let&apos;s Architect
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
            Your Digital Foundation
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Every great structure begins with a blueprint. Let&apos;s draft yours together. 
          From concept to completion, we engineer digital experiences that stand the test of time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <Link href="/get-quote">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <BrainIcon className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                COMMENCE PROJECT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover effect lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="absolute top-0 left-0 w-full h-[1px] bg-white/30"
                    style={{ top: `${(i + 1) * 33}%` }}
                  />
                ))}
              </div>
            </motion.button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/projects">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 rounded-full font-medium hover:border-orange-500 transition-colors duration-300 flex items-center"
            >
              <Grid className="mr-3" size={18} />
              VIEW OUR PORTFOLIO
            </motion.button>
          </Link>
        </motion.div>

        {/* Specifications Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-sm text-gray-400 font-mono">
            <span className="text-orange-400">NOTE:</span> Initial consultation includes project blueprint, 
            technical specifications, and timeline estimation.
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
}