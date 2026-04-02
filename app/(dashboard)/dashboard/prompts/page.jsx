"use client";

import { useEffect, useState } from "react";
import { Search, Copy, Check, BookOpen, AlertCircle, Tag } from "lucide-react";
import userPrompts from "@/userPrompts.json";
import { useRole } from "@/lib/roleContext";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Interior", "Exterior", "Plans", "Implementation","Camera","Social Media", "Other"];

export default function PromptsLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const { role, contextLoading } = useRole();
  const router = useRouter();

  const filteredPrompts = userPrompts.filter((prompt) => {
    const promptCategory = prompt.category || "Other";
    const matchesCategory =
      activeCategory === "All" || promptCategory.toLowerCase() === activeCategory.toLowerCase();
    
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = (prompt.title || "").toLowerCase().includes(searchLower);
    const objectiveMatch = (prompt.objective || "").toLowerCase().includes(searchLower);

    return matchesCategory && (titleMatch || objectiveMatch);
  });

  useEffect(() => {
     if (contextLoading) return;
     if (role && role !== "executive") {
       router.replace("/dashboard");
     }
  }, [contextLoading, role, router]);

  const getPromptPayload = (prompt) => {
    const { id, title, category, ...promptData } = prompt;
    return JSON.stringify(promptData, null, 2);
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

  if (contextLoading) return null;

  return (
    <div className="w-full space-y-16 lg:space-y-24 pb-20">
      
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <BookOpen className="h-10 w-10 text-accent" />
          Prompt <span className="text-accent">Library</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">System Workflows & Generation Indices</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Controls */}
      <section className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end border-b border-white/5 pb-8">
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-[0.65rem] tracking-[0.2em] uppercase font-bold transition-colors pb-1 border-b ${activeCategory === cat ? "text-accent border-accent" : "text-white/30 border-transparent hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-96 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search objectives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#050505] pl-12 pr-4 py-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
          />
        </div>
      </section>

      {/* Prompts Array */}
      <section className="w-full">
        {filteredPrompts.length > 0 ? (
          <div className="space-y-12">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-white/5 pb-12 group transition-colors"
              >
                {/* Meta Column */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[0.55rem] font-black text-accent tracking-[0.3em] uppercase">{prompt.category || "Uncategorized"}</span>
                    {prompt.model && (
                      <span className="text-[0.55rem] font-black text-white/40 tracking-[0.3em] uppercase flex items-center">
                        <Tag className="w-3 h-3 mr-2" />
                        {prompt.model}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-[1rem] tracking-widest uppercase leading-snug">
                    {prompt.title || "Untitled Workflow"}
                  </h3>
                  <p className="text-[0.65rem] text-secondary font-serif leading-relaxed mt-2 uppercase tracking-wide">
                    {prompt.objective}
                  </p>
                  
                  <button
                    onClick={() => handleCopy(prompt.id, prompt)}
                    className="mt-6 self-start bg-[#111] hover:bg-accent border border-white/5 text-white px-6 py-3 transition-colors cursor-pointer group/btn"
                  >
                    <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                      {copiedId === prompt.id ? (
                        <><Check className="w-3 h-3" /> Copied Array</>
                      ) : (
                        <><Copy className="w-3 h-3" /> Copy Payload</>
                      )}
                    </span>
                  </button>
                </div>

                {/* Payload Column */}
                <div className="lg:col-span-8 bg-[#111] border-l-2 border-l-white/10 group-hover:border-l-accent p-6 max-h-80 overflow-y-auto scrollbar-none transition-colors">
                  <pre className="text-[0.65rem] text-white/50 font-serif leading-relaxed whitespace-pre-wrap lowercase tracking-[0.1em]">
                    {getPromptPayload(prompt)}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center border-t border-white/5">
            <AlertCircle className="w-12 h-12 text-white/5 stroke-1 mb-6" />
            <p className="text-[0.65rem] tracking-[0.3em] font-black text-white/20 uppercase">No configurations matched parameters.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 text-[0.55rem] text-accent tracking-widest uppercase font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}