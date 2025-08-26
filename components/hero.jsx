"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Designing Dreams, Building Reality",
    subtitle: "From universities to cultural landmarks — shaping iconic spaces that inspire generations.",
    img: "/hero/university.webp",
  },
  {
    id: 2,
    title: "Innovative Spaces for Modern Living",
    subtitle: "Crafting luxurious residences and commercial hubs that combine elegance with functionality.",
    img: "/hero/mosque.webp",
  },
  {
    id: 3,
    title: "Healing Environments with Purpose",
    subtitle: "Hospitals designed with care — where architecture meets wellness and efficiency.",
    img: "/hero/hospital-2.webp",
  },
  {
    id: 4,
    title: "Shaping Minds, Building Futures",
    subtitle: "Modern schools and educational spaces that empower creativity, learning, and growth.",
    img: "/hero/school.webp",
  },
  {
    id: 5,
    title: "Spaces that Care for Communities",
    subtitle: "Advanced healthcare facilities built with precision, compassion, and modern design.",
    img: "/hero/hospital.webp",
  },
  {
    id: 6,
    title: "Where Dining Meets Design",
    subtitle: "Restaurants that blend ambiance, comfort, and innovation for memorable experiences.",
    img: "/hero/restaurant.webp",
  },
  {
    id: 7,
    title: "Grand Venues for Timeless Moments",
    subtitle: "Marquees and event spaces crafted to host celebrations with elegance and style.",
    img: "/hero/murquee.webp",
  },
];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // ✅ Next & Prev slide functions
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // ✅ Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-6">
                  <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                    <Link href={"/projects"}>
                  <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">

                    View Projects

                  </button>
                    </Link>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* ✅ Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="md:block hidden absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="md:block hidden absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer"
      >
        <ChevronRight size={28} />
      </button>

      {/* ✅ Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ${
              index === current
                ? "bg-orange-500 scale-110"
                : "bg-white/70 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
