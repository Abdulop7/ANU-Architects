"use client";

import { motion } from "framer-motion";

export default function Maintenance() {
    return (
        <div className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center p-6 text-center select-none overflow-hidden font-sans">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
                <div className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-accent/10 rounded-full blur-[120px] absolute mix-blend-screen"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center max-w-2xl mx-auto"
            >
                {/* Architectural Icon */}
                <div className="mb-10 relative">
                    <div className="w-20 h-20 border border-white/10 flex items-center justify-center rotate-45 transition-transform duration-1000 hover:rotate-90">
                        <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent shadow-[0_0_10px_rgba(255,204,0,0.8)]"></div>
                        </div>
                    </div>
                </div>

                <h1 className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-white/95 uppercase mb-6 drop-shadow-2xl">
                    System<br />Upgrade
                </h1>
                
                <p className="text-secondary leading-[1.8] text-[1.1rem] md:text-[1.2rem] max-w-lg mb-12">
                    We are currently refining our digital infrastructure to bring you an elevated experience. The studio's portal will be back online shortly.
                </p>

                <div className="flex items-center gap-4 text-[0.75rem] uppercase tracking-[0.2em] text-accent font-bold bg-[#111] px-6 py-3 border border-white/5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    Maintenance Mode Active
                </div>
            </motion.div>
        </div>
    );
}
