import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { X, MapPin, Calendar, ExternalLink, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function slugify(title, id) { return (title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") + "-" + id); }


export const ProjectModal = ({ project, onClose }) => {
    const swiperRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    useEffect(() => {
        setImageLoaded({});
        setCurrentSlide(0);
    }, [project?.id]);

    if (!project) return null;

    const collageImages = project.images.filter((img) => img.collage);
    const allImages = project.images;
    const totalSlides = (collageImages.length > 0 ? 1 : 0) + allImages.length;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[3000] flex items-center justify-center"
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 40 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full md:w-[95vw] md:h-[90vh] md:max-w-[1800px] md:rounded-none overflow-hidden bg-[#0a0a0a] border border-white/10 flex flex-col lg:flex-row"
                    style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                >
                    {/* Close Button */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 rounded-none text-white flex items-center justify-center"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                            boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)"
                        }}
                    >
                        <X className="w-5 h-5" />
                    </motion.button>

                    {/* Gallery Section */}
                    <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-full bg-black">
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, EffectFade]}
                            navigation={{
                                prevEl: ".swiper-prev-custom",
                                nextEl: ".swiper-next-custom",
                            }}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            keyboard={{ enabled: true }}
                            loop
                            className="w-full h-full"
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                        >
                            {/* Collage Slide */}
                            {collageImages.length > 0 && (
                                <SwiperSlide>
                                    <div className={`grid gap-2 w-full h-full p-3 ${collageImages.length === 2 ? "grid-cols-2" :
                                        collageImages.length === 3 ? "grid-cols-3" :
                                            collageImages.length >= 4 ? "grid-cols-2 grid-rows-2" : "grid-cols-1"
                                        }`}>
                                        {collageImages.slice(0, 4).map((img, i) => (
                                            <div key={`collage-${i}`} className="relative w-full h-full rounded-none overflow-hidden bg-gray-200">
                                                {!imageLoaded[`collage-${i}`] && (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#f97316" }} />
                                                    </div>
                                                )}
                                                <Image
                                                    src={img.url}
                                                    alt={`${project.title} collage ${i + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className={`object-cover transition-opacity duration-500 ${imageLoaded[`collage-${i}`] ? "opacity-100" : "opacity-0"
                                                        }`}
                                                    onLoad={() => setImageLoaded((prev) => ({ ...prev, [`collage-${i}`]: true }))}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            )}

                            {/* Individual Image Slides */}
                            {allImages.map((img, i) => (
                                <SwiperSlide key={`main-${i}`}>
                                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                                        {!imageLoaded[`main-${i}`] && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Loader2 className="w-10 h-10 animate-spin" style={{ color: "#f97316" }} />
                                            </div>
                                        )}
                                        <Image
                                            src={img.url}
                                            alt={`${project.title} ${i + 1}`}
                                            fill
                                            sizes="100vw"
                                            className={`object-contain transition-opacity duration-500 ${imageLoaded[`main-${i}`] ? "opacity-100" : "opacity-0"
                                                }`}
                                            onLoad={() => setImageLoaded((prev) => ({ ...prev, [`main-${i}`]: true }))}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Arrows */}
                        <button
                            className="swiper-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-none bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                            style={{ boxShadow: "0 4px 20px -4px rgba(249, 115, 22, 0.1)" }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className="swiper-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-none bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                            style={{ boxShadow: "0 4px 20px -4px rgba(249, 115, 22, 0.1)" }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Slide Counter */}
                        <div className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-none border-l-4 border-accent bg-black/80 border-t border-r border-b border-white/20 backdrop-blur-md text-[0.65rem] tracking-[0.2em] font-bold text-primary">
                            {currentSlide + 1} / {totalSlides}
                        </div>
                    </div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full lg:w-1/3 h-[50vh] lg:h-full overflow-y-auto custom-scrollbar bg-[#050505] lg:border-l border-white/5"
                    >
                        <div className="p-8 lg:p-10 space-y-8 h-full flex flex-col">
                            {/* Header */}
                            <div className="space-y-4">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block px-4 py-2 rounded-none border-l-2 border-white/50 text-white text-[0.65rem] tracking-[0.2em] uppercase font-bold"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                                        boxShadow: "0 0 20px rgba(249, 115, 22, 0.2)"
                                    }}
                                >
                                    {project.category}
                                </motion.span>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                    className="text-3xl lg:text-4xl font-black tracking-tighter text-primary leading-tight"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    {project.title.toUpperCase()}
                                </motion.h2>
                            </div>

                            {/* Meta Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-none bg-[#111] border border-white/10">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    <span className="text-[0.65rem] tracking-[0.2em] font-bold uppercase text-primary">{project.location}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-none bg-[#111] border border-white/10">
                                    <Calendar className="w-4 h-4 text-accent" />
                                    <span className="text-[0.65rem] tracking-[0.2em] font-bold uppercase text-primary">{project.year}</span>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="space-y-3"
                            >
                                <h4 className="text-[0.65rem] font-bold text-accent uppercase tracking-[0.2em]">About the Project</h4>
                                <p className="text-secondary leading-relaxed text-[0.95rem] font-sans">
                                    {project.description}
                                </p>
                            </motion.div>

                            {/* Subcategory */}
                            {project.subcategory && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span
                                        className="inline-block px-4 py-2 rounded-none text-[0.65rem] tracking-[0.2em] font-bold uppercase border border-[#FF7A00]/20"
                                        style={{ backgroundColor: "rgba(255, 122, 0, 0.1)", color: "#FF7A00" }}
                                    >
                                        {project.subcategory}
                                    </span>
                                </motion.div>
                            )}

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55 }}
                                className="pt-6"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href={`/projects/${slugify(project.title, project.id)}`}
                                        className="w-full py-4 rounded-none text-white font-bold text-[0.85rem] uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                                        style={{
                                            backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                                            boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)"
                                        }}
                                    >
                                        View Full Project
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Keyboard Hints */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center justify-between text-[0.6rem] font-bold uppercase tracking-[0.2em] text-secondary border-t border-white/5 pt-8 mt-auto"
                            >
                                <span className="flex items-center gap-2">
                                    <span>Navigate</span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="flex items-center justify-center w-5 h-5 border border-white/20 rounded-sm text-[0.55rem] text-primary">←</kbd>
                                        <kbd className="flex items-center justify-center w-5 h-5 border border-white/20 rounded-sm text-[0.55rem] text-primary">→</kbd>
                                    </span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <span>Close</span>
                                    <kbd className="flex items-center justify-center px-2 h-5 border border-white/20 rounded-sm text-[0.55rem] text-primary">ESC</kbd>
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
