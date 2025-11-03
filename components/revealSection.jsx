"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GSAPShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window) return;
    const el = containerRef.current;

    /* 🟠 Magnetic Cursor */
    const cursor = document.createElement("div");
    cursor.className =
      "fixed top-0 left-0 w-4 h-4 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-difference";
    document.body.appendChild(cursor);

    const moveCursor = (e) =>
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15 });

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll(".magnetic").forEach((item) => {
      item.addEventListener("mouseenter", () => gsap.to(cursor, { scale: 2 }));
      item.addEventListener("mouseleave", () => gsap.to(cursor, { scale: 1 }));
    });

    /* 🟣 Parallax Hero BG */
    gsap.to(".hero-bg", {
      scale: 1.25,
      y: 150,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    /* 🟡 Split Text */
    const split = new SplitType(".split-text", { types: "words" });

    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      stagger: 0.06,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: ".split-text", start: "top 85%" },
    });

    /* 🟢 Basic Reveal */
    gsap.utils.toArray(".reveal-anim").forEach((elem) => {
      gsap.from(elem, {
        opacity: 0,
        y: 70,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: elem, start: "top 85%" },
      });
    });

    /* 🔥 Floor Scroll Stacked Rooms */
    const floors = gsap.utils.toArray(".floor");

    gsap.to(floors, {
      yPercent: -100 * (floors.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".floor-stack",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        end: () => `+=${window.innerHeight * floors.length}`,
      },
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* HERO */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/projects-hero.webp"
          className="hero-bg absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold split-text">
            Timeless Architecture
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Where vision meets craftsmanship — redefining modern luxury.
          </p>

          <button className="magnetic mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition shadow-xl">
            Explore Projects
          </button>
        </div>
      </section>


    </div>
  );
}
