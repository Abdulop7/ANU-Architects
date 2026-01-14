"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo (bouncing ball effect) */}
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-24 h-24"
        animate={{
          y: [0, -80, 0], // jump up and fall down
          scaleY: [1, 1, 0.75, 1], // squash only when hitting bottom
          scaleX: [1, 1, 1.2, 1], // stretch sideways at bottom
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatType: "loop",
          ease: ["easeOut", "easeIn", "easeOut", "easeIn"], // gravity-like motion
          times: [0, 0.45, 0.9, 1], // better sync (squash at bottom, no flicker)
        }}
      />

    </motion.div>
  );
}
