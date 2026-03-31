import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ project, index, onClick }) => {
    // Fallback: if no night image, use the day image for both
    const dayImage = project.preview;
    const nightImage = project.previewNight || project.preview;

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
                className="relative overflow-hidden rounded-none bg-[#111] border border-white/5 transition-all duration-500 hover:border-white/20 hover:bg-[#151515]"
                style={{
                    boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
                }}
            >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    {/* Day image / Base image */}
                    <img
                        src={dayImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    />

                    {/* Night image (fades in on top) */}
                    <img
                        src={nightImage}
                        alt={`${project.title} night view`}
                        className="absolute inset-0 w-full h-full object-cover
                       opacity-0 group-hover:opacity-100 transition-all duration-700"
                    />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <h3
                        className="text-xl md:text-2xl font-black tracking-tighter text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {project.title.toUpperCase()}
                    </h3>

                    <div className="flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-secondary">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{project.year}</span>
                        </div>
                    </div>

                    <p className="text-[0.95rem] font-sans text-secondary leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    <div className="pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-white/5 text-primary border border-white/10">
                                    {project.category}
                                </span>
                                {project.subcategory && (
                                    <span
                                        className="text-[0.6rem] font-bold uppercase tracking-[0.2em] px-2 py-1 border border-white/10"
                                        style={{ backgroundColor: "rgba(255, 122, 0, 0.1)", color: "#FF7A00" }}
                                    >
                                        {project.subcategory}
                                    </span>
                                )}
                            </div>
                            <motion.div
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
                            >
                                Explore
                                <ArrowUpRight className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-none border-2 border-transparent group-hover:border-white/5 transition-all duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
};