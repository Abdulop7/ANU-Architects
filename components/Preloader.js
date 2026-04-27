"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fast fake progress counter
        const duration = 50; // 1.5 seconds loading phase
        const intervalTime = 20;
        const totalSteps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            setProgress(Math.min(Math.round((currentStep / totalSteps) * 100), 100));

            if (currentStep >= totalSteps) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                }, 0); // brief pause at 100% before sliding up
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    // Also disable scroll while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
                    initial={{ y: "0%" }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Very cinematic ease in-out
                    }}
                >
                    {/* The Loading Line & Text */}
                    <div className="w-[200px] flex flex-col items-center gap-6">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-sans font-bold text-accent tracking-[0.3em] uppercase text-sm"
                            >
                                {progress === 100 ? "Welcome" : "Loading"}
                            </motion.span>
                        </div>

                        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-accent"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="overflow-hidden w-full flex justify-between text-white/40 text-[0.65rem] font-medium tracking-widest uppercase">
                            <span>Global</span>
                            <span>{progress}%</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
