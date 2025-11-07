"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  { id: 1, img: "/hero/university.webp" },
  { id: 2, img: "/hero/mosque.webp" },
  { id: 3, img: "/hero/hospital-2.webp" },
  { id: 4, img: "/hero/school.webp" },
  { id: 5, img: "/hero/hospital.webp" },
  { id: 6, img: "/hero/restaurant.webp" },
  { id: 7, img: "/hero/murquee.webp" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const timerRef = useRef(null);

  // ✅ Slide navigation
  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // ✅ Auto slide timer
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 6000);
  };

  const takeToProjects = () => router.push("/projects");

  return (
    <section
      className="hero-wrapper relative min-h-screen w-full overflow-hidden"
      style={{ position: "relative", zIndex: 1 }}
    >

      {/* ✅ Background Slider */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* ✅ Fixed Content */}
      <div className="absolute text-white inset-0 flex justify-center items-center text-center z-30 px-6">
        <div className="z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-extrabold">
            Timeless Architecture
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Where vision meets craftsmanship — redefining modern luxury.
          </p>
          <button
            onClick={takeToProjects}
            className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition shadow-xl"
          >
            Explore Projects
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => { prevSlide(); resetTimer(); }}
        className="md:block hidden absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => { nextSlide(); resetTimer(); }}
        className="md:block hidden absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer"
      >
        <ChevronRight size={28} />
      </button>

      {/* ✅ Slide Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-40">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrent(index);
              resetTimer();
            }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition 
            ${index === current ? "bg-orange-500 scale-110" : "bg-white/70 hover:bg-orange-400"}`}
          />
        ))}
      </div>

    </section>
  );
}
