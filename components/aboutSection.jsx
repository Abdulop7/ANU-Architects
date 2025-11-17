"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import aboutImg from "../public/about-section.webp";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative py-20 px-6 md:px-16 lg:px-24 overflow-x-hidden bg-fixed bg-top bg-cover"
      style={{
        backgroundImage: "url('/paralaxImage.webp')", // Your parallax background
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={aboutImg}
              alt="ANU Architects - About Us"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="text-orange-500">A&U Architects</span>
          </h2>

          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            At <span className="font-semibold">A&U Architects</span>, we design
            with a vision to transform spaces into modern masterpieces. With
            over a decade of experience, we combine creativity, innovation, and
            functionality to deliver architecture that inspires.
          </p>

          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Our projects range from residential havens to commercial landmarks,
            each tailored to reflect the unique lifestyle and identity of our
            clients.
          </p>

          <Link href="/about">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
