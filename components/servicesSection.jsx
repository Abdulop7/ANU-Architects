"use client";

import { Building2, Home, Landmark, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      desc: "Crafting elegant, functional, and sustainable homes tailored to your lifestyle.",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      desc: "Innovative and modern commercial architecture that reflects your brand identity.",
    },
    {
      icon: Landmark,
      title: "Urban Planning",
      desc: "Designing impactful urban environments with smart and efficient planning solutions.",
    },
    {
      icon: Palette,
      title: "Interior Design",
      desc: "Creating aesthetic, functional, and timeless interiors for residential and corporate spaces.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At <span className="text-orange-500 font-semibold">ANU Architects</span>, we transform vision into reality. 
          From concept to completion, we provide tailored architectural solutions with a blend of creativity and functionality.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="bg-gray-100 p-5 rounded-full group-hover:bg-orange-500 transition-all duration-300"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <Icon className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
