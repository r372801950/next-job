"use client"

import { motion } from "framer-motion"

export function GlowingSphere() {
  return (
      <motion.div
        className="w-24 h-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600"
        style={{
          boxShadow: '0 0 20px rgba(192, 38, 211, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
          filter: 'blur(2px)',
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6],
          boxShadow: [
            '0 0 20px rgba(192, 38, 211, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
            '0 0 30px rgba(192, 38, 211, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
            '0 0 20px rgba(192, 38, 211, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
  )
}
