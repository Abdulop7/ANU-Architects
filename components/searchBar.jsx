import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2 } from "lucide-react";



export const SearchBar = ({
    searchTerm,
    setSearchTerm,
    onSearch,
    projects,
    onSelectProject,
    isLoading,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const filteredProjects = projects.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (highlightedIndex >= 0 && dropdownRef.current) {
            const item = dropdownRef.current.children[highlightedIndex];
            item?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }, [highlightedIndex]);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev < filteredProjects.length - 1 ? prev + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev > 0 ? prev - 1 : filteredProjects.length - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (highlightedIndex >= 0 && filteredProjects[highlightedIndex]) {
                onSelectProject(filteredProjects[highlightedIndex]);
                setIsActive(false);
            } else {
                onSearch();
            }
        } else if (e.key === "Escape") {
            setIsActive(false);
        }
    };

    return (
        <div className="relative max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
            >
                <div
                    className={`flex items-stretch rounded-none border transition-all duration-300 overflow-hidden ${isActive
                        ? "border-accent"
                        : "border-white/10 bg-[#111] hover:border-white/30"
                        }`}
                    style={{
                        boxShadow: isActive
                            ? "0 0 40px rgba(249, 115, 22, 0.2), 0 4px 20px -4px rgba(249, 115, 22, 0.1)"
                            : "none"
                    }}
                >
                    <div className="flex-1 relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search projects by name, location, or year..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setHighlightedIndex(-1);
                            }}
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setTimeout(() => setIsActive(false), 200)}
                            onKeyDown={handleKeyDown}
                            className="w-full pl-14 pr-4 py-4 bg-transparent text-primary placeholder:text-white/20 focus:outline-none text-sm font-sans tracking-wide"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onSearch}
                        disabled={isLoading}
                        className="px-8 text-white text-primary font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
                        style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)" }}
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <Search className="w-5 h-5" />
                                <span className="hidden sm:inline">Search</span>
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                    {isActive && searchTerm && filteredProjects.length > 0 && (
                        <motion.ul
                            ref={dropdownRef}
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-none max-h-80 overflow-y-auto custom-scrollbar"
                            style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                        >
                            {filteredProjects.slice(0, 6).map((project, index) => (
                                <motion.li
                                    key={project.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => {
                                        onSelectProject(project);
                                        setIsActive(false);
                                    }}
                                    className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-all ${index === highlightedIndex
                                        ? "text-accent"
                                        : "hover:bg-white/5"
                                        }`}
                                    style={{ backgroundColor: index === highlightedIndex ? "rgba(255, 122, 0, 0.05)" : undefined }}
                                >
                                    <div className="relative w-16 h-16 flex-shrink-0 rounded-none overflow-hidden bg-[#111] border border-white/5">
                                        <Image
                                            src={project.preview}
                                            alt={project.title}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-sans font-bold tracking-tight text-primary truncate">{project.title}</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-1">
                                            {project.location} • {project.year}
                                        </p>
                                    </div>
                                    <span
                                        className="text-[0.65rem] px-3 py-1 rounded-none font-bold uppercase tracking-[0.2em]"
                                        style={{ backgroundColor: "rgba(255, 122, 0, 0.1)", color: "#FF7A00" }}
                                    >
                                        {project.category}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
