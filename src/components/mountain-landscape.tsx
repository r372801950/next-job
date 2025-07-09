"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BreathingLight } from "./breathing-light"
import { GlowingSphere } from "./GlowingSphere"


export function MountainLandscape() {
  return (
    <div className="relative w-full h-96">
      {/* base 在最底层 */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-full z-0">
        <Image src='/home/base.png' alt='hero-image' width={800} height={180} className="w-full h-[180px]"/>
      </div>
      {/* banner 在上层 */}
      <Image src='/home/banner.png' alt='hero-image' width={800} height={200} className="mx-auto relative z-10" />
      {/* Glowing orb 在最上层 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <BreathingLight />
        {/* <GlowingSphere /> */}
      </div>
    </div>
  )
}
