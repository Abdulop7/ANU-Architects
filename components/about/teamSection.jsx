"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [

  {
    name: "Shoaib Saeed",
    role: "Senior Draftsman",
    image: "/about/team3.webp",
  },
  {
    name: "Abdul Saboor",
    role: "Web Developer",
    image: "/about/team4.webp",
  },
  {
    name: "Hamza Ilyas",
    role: "Project Architect",
    image: "/about/team5.webp",
  },
  {
    name: "Imran Ahmad",
    role: "Junior Draftsman",
    image: "/about/team6.webp",
  },
  {
    name: "Muhammad Affan",
    role: "Interior CAD Operator",
    image: "/about/team7.webp",
  },
  {
    name: "Rana Abdul Moiz",
    role: "Junior Architect",
    image: "/about/team10.webp",
  },
  {
    name: "Faisal Shareef",
    role: "Office Cordinator",
    image: "/about/team11.webp",
  },
  {
    name: "Muhammad Shakir",
    role: "Site Engineer",
    image: "/about/team12.webp",
  },
  {
    name: "Adeel",
    role: "Senior Site Engineer",
    image: "/about/team13.webp",
  },
  {
    name: "Abdullah Ahmad",
    role: "Junior Architect",
    image: "/about/team14.webp",
  },
  {
    name: "Ramla",
    role: "Interior Designer",
    image: "/about/team15.webp",
  },
  {
    name: "Saba",
    role: "Building Services Engineer",
    image: "/about/team16.webp",
  },
  {
    name: "M. Talha Siddiqui",
    role: "Construction Manager",
    image: "/about/team17.webp",
  },
  {
    name: "Abdullah Naveed",
    role: "MS. Structure Engineer",
    image: "/about/team19.webp",
  },
  {
    name: "Syed Zuhaib Zaidi",
    role: "Marketing Head",
    image: "/about/team20.webp",
  },
  {
    name: "Muhammad Burhan",
    role: "Junior CAD Operator",
    image: "/about/team21.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Premium Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6"
        >
          Our <span className="text-orange-500">Creative Minds</span>
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          A team of passionate architects, designers, and engineers committed to 
          shaping modern and timeless spaces with precision and creativity.  
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-wide font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
