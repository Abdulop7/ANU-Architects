"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Accent Blobs */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Discover Our <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A curated collection of our signature work — blending innovation,
          precision, and timeless design. Each project is a testament to our
          commitment to excellence and creativity.
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img
              src="/projects/1.webp"
              alt="Project 1"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-lg">Luxury Residence</p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img
              src="/projects/2.webp"
              alt="Project 2"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-lg">Modern Office</p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img
              src="/projects/3.webp"
              alt="Project 3"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-lg">Commercial Plaza</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
        >
          View All Projects
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
