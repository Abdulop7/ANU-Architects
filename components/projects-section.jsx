"use client"

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowUp, Sparkles } from "lucide-react";
import { SearchBar } from "./searchBar";
import { CategoryFilter } from "./categoryFilter";
import { ProjectCard } from "./projectCard";
import { ProjectModal } from "./projectModal";

export const ProjectsSection = ({ projects }) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeSubcategory, setActiveSubcategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // term actually used to filter the grid
    const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const projectsData = projects;

    // Sorted projects (newest first)
    const sortedProjects = useMemo(() => {
        return [...projectsData].sort((a, b) => {
            // 1️⃣ Pinned projects first
            const aPinned = a.pinned ? 1 : 0;
            const bPinned = b.pinned ? 1 : 0;

            console.log(aPinned);


            if (aPinned !== bPinned) {
                // bPinned - aPinned -> true (1) before false (0)
                return bPinned - aPinned;
            }

            // 2️⃣ (Optional) if you use numeric priority as well:
            // const aPriority = a.priority ?? Infinity;
            // const bPriority = b.priority ?? Infinity;
            // if (aPriority !== bPriority) return aPriority - bPriority;

            // 3️⃣ Reversed logic: oldest year first, then id
            if (a.year !== b.year) return a.year - b.year;
            return a.id - b.id;
        });
    }, [projectsData]);

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


        if (appliedSearchTerm) {
            const term = appliedSearchTerm.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(term) ||
                    p.location.toLowerCase().includes(term) ||
                    String(p.year).includes(term) ||
                    p.description.toLowerCase().includes(term)
            );
        }

        return filtered;
    }, [sortedProjects, activeCategory, activeSubcategory, appliedSearchTerm]);

    const handleCategoryChange = (cat) => {
        setLoading(true);
        setSearchTerm("");        // clear input
        setAppliedSearchTerm(""); // clear applied filter (optional but usually desired)
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

        // apply the current input to the actual filter
        setAppliedSearchTerm(searchTerm.trim());
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
        <section id="projects-section" className="relative min-h-screen py-20 overflow-hidden bg-[#050505]">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search Bar */}
                <div className="mb-12">
                    <SearchBar
                        searchTerm={searchTerm}          // input text
                        setSearchTerm={setSearchTerm}    // update input only
                        onSearch={handleSearch}          // applies the filter
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
                        className="w-2 h-2 rounded-none animate-pulse"
                        style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)" }}
                    />
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
                        <span className="text-primary">{visibleProjects.length}</span>{" "}
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
                                <Loader2 className="w-12 h-12 animate-spin" style={{ color: "#FF7A00" }} />
                                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">Loading projects...</p>
                            </motion.div>
                        </div>
                    ) : visibleProjects.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-none h-60 text-center bg-[#0a0a0a]"
                        >
                            <div
                                className="w-16 h-16 rounded-none flex items-center justify-center mb-4"
                                style={{ backgroundColor: "rgba(255, 122, 0, 0.1)" }}
                            >
                                <Sparkles className="w-8 h-8" style={{ color: "#FF7A00" }} />
                            </div>
                            <h3 className="text-xl font-black tracking-tighter text-primary mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                                No Projects Found
                            </h3>
                            <p className="text-[0.95rem] text-secondary max-w-sm">
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
                        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-none text-white flex items-center justify-center"
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
