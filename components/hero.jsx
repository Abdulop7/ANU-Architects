"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const slides = [
  { id: 1, img: "/hero/university.webp", title: "Educational Excellence", subtitle: "University Campus" },
  { id: 2, img: "/hero/mosque.webp", title: "Sacred Geometry", subtitle: "Contemporary Mosque" },
  { id: 3, img: "/hero/hospital-2.webp", title: "Healing Spaces", subtitle: "Modern Hospital" },
  { id: 4, img: "/hero/school.webp", title: "Learning Environments", subtitle: "Innovative School" },
  { id: 5, img: "/hero/restaurant.webp", title: "Culinary Architecture", subtitle: "Luxury Restaurant" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  const takeToProjects = () => router.push("/projects");

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 6000);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black font-sans"
    >
      {/* Background Slider with Parallax */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <div
                  className="absolute inset-0 w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${slide.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </motion.div>

      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-20 pointer-events-none" />

      {/* Animated Content */}
      <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
        <div className="max-w-5xl">
          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-[#FF6B35]/20 backdrop-blur-sm border border-[#FF6B35]/30 rounded-sm text-[#FF6B35] text-sm font-semibold tracking-widest uppercase">
                {slides[current].subtitle}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#F8FAFC] text-shadow-lg mb-6"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-[#F8FAFC]/90 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Where vision meets craftsmanship — redefining spaces through precision, innovation, and timeless design excellence.
          </motion.p>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <Button
              onClick={takeToProjects}
              className="bg-[#e4541f] hover:bg-[#e4541f]/90 text-[#F8FAFC] px-12 py-7 text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { prevSlide(); resetTimer(); }}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#F8FAFC]/10 backdrop-blur-md hover:bg-[#FF6B35] border border-[#F8FAFC]/20 text-[#F8FAFC] p-4 rounded-sm shadow-md transition-all duration-300 items-center justify-center group"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { nextSlide(); resetTimer(); }}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-[#F8FAFC]/10 backdrop-blur-md hover:bg-[#FF6B35] border border-[#F8FAFC]/20 text-[#F8FAFC] p-4 rounded-sm shadow-md transition-all duration-300 items-center justify-center group"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Slide Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => { setCurrent(index); resetTimer(); }}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`h-1 transition-all duration-500 rounded-full ${index === current
                  ? "w-16 bg-[#FF6B35] shadow-[0_0_20px_rgba(255,107,53,0.6)]"
                  : "w-8 bg-[#F8FAFC]/40 group-hover:bg-[#F8FAFC]/60"
                }`}
            />
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2 text-[#F8FAFC]/60"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#F8FAFC]/40 to-transparent" />
        <span className="text-xs tracking-widest uppercase rotate-180" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </motion.div>

      {/* Slide Counter */}
      <div className="absolute top-20 right-8 z-20 text-[#F8FAFC]/80 font-mono text-sm tracking-wider">
        <span className="text-2xl font-bold text-[#FF6B35]">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
