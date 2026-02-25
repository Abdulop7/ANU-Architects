"use client";

import { useEffect, useState } from "react";
import { Search, Copy, Check, BookOpen, AlertCircle, Tag } from "lucide-react";
import userPrompts from "../../../userPrompts.json";
import { useRole } from "../../../../../lib/roleContext";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Interior", "Exterior", "Plans", "Implementation","Camera", "Other"];

export default function PromptsLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const { role,contextLoading } = useRole();
  const router = useRouter();

  // Filter based on the new JSON structure
  const filteredPrompts = userPrompts.filter((prompt) => {
    // Fallback to "Other" if category is empty
    const promptCategory = prompt.category || "Other";
    const matchesCategory =
      activeCategory === "All" || promptCategory.toLowerCase() === activeCategory.toLowerCase();
    
    // Search inside title, category, and objective
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = (prompt.title || "").toLowerCase().includes(searchLower);
    const objectiveMatch = (prompt.objective || "").toLowerCase().includes(searchLower);

    return matchesCategory && (titleMatch || objectiveMatch);
  });

  useEffect(() => {
      if (role && role !== "executive") {
        router.replace("/dashboard");
      }
    }, [contextLoading]);

  // Helper function to extract just the prompt payload (removing metadata)
  const getPromptPayload = (prompt) => {
    const { id, title, category, ...promptData } = prompt;
    return JSON.stringify(promptData, null, 2); // Pretty-print JSON with 2 spaces
  };

  const handleCopy = async (id, promptObject) => {
    try {
      const textToCopy = getPromptPayload(promptObject);
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen overflow-y-auto">
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        
        {/* HEADER */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Prompt Library
            </h1>
          </div>
          <p className="text-sm text-gray-500 max-w-2xl">
            Browse, search, and copy advanced JSON workflows for architectural generation.
          </p>
        </div>

        {/* CONTROLS */}
        <section className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-gray-50/50 p-4 border border-gray-100 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 whitespace-nowrap rounded-full border text-sm font-semibold transition
                  ${
                    activeCategory === cat
                      ? "bg-orange-500 text-white border-orange-500 shadow-md"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search objective or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition shadow-sm"
            />
          </div>
        </section>

        {/* PROMPT GRID */}
        <section>
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-orange-300 hover:shadow-md transition duration-200 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-2 py-1 rounded-md">
                          {prompt.category || "Uncategorized"}
                        </span>
                        {prompt.model && (
                          <span className="flex items-center text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-md">
                            <Tag className="w-3 h-3 mr-1" />
                            {prompt.model}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">
                        {prompt.title || "Untitled Workflow"}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {prompt.objective}
                      </p>
                    </div>
                    
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(prompt.id, prompt)}
                      className="p-2.5 bg-white border border-gray-200 text-gray-500 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50 rounded-xl shadow-sm transition flex-shrink-0 ml-4"
                      title="Copy JSON Payload"
                    >
                      {copiedId === prompt.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Card Body (JSON Preview) */}
                  <div className="bg-gray-900 p-4 overflow-y-auto max-h-64 relative group/code">
                    <pre className="text-xs text-green-400 font-mono leading-relaxed whitespace-pre-wrap">
                      {getPromptPayload(prompt)}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-3 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <AlertCircle className="w-10 h-10 text-gray-400" />
              <p className="text-gray-600 font-medium">No prompts found.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-2 text-sm text-orange-600 font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}