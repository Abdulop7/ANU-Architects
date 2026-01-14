import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";


export const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Card Container */}
      <div 
        className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 transition-all duration-500 hover:border-orange-200"
        style={{ 
          boxShadow: "0 10px 40px -10px rgba(28, 25, 23, 0.1)",
        }}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.preview}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-900 border border-gray-200 shadow-sm">
              {project.category}
            </span>
          </div>
          
          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-white"
              style={{ 
                backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)"
              }}
            >
              {project.year}
            </span>
          </div>

          {/* View Project Button - Appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold"
              style={{ 
                backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                boxShadow: "0 25px 50px -12px rgba(28, 25, 23, 0.25)"
              }}
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 
            className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.title.toUpperCase()}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: "#f97316" }} />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" style={{ color: "#f97316" }} />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              {project.subcategory && (
                <span 
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(249, 115, 22, 0.1)", color: "#f97316" }}
                >
                  {project.subcategory}
                </span>
              )}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-1 text-sm font-semibold"
                style={{ color: "#f97316" }}
              >
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-300/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};
