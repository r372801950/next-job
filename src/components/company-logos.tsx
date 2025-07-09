"use client"

import { motion } from "framer-motion"
import Image from "next/image" // Assuming you might use actual image logos

// Placeholder logos - replace with actual paths or components
const placeholderLogo = (name: string, bgColor = "bg-gray-700") => (
  <div className={`flex items-center justify-center h-10 w-32 ${bgColor} rounded text-white text-xs mx-4`}>{name}</div>
)

const logosRow1 = [
  { name: "TOKEN POCKET", icon: "/home/swagger/TOKEN_POCKET.png?width=165&height=28", width: 165, height: 28 },
  { name: "New Huo Tech", icon: "/home/swagger/NewHuoTech.png?width=124&height=28", width: 124, height: 28 },
  { name: "OASIS", icon: "/home/swagger/Oasis.png?width=70&height=28", width: 70, height: 28 },
  { name: "BurgerCities", icon: "/home/swagger/BurgerCities.png?width=120&height=28", width: 120, height: 28 },
  { name: "BKEX", icon: "/home/swagger/BKEX.png?width=83&height=28", width: 83, height: 28 },
  { name: "SANYUAN Lab", icon: "/home/swagger/SANYUANLab.png?width=97&height=28", width: 97, height: 28 },
  { name: "PHALAWORLD", icon: "/home/swagger/PHALAWORLD.png?width=167&height=28", width: 167, height: 28 },
  { name: "BitKeep", icon: "/home/swagger/BitKeep.png?width=81&height=28", width: 81, height: 28 },
  { name: "DeSyn", icon: "/home/swagger/DeSyn.png?width=61&height=28", width: 61, height: 28 },
  { name: "RELATION", icon: "/home/swagger/RELATION.png?width=135&height=28", width: 135, height: 28 },
]

const logosRow2 = [
  { name: "New Huo Tech", icon: "/home/swagger/NewHuoTech.png?width=124&height=28", width: 124, height: 28 },
  { name: "OASIS", icon: "/home/swagger/Oasis.png?width=70&height=28", width: 70, height: 28 },
  { name: "BurgerCities", icon: "/home/swagger/BurgerCities.png?width=120&height=28", width: 120, height: 28 },
  { name: "BKEX", icon: "/home/swagger/BKEX.png?width=83&height=28", width: 83, height: 28 },
  { name: "SANYUAN Lab", icon: "/home/swagger/SANYUANLab.png?width=97&height=28", width: 97, height: 28 },
  { name: "PHALAWORLD", icon: "/home/swagger/PHALAWORLD.png?width=167&height=28", width: 167, height: 28 },
  { name: "BitKeep", icon: "/home/swagger/BitKeep.png?width=81&height=28", width: 81, height: 28 },
  { name: "TOKEN POCKET", icon: "/home/swagger/TOKEN_POCKET.png?width=165&height=28", width: 165, height: 28 },
]

// For simplicity, Row 3 uses the same logos as Row 1 but will scroll in the same direction
const logosRow3 = [...logosRow1].reverse() // Example variation

interface CompanyLogosRowProps {
  logos: Array<{ name: string; icon: string; width: number; height: number }>
  direction?: "left" | "right"
  duration?: number
}

function CompanyLogosRow({ logos, direction = "left", duration = 40 }: CompanyLogosRowProps) {
  const duplicatedLogos = [...logos, ...logos, ...logos] // Triple for safety
  const logoWidth = 128 // 100px image + 28px padding (14px each side)
  const allLogosWidth = logos.reduce((acc, logo) => acc + logo.width, 0)

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        className="flex"
        initial={{ x: direction === "left" ? 0 : -allLogosWidth }}
        animate={{
          x: direction === "left" ? -allLogosWidth : 0,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex-shrink-0 px-4 py-2 flex items-center h-12 w-32">
            <Image
              src={logo.icon || "/placeholder.svg"}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="object-contain h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CompanyLogos() {
  return (
    <div className="py-8">
      <CompanyLogosRow logos={logosRow1} direction="left" duration={50} />
      <CompanyLogosRow logos={logosRow2} direction="right" duration={60} />
      <CompanyLogosRow logos={logosRow3} direction="left" duration={55} />
    </div>
  )
}



function CompanyLogosRow2({ logos, direction = "left", duration = 40 }: CompanyLogosRowProps) {
  const duplicatedLogos = [...logos, ...logos] // Duplicate for seamless looping

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-4 py-2 flex items-center h-12">
            <Image
              src={logo.icon || "/placeholder.svg"}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="object-contain h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CompanyLogos2() {
  return (
    <div className="py-8">
      <CompanyLogosRow logos={logosRow1} direction="left" duration={50} />
      <CompanyLogosRow logos={logosRow2} direction="right" duration={60} />
      <CompanyLogosRow logos={logosRow3} direction="left" duration={55} />
    </div>
  )
}
