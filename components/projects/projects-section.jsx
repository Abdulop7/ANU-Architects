"use client"

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowUp, Sparkles } from "lucide-react";
import { SearchBar } from "./searchBar";
import { CategoryFilter } from "./categoryFilter";
import { ProjectCard } from "./projectCard";
import { ProjectModal } from "./projectModal";

export const ProjectsSection = ({projects}) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeSubcategory, setActiveSubcategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const projectsData = projects;

    // Sorted projects (newest first)
    const sortedProjects = useMemo(() => {
        return [...projectsData].sort((a, b) => {
            if (b.year !== a.year) return b.year - a.year;
            return b.id - a.id;
        });
    }, []);

    // Categories
    const categories = useMemo(() => {
        return ["All", ...new Set(projectsData.map((p) => p.category))];
    }, []);

    useEffect(() => {
        const projectsSection = document.getElementById("projects-section");
        if (!projectsSection) return;

        const headerOffset = 100;
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        setTimeout(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }, 1200);
    }, []);


    // Subcategories based on active category
    const subcategories = useMemo(() => {
        if (activeCategory === "All") return ["All"];

        const subs = [
            "All",
            ...new Set(
                projectsData
                    .filter((p) => p.category === activeCategory && p.subcategory)
                    .map((p) => p.subcategory)
            ),
        ];

        return subs;
    }, [activeCategory]);


    // Filtered projects
    const visibleProjects = useMemo(() => {
        let filtered = sortedProjects;

        if (activeCategory !== "All") {
            filtered = filtered.filter((p) => p.category === activeCategory);
        }

        if (activeSubcategory !== "All") {
            filtered = filtered.filter((p) => p.subcategory === activeSubcategory);
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(term) ||
                    p.location.toLowerCase().includes(term) ||
                    String(p.year).includes(term) ||
                    p.description.toLowerCase().includes(term)
            );
        }

        return filtered;
    }, [sortedProjects, activeCategory, activeSubcategory, searchTerm]);

    const handleCategoryChange = (cat) => {
        setLoading(true);
        setSearchTerm("");
        setActiveCategory(cat);
        setActiveSubcategory("All");
        setTimeout(() => setLoading(false), 300);

        const projectsSection = document.getElementById("projects-section");
        const headerOffset = -50; // adjust this if your header is taller
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    const handleSubcategoryChange = (sub) => {
        setLoading(true);
        setActiveSubcategory(sub);
        setTimeout(() => setLoading(false), 300);

        const projectsSection = document.getElementById("projects-section");
        const headerOffset = -50; // adjust this if your header is taller
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 300);

        const projectsSection = document.getElementById("projects-section");
        const headerOffset = -50; // adjust this if your header is taller
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    // Scroll to top visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToProjects = () => {
        const el = document.getElementById("projects-section");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="projects-section" className="relative min-h-screen py-20 overflow-hidden bg-stone-50">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "rgba(249, 115, 22, 0.05)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "rgba(249, 115, 22, 0.1)", animationDelay: "3s" }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                        style={{ backgroundColor: "rgba(249, 115, 22, 0.1)", color: "#f97316" }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Our Portfolio
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                        <span className="text-gray-900">Featured </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)" }}
                        >
                            Projects
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                        Explore our collection of architectural masterpieces, each telling a unique story of innovation and design excellence.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <div className="mb-12">
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        onSearch={handleSearch}
                        projects={sortedProjects}
                        onSelectProject={setSelectedProject}
                        isLoading={loading}
                    />
                </div>

                {/* Category Filter */}
                <div className="mb-16">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                        subcategories={subcategories}
                        activeSubcategory={activeSubcategory}
                        onSubcategoryChange={handleSubcategoryChange}
                    />
                </div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)" }}
                    />
                    <p className="text-sm font-medium text-gray-500">
                        <span className="text-gray-900 font-bold">{visibleProjects.length}</span>{" "}
                        project{visibleProjects.length !== 1 && "s"} found
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div id="projects-grid" className="min-h-[400px]">
                    {loading ? (
                        <div className="flex items-center justify-center h-60">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <Loader2 className="w-12 h-12 animate-spin" style={{ color: "#f97316" }} />
                                <p className="text-gray-500">Loading projects...</p>
                            </motion.div>
                        </div>
                    ) : visibleProjects.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center justify-center h-60 text-center"
                        >
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                                style={{ backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                            >
                                <Sparkles className="w-10 h-10" style={{ color: "#f97316" }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                                No Projects Found
                            </h3>
                            <p className="text-gray-500 max-w-sm">
                                Try adjusting your search or selecting a different category to discover more projects.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {visibleProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && !selectedProject && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToProjects}
                        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full text-white flex items-center justify-center"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                            boxShadow: "0 0 40px rgba(249, 115, 22, 0.4)"
                        }}
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </section>
    );
};
