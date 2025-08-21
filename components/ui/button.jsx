"use client"

import * as React from "react"
import { cn } from "../../lib/utils"


const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "default" &&
          "bg-black text-white hover:bg-gray-800 active:scale-95",
        variant === "outline" &&
          "border border-gray-400 bg-white text-black hover:bg-gray-100 active:scale-95",
        variant === "ghost" &&
          "text-gray-700 hover:bg-gray-100 active:scale-95",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"
export { Button }
