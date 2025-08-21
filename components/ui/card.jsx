"use client";

import { motion } from "framer-motion";

export default function Card({ name, role, education, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative w-80 md:w-96 rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 hover:border-orange-400 transition-all duration-300 p-8 flex flex-col items-center"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div className="absolute inset-0 rounded-full ring-4 ring-orange-200/50 animate-pulse"></div>
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>

      {/* Role */}
      <p className="text-lg font-semibold text-orange-600 mt-1">{role}</p>

      {/* Divider */}
      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full my-4"></div>

      {/* Education */}
      <p className="text-gray-600 text-center text-base">{education}</p>
    </motion.div>
  );
}
