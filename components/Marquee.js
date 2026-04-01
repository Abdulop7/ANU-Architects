"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export const Marquee = ({ children, reverse = false, speed = 80 }) => {
    const containerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const x = useMotionValue(0);

    const baseVelocity = reverse ? speed : -speed;
    const isDragging = useRef(false);

    useEffect(() => {
        if (containerRef.current) {
            // Measure one full block's width including its right-side gap 
            setContentWidth(containerRef.current.getBoundingClientRect().width);
        }
    }, [children]);

    useAnimationFrame((t, delta) => {
        if (!contentWidth) return;
        
        // Pause auto-scroll while user is grabbing and dragging
        if (isDragging.current) return;

        let moveBy = baseVelocity * (delta / 1000);
        let newX = x.get() + moveBy;
        
        x.set(wrap(-contentWidth, 0, newX));
    });

    return (
        <div className="relative flex overflow-hidden w-full py-16 bg-[#050505] cursor-grab active:cursor-grabbing hover:opacity-100 opacity-90 transition-opacity">
            <motion.div
                className="flex whitespace-nowrap w-max"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -contentWidth * 2, right: contentWidth }} 
                // Large constraints just so it doesn't rubber-band weirdly locally
                dragElastic={0}
                onDragStart={() => (isDragging.current = true)}
                onDragEnd={() => (isDragging.current = false)}
                // When dragging, manually process wrap logic immediately so it never breaks bounds
                onDrag={(e, info) => {
                    let newX = x.get() + info.delta.x;
                    // Keep wrapping cleanly during intense yanks
                    if(newX <= -contentWidth) newX += contentWidth;
                    if(newX > 0) newX -= contentWidth;
                    x.set(newX);
                }}
            >
                {/* Block 1 */}
                <div ref={containerRef} className="flex items-center w-max gap-16 lg:gap-32 pr-16 lg:pr-32">
                    {children}
                </div>
                {/* Block 2 clone for seamless loop */}
                <div className="flex items-center w-max gap-16 lg:gap-32 pr-16 lg:pr-32">
                    {children}
                </div>
                {/* Block 3 clone to prevent gaps on ultra wide dragged buffers */}
                <div className="flex items-center w-max gap-16 lg:gap-32 pr-16 lg:pr-32">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};
