"use client"

import * as React from "react"
import { cn } from "../../lib/utils"


const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full min-h-[120px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all placeholder:text-gray-400 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"
export { Textarea }
