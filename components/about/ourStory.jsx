"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block"
        >
          <span className="relative z-10">
            Our Journey
          </span>
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          From humble beginnings to shaping landmarks, here’s how we evolved into
          ANU Architects.
        </motion.p>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-orange-500"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <motion.div
              className="relative flex items-center justify-between"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-5/12 text-right pr-6">
                <h3 className="font-semibold text-xl text-gray-800">The Beginning</h3>
                <p className="text-gray-600 mt-2">
                  Starting with small residential projects, we laid our foundation 
                  on trust, design innovation, and attention to detail.
                </p>
              </div>
              <div className="w-2 h-2 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-5/12"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative flex items-center justify-between"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-5/12"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-5/12 text-left pl-6">
                <h3 className="font-semibold text-xl text-gray-800">Growth & Recognition</h3>
                <p className="text-gray-600 mt-2">
                  Expanding into commercial spaces, we earned recognition for 
                  delivering projects that blend aesthetics with functionality.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative flex items-center justify-between"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-5/12 text-right pr-6">
                <h3 className="font-semibold text-xl text-gray-800">Today</h3>
                <p className="text-gray-600 mt-2">
                  With a growing portfolio of iconic designs, ANU Architects 
                  continues to shape spaces that inspire, innovate, and endure.
                </p>
              </div>
              <div className="w-2 h-2 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-5/12"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
