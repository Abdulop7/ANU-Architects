"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-orange-500 py-16 px-6 sm:px-12 lg:px-20 text-center text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Amazing Together 🚀
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Ready to transform your vision into reality? Work with our expert team
          and take the first step towards success.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-orange-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get Started Now
        </motion.a>
      </motion.div>
    </section>
  );
}
