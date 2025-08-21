"use client"

import { motion } from "framer-motion"
import { CheckCircle, ClipboardList, Hammer, Building } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Consultation & Requirement Gathering",
      description:
        "We begin with an in-depth consultation to understand your vision, budget, and requirements. Our team ensures every detail is captured to create a strong foundation for your project.",
      icon: <ClipboardList className="w-7 h-7 text-white" />,
    },
    {
      id: 2,
      title: "Concept & Design Development",
      description:
        "Our architects craft tailored design concepts, blending creativity and practicality. We share detailed drawings, 3D renders, and refine the design based on your feedback.",
      icon: <Hammer className="w-7 h-7 text-white" />,
    },
    {
      id: 3,
      title: "Execution & Supervision",
      description:
        "Once approved, we move towards execution. With strict supervision, quality checks, and timely updates, we ensure flawless implementation of the design plan.",
      icon: <CheckCircle className="w-7 h-7 text-white" />,
    },
    {
      id: 4,
      title: "Project Handover",
      description:
        "We deliver your project ready-to-use, ensuring every detail meets our quality standards. A seamless transition from vision to reality.",
      icon: <Building className="w-7 h-7 text-white" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20"
        >
          Our <span className="text-orange-500">Process</span>
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-500 via-gray-200 to-orange-500 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 shadow-lg">
                  {step.icon}
                </div>

                {/* Card */}
                <div
                  className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all max-w-md ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
