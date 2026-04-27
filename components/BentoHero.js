"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextReveal } from '@/components/TextReveal';
import Image from 'next/image';

export const BentoHero = () => {
    return (
        <section className="h-[calc(100vh-100px)] mt-[100px] bg-background w-full p-6 lg:p-10 flex flex-col gap-6">
            
            {/* Top Row: Main Intro & Featured Image */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 min-h-[400px]">
                
                {/* Left: Intro Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#111111] rounded-2xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"
                    />
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-4 block"
                        >
                            Welcome to Anu Architects
                        </motion.span>
                        <TextReveal 
                           className="font-sans font-black text-[clamp(2.5rem,4vw,4rem)] xl:text-6xl text-primary leading-[1.1] tracking-tighter mb-6"
                           delay={0.2}
                        >
                            Shaping tomorrow's spaces today.
                        </TextReveal>
                    </div>
                    <div>
                        <Link href="/projects" className="inline-flex items-center gap-4 text-primary hover:text-accent transition-colors font-medium">
                            <span className="text-[0.9rem] uppercase tracking-widest">Explore Work</span>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Featured Hero Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#111111] rounded-2xl relative overflow-hidden border border-white/5 group"
                >
                    <Image src="/hero.png" fill priority sizes="(max-width: 768px) 100vw, 50vw" alt="Featured Architecture" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div>
                            <span className="bg-accent text-background text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-3 inline-block">Featured</span>
                            <h2 className="text-3xl font-black text-primary tracking-tight">Forest Glass House</h2>
                        </div>
                        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Kyoto, JP</span>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Row: Stats & Secondary Images */}
            <div className="h-[250px] grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{ opacity: { duration: 1, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
                    className="bg-[#111111] rounded-2xl p-8 border border-white/5 flex flex-col justify-center items-center text-center group transition-colors relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-accent text-5xl font-black tracking-tighter mb-2 relative z-10 group-hover:scale-110 transition-transform duration-500">150+</span>
                    <span className="text-primary text-[0.85rem] uppercase tracking-[0.15em] font-medium relative z-10">Projects Completed</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }}
                    transition={{ opacity: { duration: 1, delay: 0.5 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    className="bg-[#111111] rounded-2xl relative overflow-hidden border border-white/5 group"
                >
                     <Image src="/project1.png" fill sizes="(max-width: 768px) 100vw, 50vw"  alt="Interior" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                        <span className="text-primary text-xl font-bold tracking-widest uppercase border border-white/30 px-6 py-2 backdrop-blur-md group-hover:bg-white/10 transition-colors">Interiors</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
                    className="bg-[#111111] rounded-2xl p-8 border border-white/5 flex flex-col justify-between group transition-colors relative overflow-hidden"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -mr-10 -mb-10 pointer-events-none"
                    />
                    <span className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-4 block group-hover:translate-x-2 transition-transform duration-500">Our Ethos</span>
                    <p className="text-secondary text-[1rem] leading-relaxed relative z-10">
                        We don't just build structures; we sculpt experiences. Every detail is meticulously crafted to harmonize with human emotion and the environment.
                    </p>
                </motion.div>

            </div>

        </section>
    );
};
