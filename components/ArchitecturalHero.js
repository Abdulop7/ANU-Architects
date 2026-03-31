"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const backgroundImages = [
    "/projects/Zia_Ul_Uloom_University/1.webp",
    "/projects/Bashir_Begum_Hospital/1.webp",
    "/projects/Jamia_Khair_Ul_Madaris/1.webp",
    "/projects/Shahan_Office/5.webp",
    "/projects/Bloomfield_School/1.webp",
];

export const ArchitecturalHero = () => {
    const containerRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects for background and text
    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#050505]">
            {/* Background Image with Initial Zoom & Continuous Pan */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                >
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
                        />
                    </AnimatePresence>
                </motion.div>

                {/* Gradient Overlays for Depth and Contrast */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Glowing Accent Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
            />

            {/* Content Container */}
            <div className="relative h-full container-custom flex flex-col justify-center lg:justify-end pb-[12vh] lg:pb-[15vh] z-10 pointer-events-none px-6 lg:px-12 pt-[120px]">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    className="flex flex-col gap-6"
                >
                    {/* Top small label */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[2px] bg-accent"></div>
                            <span className="text-accent font-bold tracking-[0.25em] uppercase text-[0.85rem]">Architectural Excellence</span>
                        </motion.div>
                    </div>

                    {/* Massive Typography Intro */}
                    <h1 className="font-sans font-black text-[clamp(3.2rem,11vw,14rem)] leading-[0.9] tracking-tighter text-white uppercase drop-shadow-2xl flex flex-col">
                        <div className="overflow-hidden pb-2">
                            <motion.span
                                initial={{ opacity: 0, y: "100%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="block origin-bottom left-0"
                            >
                                Visionary
                            </motion.span>
                        </div>
                        <div className="overflow-hidden pb-4">
                            <motion.span
                                initial={{ opacity: 0, y: "100%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40"
                            >
                                Structures.
                            </motion.span>
                        </div>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 lg:mt-10 border-t border-white/10 pt-10"
                    >
                        <p className="text-secondary text-[1.15rem] leading-[1.8] max-w-lg pointer-events-auto font-light">
                            We are an international architectural practice dedicated to creating spatial experiences that resonate with emotion, context, and purpose.
                        </p>
                        <div className="flex xl:justify-end items-start pointer-events-auto w-full mt-4 md:mt-0">
                            <Link href="/projects" className="relative overflow-hidden inline-flex items-center justify-center gap-6 border border-white/30 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold uppercase tracking-[0.15em] transition-colors duration-500 group w-full md:w-auto">
                                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Discover Work</span>
                                <div className="relative z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-background/20 transition-colors duration-500 group-hover:text-background">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
                className="absolute bottom-6 right-6 lg:bottom-80 lg:right-16 z-20 hidden md:flex  flex-col items-center gap-6"
            >
                <span className="text-white/40 text-[0.65rem] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">Scroll</span>
                <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 96] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-accent absolute top-[-50%]"
                    />
                </div>
            </motion.div>
        </section>
    );
};
