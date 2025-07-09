"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CarouselProps {
  items: React.ReactNode[]
  direction?: "left" | "right"
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function Carousel({
  items,
  direction = "left",
  autoPlay = true,
  interval = 3000,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        direction === "left" ? (prevIndex + 1) % items.length : (prevIndex - 1 + items.length) % items.length,
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length, direction])

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      zIndex: 0,
      x: direction === "left" ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
            } else if (swipe > swipeConfidenceThreshold) {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
            }
          }}
          className="absolute inset-0"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
