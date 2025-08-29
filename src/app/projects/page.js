"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsHero from "../../../components/projects/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MapPin, Calendar, X, Loader2 } from "lucide-react";
import "../globals.css"
import projects from '../projects.json';


export default function ProjectsPage() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setVisibleProjects(projects)

  }, [])



  function projectsCategory(cat, search = searchTerm) {
    setLoading(true);

    setTimeout(() => {
      const fProjects =
        cat === "All" ? projects : projects.filter((p) => p.category === cat);

      const filtered = fProjects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );

      setVisibleProjects(filtered);
      setActiveCategory(cat);
      setLoading(false);
    }, 500);
  }
  return (
    <div className="w-full bg-white text-gray-900">
      <ProjectsHero />

      {/* Modern Category Filter */}
      <div id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="relative text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 drop-shadow-lg">
            Filter Projects
          </span>
          <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-orange-500 rounded-full shadow-md transform -translate-x-1/2 animate-pulse"></span>
        </h3>

        <div className="max-w-2xl mx-auto mt-10 mb-6 flex">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                projectsCategory(activeCategory, searchTerm);
              }
            }}
            className="flex-1 px-5 py-3 border border-gray-300 rounded-l-full shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700"
          />
          <button
            onClick={() => projectsCategory(activeCategory, searchTerm)}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-full shadow-md hover:bg-orange-600 transition"
          >
            Search
          </button>
        </div>



        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSearchTerm("");
                projectsCategory(cat, "");
              }}
              className={`relative px-6 py-2 font-semibold transition-all duration-300 rounded-full border-2 border-transparent shadow-md ${activeCategory === cat
                ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100 hover:text-orange-500"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 min-h-[300px]">
        {loading ? (
          // 🔄 Loading Spinner
          <div className="flex justify-center items-center h-40">
            <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          </div>
        ) : visibleProjects.length === 0 ? (
          // 🚫 No Projects Found
          <div className="flex flex-col items-center justify-center h-60 text-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-orange-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700">
              No Projects Found
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Try adjusting your search or selecting another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.preview}
                      fill
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-52">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        {project.location}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        {project.year}
                      </p>
                    </div>

                    <p className="mt-4 text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium self-start">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>


      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-none md:rounded-3xl shadow-2xl w-full h-full md:h-[95vh] md:w-[95vw] flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute md:top-5 bottom-5 right-5 bg-orange-500 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-orange-600 transition z-20 shadow-lg cursor-pointer"
              >
                <X size={22} />
              </button>

              {/* Left: Swiper Gallery */}
              <div className="w-full lg:w-3/4 relative bg-black">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                  className="w-full h-full"
                >
                  {selectedProject.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      {/* Keep images locked to 16:9 */}
                      <div className="relative w-full aspect-video lg:h-full">
                        <Image
                          src={img.url}
                          alt={selectedProject.title}
                          fill
                          className="object-cover rounded-none lg:rounded-l-3xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right: Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-1/4 bg-gradient-to-br from-orange-100 via-white to-orange-50 p-10 flex flex-col justify-between overflow-y-auto"
              >
                <div className="flex-1">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
                    {selectedProject.title}
                  </h2>

                  {/* Location */}
                  <p className="text-gray-700 text-sm mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {selectedProject.location}
                  </p>

                  {/* Year */}
                  <p className="text-gray-600 text-sm mb-6 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {selectedProject.year}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Category */}
                <span className="mt-8 inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md self-start">
                  {selectedProject.category}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



    </div>
  );
}
