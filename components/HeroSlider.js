"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitText } from './SplitText';
import { FadeIn } from './FadeIn';

const projects = [
    {
        id: 1,
        title: "Forest Glass House",
        subtitle: "Residential",
        location: "Kyoto, Japan",
        image: "/hero.png",
    },
    {
        id: 2,
        title: "Oceanfront Retreat",
        subtitle: "Residential",
        location: "Malibu, CA",
        image: "/project1.png",
    },
    {
        id: 3,
        title: "The Monolith",
        subtitle: "Cultural",
        location: "Berlin, Germany",
        image: "/project2.png",
    }
];

export const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="h-[calc(100vh-var(--nav-height))] mt-[var(--nav-height)] relative flex items-center overflow-hidden bg-background">
            {/* Background Images with Crossfade and Zoom */}
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentIndex}
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        priority="true"
                    />
                </AnimatePresence>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/70 z-[2]"></div>
            </div>

            <div className="container-custom w-full flex justify-between items-end text-white z-[3] pb-[6rem] lg:pb-[6rem] max-lg:flex-col max-lg:items-start max-lg:gap-16">

                {/* Dynamic Project Content */}
                <div className="max-w-[800px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-normal leading-[1.05] mb-8 tracking-[-0.02em]">
                                <SplitText delayOffset={0.1}>{projects[currentIndex].title}</SplitText>
                            </h1>

                            <div className="flex flex-col gap-6 max-w-[400px]">
                                <p className="text-[0.875rem] font-medium tracking-[0.15em] uppercase opacity-80">{projects[currentIndex].subtitle} &bull; {projects[currentIndex].location}</p>
                                <motion.div
                                    className="w-full h-[2px] bg-white/20 mt-4 origin-left"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <motion.div
                                        className="w-full h-full bg-white origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 6, ease: "linear" }}
                                        key={currentIndex} // Reset animation on index change
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Global Architecture DNA & Controls */}
                <div className="flex flex-col gap-8 min-w-[250px]">
                    <FadeIn delay={0.5} y={10} className="flex flex-col gap-2 border-b border-white/20 pb-4">
                        <span className="text-[0.75rem] uppercase tracking-[0.1em] opacity-60">Index</span>
                        <span className="font-sans text-[1.125rem] font-light tracking-[0.05em]">0{currentIndex + 1} / 0{projects.length}</span>
                    </FadeIn>
                    <FadeIn delay={0.7} y={10} className="flex flex-col gap-2 border-b border-white/20 pb-4">
                        <span className="text-[0.75rem] uppercase tracking-[0.1em] opacity-60">Scale</span>
                        <span className="font-sans text-[1.125rem] font-light tracking-[0.05em]">Global Precision</span>
                    </FadeIn>

                    {/* Manual Controls */}
                    <FadeIn delay={0.9} y={10} className="flex gap-4 mt-4">
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                            className="bg-transparent border border-white/30 text-white px-4 py-2 font-sans text-[0.75rem] uppercase tracking-[0.1em] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
                            className="bg-transparent border border-white/30 text-white px-4 py-2 font-sans text-[0.75rem] uppercase tracking-[0.1em] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            Next
                        </button>
                    </FadeIn>
                </div>

            </div>

            {/* Scroll Indicator */}
            <FadeIn delay={1.2} y={0} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
                    <span className="absolute top-0 -left-[2px] w-[5px] h-[5px] rounded-full bg-white animate-[scrollAnim_2s_infinite_cubic-bezier(0.16,1,0.3,1)]"></span>
                </div>
                <style jsx>{`
            @keyframes scrollAnim {
              0% { transform: translateY(-10px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(60px); opacity: 0; }
            }
         `}</style>
            </FadeIn>
        </section>
    );
};
