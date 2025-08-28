"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-24 h-24"
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 0.8,
        }}
      />
    </motion.div>
  );
}
