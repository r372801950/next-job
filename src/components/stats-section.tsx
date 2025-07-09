"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const targetValue = Number.parseInt(value.replace(/,/g, ""))

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetValue / 50
      const counter = setInterval(() => {
        setCount((prev) => {
          if (prev >= targetValue) {
            clearInterval(counter)
            return targetValue
          }
          return Math.min(prev + increment, targetValue)
        })
      }, 30)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [targetValue, delay])

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{Math.floor(count).toLocaleString()}</div>
      <div className="text-purple-300 text-lg">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-16">
      <StatItem value="5,514" label="Jobs" delay={200} />
      <StatItem value="5,514" label="Talents" delay={400} />
      <StatItem value="5,514" label="Companies" delay={600} />
    </div>
  )
}
