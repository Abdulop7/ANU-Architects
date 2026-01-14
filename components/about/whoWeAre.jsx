"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../../public/about/who-we-are.webp"

export default function WhoWeAre() {
  return (
    <section className="w-full  py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Modern Styled Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 relative">
            Who <span className="text-orange-500">We Are</span>
            <span className="block w-20 h-1 mt-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-gray-900">ANU Architects</span>, 
            we combine <span className="text-orange-500 font-medium">creativity</span>, 
            <span className="text-orange-500 font-medium"> precision</span>, and 
            <span className="text-orange-500 font-medium"> innovation</span> to design 
            timeless spaces. With a passion for architectural excellence, our goal is to 
            craft environments that inspire while serving functionality and purpose.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our multidisciplinary team collaborates closely with clients to bring their 
            vision to life. From modern residences to commercial landmarks, every project 
            reflects our <span className="font-semibold text-gray-900">commitment to quality, 
            sustainability, and modern design</span>.
          </p>
        </motion.div>

        {/* Right Image with Hover & Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src={aboutImage}
              alt="Who We Are - ANU Architects"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-500" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-52 h-52 bg-gray-200 rounded-full blur-3xl opacity-40"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}
