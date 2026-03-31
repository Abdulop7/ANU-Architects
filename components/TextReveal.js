"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const TextReveal = ({ children, className = "" }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 80%", "end 50%"]
    });

    const words = children.split(" ");

    return (
        <p ref={container} className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                return (
                    <span key={i} style={{ position: "relative", marginRight: "0.4em" }}>
                        <span style={{ position: "absolute", opacity: 0.15 }}>{word}</span>
                        <motion.span style={{ opacity: opacity }}>{word}</motion.span>
                    </span>
                );
            })}
        </p>
    );
};
