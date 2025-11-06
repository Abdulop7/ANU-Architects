"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const slides = [
  { id: 1, title: "Designing Dreams, Building Reality", subtitle: "From universities to cultural landmarks — shaping iconic spaces that inspire generations.", img: "/hero/university.webp" },
  { id: 2, title: "Innovative Spaces for Modern Living", subtitle: "Crafting luxurious residences and commercial hubs that combine elegance with functionality.", img: "/hero/mosque.webp" },
  { id: 3, title: "Healing Environments with Purpose", subtitle: "Hospitals designed with care — where architecture meets wellness and efficiency.", img: "/hero/hospital-2.webp" },
  { id: 4, title: "Shaping Minds, Building Futures", subtitle: "Modern schools and educational spaces that empower creativity, learning, and growth.", img: "/hero/school.webp" },
  { id: 5, title: "Spaces that Care for Communities", subtitle: "Advanced healthcare facilities built with precision, compassion, and modern design.", img: "/hero/hospital.webp" },
  { id: 6, title: "Where Dining Meets Design", subtitle: "Restaurants that blend ambiance, comfort, and innovation for memorable experiences.", img: "/hero/restaurant.webp" },
  { id: 7, title: "Grand Venues for Timeless Moments", subtitle: "Marquees and event spaces crafted to host celebrations with elegance and style.", img: "/hero/murquee.webp" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const router = useRouter();
  const timerRef = useRef(null);

  // ✅ Define slide handlers BEFORE using them
  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // ✅ Reset timer helper
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 6000);
  }, [nextSlide]);

  // ✅ Initialize timer
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  // ✅ Update navigation handlers to reset timer
  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  // ✅ GSAP animations
  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, filter: "blur(15px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
    );

    const split = new SplitType(".split-text", { types: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: heroRef.current, start: "top center" },
    });

    gsap.to(".hero-wrapper", {
      scale: 1.15,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true,
        start: "bottom bottom",
        end: "bottom top",
      },
    });
  }, []);

  const takeToProjects = () => router.push("/projects");

  return (
    <section ref={heroRef} className="hero-wrapper relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(15px)" }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Fixed Text Overlay */}
      <div ref={textRef} className="absolute text-white inset-0 flex justify-center items-center text-center z-30 pointer-events-none px-6 fixed-title">
        <div className="relative z-10 text-center max-w-3xl px-6 pointer-events-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold split-text">Timeless Architecture</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Where vision meets craftsmanship — redefining modern luxury.
          </p>
          <button onClick={takeToProjects} className="magnetic mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition shadow-xl">
            Explore Projects
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={handlePrev} className="md:block hidden absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer">
        <ChevronLeft size={28} />
      </button>
      <button onClick={handleNext} className="md:block hidden absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition cursor-pointer">
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-40">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrent(index);
              resetTimer();
            }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ${
              index === current ? "bg-orange-500 scale-110" : "bg-white/70 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
