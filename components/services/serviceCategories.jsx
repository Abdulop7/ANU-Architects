"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/serviecCard";
import { Home, Building2, Hammer, Paintbrush, Ruler, FileText } from "lucide-react";

const services = [
  {
    title: "Residential Design",
    icon: <Home className="w-8 h-8" />,
    description:
      "Creating comfortable, functional, and stylish living spaces tailored to your lifestyle.",
  },
  {
    title: "Commercial Design",
    icon: <Building2 className="w-8 h-8" />,
    description:
      "Designing modern, efficient, and aesthetic commercial spaces that inspire productivity.",
  },
  {
    title: "Construction Management",
    icon: <Hammer className="w-8 h-8" />,
    description:
      "Overseeing construction projects with precision and efficiency for timely completion.",
  },
  {
    title: "Interior Design",
    icon: <Paintbrush className="w-8 h-8" />,
    description:
      "Crafting interiors that combine aesthetics with functionality to bring your spaces alive.",
  },
  {
    title: "3D Visualization",
    icon: <Ruler className="w-8 h-8" />,
    description:
      "Transforming ideas into realistic 3D renders that help you visualize the final outcome.",
  },
  {
    title: "Consultancy",
    icon: <FileText className="w-8 h-8" />,
    description:
      "Providing expert advice and tailored solutions for all your architectural needs.",
  },
];

export default function ServicesCategories() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive design and
            management solutions to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center text-orange-500 w-16 h-16 rounded-2xl bg-gray-100 group-hover:text-white group-hover:bg-orange-500 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
