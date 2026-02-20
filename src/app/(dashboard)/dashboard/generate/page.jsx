"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  UploadCloud,
  Image as ImageIcon,
  Download,
} from "lucide-react";
import prompts from "../../../prompts.json";
import { useRole } from "../../../../../lib/roleContext";
import { useRouter } from "next/navigation";

const STYLES = [
  {
    id: "realism_Interior",
    label: "Realism Interior Render",
    uiDescription:
      "Convert a 3D interior render into a convincing real-world interior photograph tuned for Pakistan daylight and luxury real estate aesthetics.",
    requiresMultiple: false,
  },
];

export default function GenerateImagePage() {
  const [styleId, setStyleId] = useState(STYLES[0].id);
  const selectedStyle = STYLES.find((s) => s.id === styleId);
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null); // base64
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100
  const [error, setError] = useState("");

  const { role } = useRole();
  const router = useRouter();


  function handleFileChange(e) {
    const list = Array.from(e.target.files || []);

    if (!selectedStyle?.requiresMultiple && list.length > 1) {
      setError("This style allows only one image. Using the first image.");
      setFiles(list.slice(0, 1));
    } else {
      setError("");
      setFiles(list);
    }

    setResult(null); // clear previous result
  }

  async function handleGenerate() {
    if (!files.length) {
      setError("Please upload at least one image.");
      return;
    }

    if (!selectedStyle?.requiresMultiple && files.length > 1) {
      setError("This style accepts only one image. Please remove extra images.");
      return;
    }

    const imageFile = files[0];
    if (!imageFile) {
      setError("No image found.");
      return;
    }

    setError("");
    setLoading(true);
    setProgress(1);

    // timer for 1 → 99 over ~30 seconds
    const maxBeforeComplete = 99;
    const steps = maxBeforeComplete - 1; // from 1 to 99 inclusive
    const durationMs = 30000;
    const stepInterval = durationMs / steps;

    let timerId;

    try {
      timerId = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= maxBeforeComplete) {
            // stay at 99 until the request finishes
            clearInterval(timerId);
            return prev;
          }
          return prev + 1;
        });
      }, stepInterval);

      const formData = new FormData();
      formData.append("image", imageFile);

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
        throw new Error(errJson?.error || "Too many requests. Please try again later.");
      }

      if (!res.ok) {
        const errJson = await res.json().catch(() => null);
        throw new Error(errJson?.error || "Failed to generate image");
      }

      const data = await res.json();
      setResult(data.image);
      setProgress(100); // jump to 100 when done
    } catch (err) {
      setError(
        err?.message || "Something went wrong while generating the image."
      );
      setResult(null);
      setProgress(0);
    } finally {
      if (timerId) {
        clearInterval(timerId);
      }
      setLoading(false);
    }
  }

  const resultDataUrl = result
    ? `data:image/jpeg;base64,${result}`
    : null;

  return (
    <div className="w-full bg-white h-screen overflow-y-auto">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* TOP: Style + Upload side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Choose style */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              1. Choose style
            </h2>

            <div className="flex flex-wrap gap-3">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => {
                    setStyleId(style.id);
                    setResult(null);
                    if (!style.requiresMultiple && files.length > 1) {
                      setFiles(files.slice(0, 1));
                      setError(
                        "This style allows only one image. Extra images were removed."
                      );
                    }
                  }}
                  className={`px-4 py-2 whitespace-nowrap rounded-full border text-sm font-semibold transition
                    ${
                      styleId === style.id
                        ? "bg-orange-500 text-white border-orange-500 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100 hover:text-orange-600"
                    }`}
                >
                  {style.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500">
              {selectedStyle?.uiDescription}{" "}
              {selectedStyle?.requiresMultiple
                ? "Multiple image upload is enabled for this style."
                : "This style accepts only one image."}
            </p>
          </section>

          {/* RIGHT: Upload + Generate */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              2. Upload image{selectedStyle?.requiresMultiple ? "s" : ""} & Generate
            </h2>

            <label
              htmlFor="image-upload"
              className="block border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white shadow-sm cursor-pointer hover:border-orange-400 hover:bg-orange-50/40 transition"
            >
              <div className="flex flex-col items-center justify-center gap-3 text-center w-full">
                <UploadCloud className="w-8 h-8 text-orange-500" />
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">
                    Select your image{selectedStyle?.requiresMultiple ? "s" : ""} here,
                    or click to browse
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG up to 10MB each.{" "}
                    {selectedStyle?.requiresMultiple
                      ? "You can select multiple files."
                      : "You must select only one file."}
                  </p>
                </div>

                {files.length > 0 && (
                  <>
                    <p className="text-xs font-medium text-orange-600">
                      {files.length} file{files.length > 1 && "s"} selected
                    </p>

                    <div className="mt-3 w-full max-h-32 overflow-y-auto">
                      <div className="grid grid-cols-3 gap-2">
                        {files.map((file, idx) => {
                          const url = URL.createObjectURL(file);
                          return (
                            <div
                              key={idx}
                              className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100"
                            >
                              <Image
                                src={url}
                                alt={file.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
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

            {/* Generate */}
            <div className="space-y-2">
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={loading}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-orange-500 text-white shadow-md hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {loading ? (
                    <>
                      <span className="mr-2 h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate image
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 max-w-xs">
                  Your uploads are processed securely and not stored after
                  generation.
                </p>
              </div>

              {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
              )}
            </div>
          </section>
        </div>

        {/* BOTTOM: Big Preview / Result */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              3. Preview result
            </h2>

            {resultDataUrl && (
              <a
                href={resultDataUrl}
                download="Enhanced-Image.jpeg"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-sm hover:bg-gray-800 transition"
              >
                <Download className="w-4 h-4" />
                Download image
              </a>
            )}
          </div>

          <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-2xl bg-gradient-to-br from-gray-50 via-white to-orange-50 border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center">
            {loading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <span className="h-8 w-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-medium text-gray-700">
                  Generating your image... {progress}%
                </p>
              </div>
            )}

            {resultDataUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={resultDataUrl}
                  alt="Generated image"
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <div className="text-center px-6 text-gray-500 text-sm flex flex-col items-center gap-3">
                <ImageIcon className="w-10 h-10 text-orange-300" />
                <p className="font-medium text-gray-700">
                  No image generated yet.
                </p>
                <p className="text-xs max-w-sm">
                  Upload an image on the right and click{" "}
                  <span className="font-semibold text-gray-800">
                    Generate image
                  </span>{" "}
                  to see the result here in large format.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}