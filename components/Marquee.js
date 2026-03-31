"use client";
import { motion } from 'framer-motion';

export const Marquee = ({ children, reverse = false, speed = 90 }) => {
    return (
        <div className="relative flex overflow-hidden w-full py-16 bg-[#050505] group">
            {/* Removed the side gradients to allow edge-to-edge ADM style scrolling */}
            <div
                className={`flex whitespace-nowrap gap-16 lg:gap-32 px-8 lg:px-16 items-center min-w-max hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {/* 4 sets of children to guarantee we fill wide screens and repeat without jumping */}
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex gap-16 lg:gap-40 items-center">
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};
