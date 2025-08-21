"use client"

import * as React from "react"
import { cn } from "../../lib/utils"


const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all placeholder:text-gray-400",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"
export { Input }
