"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function DetailedServices() {
  const services = [
    {
      title: "Architectural Design",
      description:
        "Our team specializes in creating modern, functional, and aesthetic architectural designs tailored to your lifestyle and vision. Every project is designed with a balance of innovation and practicality, ensuring timeless appeal.",
      image: "/services/architectural-design.jpg",
    },
    {
      title: "Interior Solutions",
      description:
        "We craft interior spaces that reflect your personality, enhance comfort, and optimize functionality. From concept to execution, our interiors are curated with a modern design language while respecting cultural and spatial needs.",
      image: "/services/interior-solutions.jpeg",
    },
    {
      title: "Construction Management",
      description:
        "From start to finish, we manage every stage of your construction process with precision. Our project management ensures on-time delivery, high-quality execution, and seamless coordination between teams and clients.",
      image: "/services/construction-management.jpg",
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Detailed <span className="text-orange-500">Service Insights</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A deeper look into some of our key services that define our
            innovative and client-focused approach.
          </p>
        </div>

        {/* Split Sections */}
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image Section */}
            <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient for modern feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/20"></div>
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {service.description}
              </p>
              {/* Accent underline */}
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
