import React from "react"
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex w-full h-full min-h-[50vh] flex-col items-center justify-center space-y-4 bg-[#050505]">
      <div className="relative flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-accent" />
        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" />
      </div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-secondary">
        Initializing...
      </p>
    </div>
  )
}
