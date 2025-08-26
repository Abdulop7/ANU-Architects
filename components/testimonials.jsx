"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ali Raza",
    role: "CEO – Raza Builders, Lahore",
    text: "A&U Architects transformed our vision into reality. Their designs not only look stunning but are also highly practical for day-to-day use. Truly a partner you can trust.",
    image: "/men.jpg",
  },
  {
    name: "Sarah Ahmed",
    role: "Homeowner – Islamabad",
    text: "From the very first meeting, the team made me feel heard. They designed my house with such elegance and detail that every corner feels unique. I couldn’t be happier.",
    image: "/girl.jpg",
  },
  {
    name: "Imran Khan",
    role: "Real Estate Investor – Karachi",
    text: "I have worked with several firms, but A&U Architects stand out. Their ability to deliver projects on time while maintaining top-notch quality is unmatched in the market.",
    image: "/men-2.jpg",
  },
];


export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  // Motion variants for slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with motion */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Slides */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={1} mode="wait">
            <motion.div
              key={current}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-gray-50 rounded-2xl shadow-md p-8 md:p-12 max-w-3xl mx-auto relative"
            >
              <Quote className="absolute top-6 left-6 text-orange-500 w-8 h-8 opacity-40" />

              <motion.p
                className="text-lg md:text-xl text-gray-700 italic mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                "{testimonials[current].text}"
              </motion.p>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full border-2 border-orange-500 mb-3 shadow-md"
                />
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition cursor-pointer"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition cursor-pointer"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
                animate={{
                  backgroundColor: current === index ? "#f97316" : "#d1d5db",
                  scale: current === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-3 h-3 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
