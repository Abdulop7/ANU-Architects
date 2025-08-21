"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa",
      description:
        "A contemporary villa with a blend of modern and classic design.",
      image: "/projects/1.webp",
    },
    {
      id: 2,
      title: "Corporate Office",
      description:
        "Minimalist workspace designed to inspire productivity and creativity.",
      image: "/projects/2.webp",
    },
    {
      id: 3,
      title: "Modern Residence",
      description:
        "A residential project focusing on sustainable and smart design.",
      image: "/projects/3.webp",
    },
  ];

  // ✅ Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800"
        >
          Featured <span className="text-orange-500">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          A showcase of our finest works that reflect our commitment to
          quality, innovation, and timeless architecture.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
            >
              <Link href={"/"}>
                {/* Project Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
