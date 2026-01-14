"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Building2, CheckCircle, Users } from "lucide-react";

function Counter({ target }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, target, count]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export default function AchievementsSection() {
  const stats = [
    {
      icon: <Building2 className="w-10 h-10 text-orange-500" />,
      value: 20,
      label: "Ongoing Projects",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-orange-500" />,
      value: 1500,
      label: "Completed Projects",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      value: 40,
      label: "Trusted Companies",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 text-center pb-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
        >
          Shaping the <span className="text-orange-500">Future Together</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Our success is measured not just in numbers, but in the trust we build,
          the partnerships we foster, and the iconic projects that redefine
          modern architecture. Every milestone is a step toward a future shaped
          by vision and innovation.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl p-10 flex flex-col items-center justify-center transition duration-300"
            >
              <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-extrabold text-gray-900">
                <Counter target={stat.value} />+
              </h3>
              <p className="text-gray-700 font-medium mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
