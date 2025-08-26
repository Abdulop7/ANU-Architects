"use client";

import { FaDraftingCompass, FaRegBuilding, FaHandshake } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaDraftingCompass className="text-orange-500 text-4xl mb-4" />,
      title: "Innovative Designs",
      desc: "We blend creativity with functionality to deliver designs that inspire and elevate living.",
    },
    {
      icon: <FaRegBuilding className="text-orange-500 text-4xl mb-4" />,
      title: "Quality Construction",
      desc: "Commitment to premium materials and sustainable methods ensures lasting results.",
    },
    {
      icon: <MdDesignServices className="text-orange-500 text-4xl mb-4" />,
      title: "Tailored Solutions",
      desc: "Every project is customized to reflect your unique vision, lifestyle, and preferences.",
    },
    {
      icon: <FaHandshake className="text-orange-500 text-4xl mb-4" />,
      title: "Trusted Expertise",
      desc: "Years of experience and satisfied clients make us a name you can rely on.",
    },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-orange-500">A&U Architects</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We don’t just design buildings — we craft experiences. Here’s why our clients trust us with their vision.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center 
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {reason.icon}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
