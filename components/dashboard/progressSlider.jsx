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
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-3 overflow-hidden">
          <Slider.Range className="absolute bg-orange-500 h-full rounded-full transition-all duration-150 ease-out" />
        </Slider.Track>

        {/* Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-4 border-orange-500 rounded-full shadow-md hover:scale-110 transition-transform duration-150 ease-in-out focus:outline-none"
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
        <Slider.Track className="relative grow rounded-full h-3 bg-gray-200 overflow-hidden">
          {/* Range (filled portion) */}
          <Slider.Range
            className="absolute bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-150 ease-out"
            style={{
              transition: "width 0.15s ease-out",
            }}
          />
        </Slider.Track>

        {/* Thumb (draggable circle) */}
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-4 border-orange-500 rounded-full shadow-md hover:scale-110 transition-transform duration-150 ease-in-out focus:outline-none"
          aria-label="Progress"
        />
      </Slider.Root>
    </div>
  );
}