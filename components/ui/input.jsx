import * as React from "react"

const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          `w-full p-4 bg-[#111] border border-white/10 text-primary text-[0.85rem] placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-colors font-sans tracking-widest uppercase rounded-none ${className || ""}`
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
