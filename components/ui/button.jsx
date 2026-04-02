import * as React from "react"
import { Loader2 } from "lucide-react"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    
    // Brutalist styling base
    const baseStyle = "group relative inline-flex items-center justify-center transition-all duration-500 overflow-hidden font-sans font-bold uppercase tracking-[0.2em]"
    
    const variants = {
      default: "border border-white/20 bg-transparent text-primary hover:border-accent",
      outline: "border border-white/10 bg-transparent text-secondary hover:text-white hover:border-white/30",
      ghost: "px-4 py-2 border-transparent bg-transparent text-secondary hover:text-white"
    }

    const sizes = {
      default: "px-8 py-4 text-[0.75rem]",
      sm: "px-4 py-2 text-[0.65rem]",
      lg: "px-10 py-5 text-[0.85rem]",
      icon: "w-10 h-10 flex items-center justify-center p-0"
    }

    const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${
      isLoading ? "opacity-70 pointer-events-none" : ""
    } ${className || ""}`

    return (
      <button ref={ref} className={combinedClasses} disabled={isLoading} {...props}>
        {/* Animated Fill Background (only for default variant) */}
        {variant === "default" && (
            <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        )}
        
        <span className={`relative z-10 flex items-center justify-center gap-2 ${variant === 'default' ? 'group-hover:text-[#050505] transition-colors duration-300' : ''}`}>
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
