"use client";
import * as React from "react";
import { cn } from "../../lib/utils";


export function Progress({ value = 0, className, indicatorClassName }) {
  return (
    <div
      className={cn(
        "relative w-full h-2 rounded-full bg-gray-200 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-full transition-all duration-500 ease-in-out rounded-full",
          indicatorClassName ? indicatorClassName : "bg-orange-600"
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
