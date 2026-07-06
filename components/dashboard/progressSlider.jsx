"use client";

import * as Slider from "@radix-ui/react-slider";

export function SmoothProgressSlider({ progress, setProgress, previousProgress, submitWorkLog }) {
  return (
    <div className="w-full flex items-center">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={[progress]}
        min={previousProgress}
        max={100}
        step={1}
        onValueChange={([val]) => setProgress(val)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitWorkLog();
        }}
      >
        {/* Track */}
        <Slider.Track className="bg-[#111]/5 relative grow rounded-none h-3 overflow-hidden">
          <Slider.Range className="absolute bg-accent h-full rounded-none transition-all duration-150 ease-out" />
        </Slider.Track>

        {/* Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-[#111] border-4 border-accent rounded-none  hover:scale-110 transition-transform duration-150 ease-in-out focus:outline-none"
          aria-label="Progress"
        />
      </Slider.Root>
    </div>
  );
}

export function SmoothProgressSliderPayment({
  progress,
  setProgress,
  previousProgress,
}) {
  return (
    <div className="w-full flex items-center">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={[progress]}
        min={previousProgress}
        max={100}
        step={1}
        onValueChange={([val]) => setProgress(Math.max(val, previousProgress))}
      >
        {/* Track (background) */}
        <Slider.Track className="relative grow rounded-none h-3 bg-[#111]/5 overflow-hidden">
          {/* Range (filled portion) */}
          <Slider.Range
            className="absolute bg-accent h-full rounded-none transition-all duration-150 ease-out"
            style={{
              transition: "width 0.15s ease-out",
            }}
          />
        </Slider.Track>

        {/* Thumb (draggable circle) */}
        <Slider.Thumb
          className="block w-5 h-5 bg-[#111] border-4 border-accent rounded-none  hover:scale-110 transition-transform duration-150 ease-in-out focus:outline-none"
          aria-label="Progress"
        />
      </Slider.Root>
    </div>
  );
}