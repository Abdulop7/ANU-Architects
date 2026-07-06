"use client";

import { motion } from "framer-motion";

export const SplitText = ({ children, className = "", delayOffset = 0 }) => {
    const words = children.split(" ");

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: delayOffset,
                    },
                },
                hidden: {},
            }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", paddingRight: wordIndex !== words.length - 1 ? "0.3em" : "0" }}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            style={{ display: "inline-block" }}
                            variants={{
                                hidden: { y: "150%", opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
};

