"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { id: 1, src: "/logos/1.webp", alt: "Partner 1", name: "Architectural Excellence", category: "Design" },
  { id: 2, src: "/logos/2.webp", alt: "Partner 2", name: "Modern Construction", category: "Build" },
  { id: 3, src: "/logos/3.webp", alt: "Partner 3", name: "Interior Solutions", category: "Interior" },
  { id: 4, src: "/logos/4.webp", alt: "Partner 4", name: "Sustainable Design", category: "Green" },
  { id: 5, src: "/logos/5.webp", alt: "Partner 5", name: "Luxury Projects", category: "Premium" },
  { id: 6, src: "/logos/6.webp", alt: "Partner 6", name: "Urban Planning", category: "Planning" },
  { id: 7, src: "/logos/7.png", alt: "Partner 7", name: "Engineering Partners", category: "Engineering" },
  { id: 8, src: "/logos/8.webp", alt: "Partner 8", name: "Material Suppliers", category: "Materials" },
  { id: 9, src: "/logos/9.webp", alt: "Partner 9", name: "Technology Partners", category: "Tech" },
  { id: 10, src: "/logos/10.webp", alt: "Partner 10", name: "Consulting Services", category: "Consulting" },
  { id: 11, src: "/logos/11.webp", alt: "Partner 11", name: "Project Management", category: "Management" },
  { id: 12, src: "/logos/12.webp", alt: "Partner 12", name: "Quality Assurance", category: "Quality" },
  { id: 13, src: "/logos/13.webp", alt: "Partner 13", name: "Innovation Hub", category: "Innovation" },
  { id: 14, src: "/logos/14.webp", alt: "Partner 14", name: "Design Studio", category: "Studio" },
]

export default function PartnersCarousel() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Subtle architectural gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-full mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-wider text-gray-900 uppercase">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-light tracking-wide">
            Collaborating with visionary brands to shape modern architecture
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-24 w-max items-center"
            animate={{ x: ["0%", "-40%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={120}
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
