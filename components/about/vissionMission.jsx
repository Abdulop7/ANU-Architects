"use client";

import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        {/* Modern Styled Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision & Mission
          <span className="absolute left-1/2 -bottom-3 w-20 h-1 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At ANU Architects, our guiding principles shape the way we design, build, 
          and inspire communities.
        </motion.p>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Vision */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full">
              <Eye className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To redefine modern living by creating timeless architectural 
              masterpieces that blend functionality, sustainability, and aesthetics —
              shaping spaces that inspire communities for generations to come.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full">
              <Target className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional architectural and design solutions with 
              precision, creativity, and innovation. Our mission is to transform 
              ideas into reality while maintaining the highest standards of quality 
              and client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
