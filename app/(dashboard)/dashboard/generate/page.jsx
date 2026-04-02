"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  UploadCloud,
  Image as ImageIcon,
  Download,
} from "lucide-react";
import prompts from "@/prompts.json";
import imageCompression from "browser-image-compression";

const STYLES = [
  {
    id: "realism_Interior",
    label: "Realism Interior Render",
    uiDescription:
      "Convert a 3D interior render into a convincing real-world interior photograph tuned for Pakistan daylight and luxury real estate aesthetics.",
    requiresMultiple: false,
  },
  {
    id: "residential_exterior",
    label: "Residential Daylight Exterior Render",
    uiDescription:
      "Convert a 3D Elevation render into a attractive Street Daylight Render tuned for Pakistan daylight and luxury real estate aesthetics.",
    requiresMultiple: false,
  },
  {
    id: "commercial_exterior",
    label: "Commercial Daylight Exterior Render",
    uiDescription:
      "Convert a 3D Elevation render into a attractive Street Daylight Render tuned for Pakistan daylight and luxury aesthetics.",
    requiresMultiple: false,
  },
  {
    id: "night_Interior",
    label: "Night Interior Render",
    uiDescription:
      "Convert a 3D interior render into a convincing real-world interior photograph tuned for Pakistan Night and luxury real estate aesthetics.",
    requiresMultiple: false,
  },
  {
    id: "night_exterior",
    label: "Night Exterior Render",
    uiDescription:
      "Convert a 3D Elevation render into a attractive Night Render tuned for Pakistan Night and luxury real estate aesthetics.",
    requiresMultiple: false,
  }
];

export default function GenerateImagePage() {
  const [styleId, setStyleId] = useState(STYLES[0].id);
  const selectedStyle = STYLES.find((s) => s.id === styleId);
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [error, setError] = useState("");

  function handleFileChange(e) {
    const list = Array.from(e.target.files || []);

    if (!selectedStyle?.requiresMultiple && list.length > 1) {
      setError("This style allows only one continuous trace input. Using primary index.");
      setFiles(list.slice(0, 1));
    } else {
      setError("");
      setFiles(list);
    }

    setResult(null); 
  }

  async function handleGenerate() {
    if (!files.length) {
      setError("Array missing valid payload trace.");
      return;
    }

    if (!selectedStyle?.requiresMultiple && files.length > 1) {
      setError("This style processes only one trace. Remove extra input files.");
      return;
    }

    const imageFile = files[0];
    if (!imageFile) {
      setError("No valid imagery source detected in buffer.");
      return;
    }

    setError("");
    setLoading(true);
    setProgress(1);

    let timerId;
    try {
      timerId = window.setInterval(() => {
        setProgress((prev) => (prev < 99 ? prev + 1 : prev));
      }, 300);

      const compressedFile = await compressImage(imageFile);

      const formData = new FormData();
      formData.append("image", compressedFile); 

      const promptConfig = prompts[styleId];
      let promptText = "";

      if (typeof promptConfig === "string") {
        promptText = promptConfig;
      } else if (promptConfig) {
        promptText = JSON.stringify(promptConfig);
      } else {
        promptText =
          "Redesign this building with a modern luxury facade, realistic lighting, high-end materials, and keep structure unchanged.";
      }

      formData.append("prompt", promptText);
      formData.append("style", styleId);

      const res = await fetch("/api/generation", {
        method: "POST",
        body: formData,
        cache: "no-store",
      });

      if (res.status === 429) {
        const errJson = await res.json().catch(() => null);
        throw new Error(errJson?.error || "Throttle engaged. Limit reached.");
      }

      if (res.status === 500) {
        const errJson = await res.json().catch(() => null);
        throw new Error(errJson?.error || "System Unavailable.");
      }

      if (!res.ok) {
        const errJson = await res.json().catch(() => null);
        throw new Error(errJson?.error || "Failed trace generation process");
      }

      const data = await res.json();
      setResult(data.image);
      setProgress(100);
    } catch (err) {
      setError(err?.message + ". Please try trace reconstruction again.");
      setResult(null);
      setProgress(0);
    } finally {
      clearInterval(timerId);
      setLoading(false);
    }
  }

  async function compressImage(file) {
    const TARGET_SIZE_KB = 1000; 
    const MAX_SIZE_MB = 1.1; 
    
    const options = {
      maxSizeMB: MAX_SIZE_MB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: "image/jpeg",
      quality: 0.95, 
    };

    try {
      let compressedFile = await imageCompression(file, options);
      let compressedSizeKB = compressedFile.size / 1024;
      
      if (compressedSizeKB < 800) {
        options.quality = 0.98;
        compressedFile = await imageCompression(file, options);
        compressedSizeKB = compressedFile.size / 1024;
      }

      if (compressedSizeKB < 900) {
        options.quality = 1;
        compressedFile = await imageCompression(file, options);
        compressedSizeKB = compressedFile.size / 1024;
      }

      return compressedFile;
      
    } catch (error) {
      console.error("Compression failed:", error);
      setError("Image compression failed. Appending raw unoptimized trace.");
      return file;
    }
  }

  const resultDataUrl = result
    ? `data:image/jpeg;base64,${result}`
    : null;

  return (
    <div className="w-full space-y-16 lg:space-y-24 pb-20">
      
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <Sparkles className="h-10 w-10 text-accent" />
          Neural <span className="text-accent">Renderer</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">AI Structural Synthesis</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
        <div className="lg:col-span-5 sticky top-8 border-b lg:border-b-0 lg:border-r border-white/5 pb-16 lg:pb-0 lg:pr-16 space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
              01 // Configuration
            </h2>

            <div className="flex flex-col gap-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => {
                    setStyleId(style.id);
                    setResult(null);
                    if (!style.requiresMultiple && files.length > 1) {
                      setFiles(files.slice(0, 1));
                      setError("Re-aligned pipeline to single trace payload.");
                    }
                  }}
                  className={`px-4 py-4 uppercase text-left text-[0.65rem] tracking-widest font-bold transition-all border-l-2
                    ${styleId === style.id
                      ? "bg-[#111] text-accent border-accent"
                      : "bg-[#050505] text-white/30 border-transparent hover:text-white"
                    }`}
                >
                  {style.label}
                </button>
              ))}
            </div>

            <p className="text-[0.65rem] tracking-[0.2em] font-serif leading-relaxed text-secondary uppercase bg-[#111] p-4 border border-white/5 border-l-accent">
              {selectedStyle?.uiDescription}{" "}
              {selectedStyle?.requiresMultiple
                ? "Multiple array upload is valid."
                : "Continuous single trace input required."}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
              02 // Source Payload
            </h2>

            <label
              htmlFor="image-upload"
              className="block border border-dashed border-white/20 p-8 bg-[#050505] cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
                <UploadCloud className="w-8 h-8 text-white/20" />
                <div className="space-y-1">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white">
                    Submit trace payload
                  </p>
                  <p className="text-[0.55rem] uppercase tracking-[0.2em] font-serif text-secondary">
                    PNG/JPG Limit 10MB
                  </p>
                </div>

                {files.length > 0 && (
                  <div className="w-full mt-4">
                    <p className="text-[0.55rem] font-black uppercase tracking-widest text-accent mb-4">
                      {files.length} Index Read
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {files.map((file, idx) => (
                        <div key={idx} className="relative w-16 h-16 border border-white/10 outline outline-1 outline-offset-2 outline-transparent hover:outline-accent transition-all bg-[#111] overflow-hidden">
                          <Image src={URL.createObjectURL(file)} alt={file.name} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple={!!selectedStyle?.requiresMultiple}
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <div className="space-y-4 pt-4">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full bg-accent hover:bg-white text-white hover:text-black font-bold tracking-[0.2em] uppercase text-[0.65rem] py-4 transition-colors flex justify-center items-center gap-3 ${loading ? "opacity-50" : ""}`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/60 border-t-transparent animate-spin" />
                    Synthesizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Initialize Engine
                  </>
                )}
              </button>

              {error && (
                <div className="text-[0.55rem] font-black tracking-widest uppercase text-left border-l-2 border-red-500 pl-4 py-2 text-red-500">
                  {error}
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
              03 // Output Matrix
            </h2>
            {resultDataUrl && (
              <a
                href={resultDataUrl}
                download="Enhanced-Image.jpeg"
                className="text-[0.55rem] tracking-[0.2em] text-white font-bold uppercase bg-white/5 hover:bg-accent px-4 py-2 transition-colors flex items-center gap-2"
              >
                <Download className="w-3 h-3" /> Execute Download
              </a>
            )}
          </div>

          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] bg-[#050505] border border-white/5 flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-[#random_grid_pattern_if_applicable] opacity-5 pointer-events-none" />
             
            {loading && (
              <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-10">
                <span className="h-12 w-12 border border-accent border-t-transparent rounded-full animate-spin" />
                <div className="flex flex-col items-center gap-2">
                   <p className="text-[0.65rem] tracking-[0.3em] font-black uppercase text-accent">Processing Grid</p>
                   <p className="text-[0.55rem] font-serif uppercase tracking-[0.2em] text-secondary">Completion: {progress}%</p>
                   <div className="w-32 h-[1px] bg-white/10 mt-2">
                       <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }}></div>
                   </div>
                </div>
              </div>
            )}

            {resultDataUrl ? (
              <div className="relative w-full h-full border border-white/5 border-l-accent border-b-accent">
                <img
                  src={resultDataUrl}
                  alt="Generated Structural Output"
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <div className="text-center flex flex-col items-center gap-4 text-white/20">
                <ImageIcon className="w-12 h-12 stroke-1" />
                <p className="text-[0.65rem] font-black tracking-[0.3em] uppercase">No Rendering Buffer Loaded</p>
                <p className="text-[0.55rem] font-serif tracking-[0.2em] uppercase text-secondary">Engine waiting for valid trace parameter configuration</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}