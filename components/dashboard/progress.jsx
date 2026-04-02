"use client";
import * as React from "react";
import { cn } from "../../lib/utils";


export function Progress({ value = 0, className, indicatorClassName }) {
  return (
    <div
      className={cn(
        "relative w-full h-2 rounded-none bg-[#111]/5 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-full transition-all duration-500 ease-in-out rounded-none",
          indicatorClassName ? indicatorClassName : "bg-accent/80"
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
