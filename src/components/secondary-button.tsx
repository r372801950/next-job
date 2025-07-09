"use client"

import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "sm" | "lg"
}

const baseStyles =
  "flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-150 ease-in-out"

const sizeStyles = {
  default: "px-9 text-sm h-9",
  sm: "px-3 text-sm h-8",
  lg: "px-5 text-lg h-12",
}

// Style: White background, black text
const buttonStyles = "bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-offset-white"

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <button className={cn(baseStyles, buttonStyles, sizeStyles[size], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)
SecondaryButton.displayName = "SecondaryButton"
