"use client"

import {useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";

function slugify(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


export default function BlogGrid({ blogs}) {

        const categories = ["All", ...new Set(blogs.map((b) => b.category))];
        const [activeCategory, setActiveCategory] = useState("All");
        const [searchTerm, setSearchTerm] = useState("");
        const [selectedBlog, setSelectedBlog] = useState(null);
        const [visibleBlogs, setVisibleBlogs] = useState([]);
        const [loading, setLoading] = useState(false);
        const [isInputActive, setIsInputActive] = useState(false);
        const [highlightedIndex, setHighlightedIndex] = useState(-1);
        const dropdownRef = useRef(null);
    
        const sorted = blogs;
    
        useEffect(() => {
            setVisibleBlogs(sorted);
        }, []);
    
        useEffect(() => {
            if (!dropdownRef.current) return;
            const item = dropdownRef.current.children[highlightedIndex];
            if (item) item.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }, [highlightedIndex]);
    
        function applyFilters(cat = activeCategory, search = searchTerm) {
            setLoading(true);
            setTimeout(() => {
                let list = cat === "All" ? sorted : sorted.filter((b) => b.category === cat);
    
                if (search.trim()) {
                    const q = search.toLowerCase();
                    list = list.filter(
                        (b) =>
                            (b.title || "").toLowerCase().includes(q) ||
                            (b.excerpt || "").toLowerCase().includes(q) ||
                            (b.content || "").toLowerCase().includes(q)
                    );
                }
    
                setVisibleBlogs(list);
                setLoading(false);
    
                const grid = document.getElementById("blogs-grid");
                if (grid) {
                    const offset = 140;
                    const pos = grid.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: pos, behavior: "smooth" });
                }
            }, 260);
        }
    
        const handleSearchKeyDown = (e) => {
            const filtered = sorted.filter((b) =>
                b.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
    
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setHighlightedIndex((p) => (p < filtered.length - 1 ? p + 1 : 0));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHighlightedIndex((p) => (p > 0 ? p - 1 : filtered.length - 1));
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (highlightedIndex >= 0 && filtered[highlightedIndex]) {
                    setSelectedBlog(filtered[highlightedIndex]);
                    setIsInputActive(false);
                } else {
                    applyFilters(activeCategory, searchTerm);
                }
            }
        };
    
    return (
        <>
        {/* ---------------------- SEARCH + CATEGORY + COUNT AREA ---------------------- */}
            <div id="blogs" className="w-full border-b border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-6 space-y-10">

                    {/* Title */}
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                            Discover <span className="text-orange-500">Ideas</span>
                        </h2>
                        <p className="mt-2 text-gray-600 text-lg">
                            Read insights, trends, design philosophy and architecture stories.
                        </p>
                    </div>

                    {/* Search */}
                    <div id="search" className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search articles, keywords or topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsInputActive(true)}
                            onBlur={() => setTimeout(() => setIsInputActive(false), 150)}
                            onKeyDown={handleSearchKeyDown}
                            className="w-full px-6 py-4 rounded-xl bg-white shadow-sm border border-gray-200 
                focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-gray-700 text-lg"
                        />

                        <button
                            onClick={() => applyFilters(activeCategory, searchTerm)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 
                text-white p-3 rounded-lg shadow-md transition"
                        >
                            <Search size={20} />
                        </button>

                        {/* Dropdown */}
                        {isInputActive && searchTerm && (
                            <ul
                                ref={dropdownRef}
                                className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl shadow-xl 
                    max-h-80 overflow-y-auto mt-2"
                            >
                                {sorted
                                    .filter((b) =>
                                        b.title.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((blog, i) => (
                                        <li
                                            key={blog.id}
                                            onClick={() => {
                                                setSelectedBlog(blog);
                                                setIsInputActive(false);
                                            }}
                                            className={`flex items-center gap-3 px-4 py-3 cursor-pointer 
                                transition rounded-lg ${i === highlightedIndex
                                                    ? "bg-orange-100 text-orange-600"
                                                    : "hover:bg-gray-100"
                                                }`}
                                        >
                                            <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <Image src={blog.cover} alt={blog.title} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{blog.title}</p>
                                                <p className="text-xs text-gray-500">
                                                    {blog.category} • {new Date(blog.date).getFullYear()}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                    {/* Category + Count Row */}
                    <div className="flex items-center justify-between flex-wrap gap-4">

                        {/* Categories */}
                        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setSearchTerm("");
                                        applyFilters(cat, "");
                                    }}
                                    className={`px-6 py-2 whitespace-nowrap rounded-full border text-sm font-semibold transition
                        ${activeCategory === cat
                                            ? "bg-orange-500 text-white border-orange-500 shadow-md"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100 hover:text-orange-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Count — now aligned perfectly with categories */}
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                            <h4 className="text-sm font-semibold text-gray-600 tracking-wide">
                                {visibleBlogs.length}
                                <span className="text-gray-400 font-normal">
                                    {" "}
                                    Article{visibleBlogs.length !== 1 && "s"}
                                </span>
                            </h4>
                        </div>
                    </div>

                </div>
            </div>


            {/* ---------------------- BLOG LIST ---------------------- */}
            <div id="blogs-grid" className="w-full max-w-6xl mx-auto px-6 py-20 space-y-20">

                {visibleBlogs.map((b) => {
                    const slug = slugify(b.title);

                    return (
                        <Link
                            key={b.id}
                            href={`/blogs/${slug}`}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-[320px] rounded-xl overflow-hidden">
                                <Image
                                    src={b.cover}
                                    fill
                                    alt={b.title}
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-3xl font-bold text-gray-900 hover:text-orange-500 transition">
                                    {b.title}
                                </h3>

                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    {new Date(b.date).toLocaleDateString()}
                                    <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                                        {b.category}
                                    </div>
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {b.excerpt}
                                </p>
                            </div>

                            <div className="col-span-full h-[1px] bg-gray-300/50"></div>
                        </Link>
                    );
                })}

            </div>
        </>
    )
}
