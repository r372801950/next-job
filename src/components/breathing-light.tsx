"use client"

import { motion } from "framer-motion"

export function BreathingLight() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 紫色外围 - 呼吸效果 */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-white z-1 shadow-[0_0_60px_20px_rgba(192,38,211,1),0_0_120px_40px_rgba(168,85,247,1)]"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
