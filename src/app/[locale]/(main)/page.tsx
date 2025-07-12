"use client"

import { motion } from "framer-motion"
import { MountainLandscape } from "@/components/mountain-landscape"
import { StatsSection } from "@/components/stats-section"
import { CompanyLogos } from "@/components/company-logos" // Updated to render 3 rows
// import { Carousel } from "@/components/carousel" // No longer used for features/news in this simplified version
import { RoadmapSection } from "@/components/roadmap-section"
import { Crosshair, GitBranch, Link as LinkIcon, Briefcase } from "lucide-react"
import { SecondaryButton } from "@/components/secondary-button"
import { GlowingBoxButton } from "@/components/glowing-box-button"
import { BreathingLight } from "@/components/breathing-light"
import { GlowingSphere } from "@/components/GlowingSphere"
import Link from 'next/link'

const features = [
  { title: "On-Chain", description: "Blockchain verified credentials", icon: LinkIcon, href: "#" },
  { title: "Permissionless", description: "Open access for everyone", icon: GitBranch, href: "#" },
  { title: "Trustless", description: "No intermediaries needed", icon: Crosshair, href: "#" },
]

// Removed testimonials and newsItems for brevity, can be re-added if Carousel is used for them

export default function HomePage() {
  // Ensure this is a default export
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-4">
        <motion.h1
          className="text-5xl md:text-1xl font-bold mb-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Most Powerful Way To Build Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Web3 Career
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We Are One Of The Largest Web3 Recruitment Platforms In Asia Pacific. And We Provide Completely Free Talent
          Matching Services For The Web3 Industry. Apply For Company/Find A Job.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SecondaryButton>Apply for Company</SecondaryButton>
          <GlowingBoxButton animationSpeed="4s" className="px-9 text-sm h-9">
            Find a job →
          </GlowingBoxButton>
        </motion.div>
      </section>

      {/* Mountain Landscape */}
      <section className="relative z-10">
        <MountainLandscape />
      </section>

      {/* Stats Section */}
      <section className="relative z-10">
        <StatsSection />
      </section>

      {/* Company Logos Carousel - Now directly using CompanyLogos component */}
      <section className="relative z-10 border-t border-b border-gray-800">
        <CompanyLogos />
      </section>

      {/* Features Section (Free Web3 Recruitment) */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-[709px]">
              <motion.div // Placeholder for a small decorative orb if needed, or remove
                className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-6"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-5 h-5 rounded-full bg-purple-500" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Free Web3 Recruitment</h2>
              <p className="text-gray-300 mb-8 text-[20px] font-kumbh font-normal tracking-normal capitalize leading-[42px]">
                DeJob Has Served 600+ Web3 Enterprises And 10000+ Talents. It Focuses On The Blockchain Industry,
                Provides High Salary Positions, And Helps Enterprises Find Talents.
              </p>

              <div className="flex gap-3 mb-8">
                {features.map((feature, index) => (
                  <Link key={index} href={feature.href} className="flex-1 h-[118px] bg-gray-900/50 rounded-lg p-6 border border-purple-500/20 rounded-lg px-5 py-6 flex flex-col">
                    <feature.icon className="w-6 h-6 text-[#9c9c9d]" strokeWidth={1.5} />
                    <span className="mt-2 text-brand-primary text-2xl">{feature.title}</span>
                  </Link>
                ))}
              </div>

              <SecondaryButton>
                View a job →
              </SecondaryButton>
            </div>

            <div className="relative flex justify-center items-center h-64 md:h-auto">
              {/* GlowingOrb for the breathing button/image */}
              {/* <BreathingLight /> */}
              <GlowingSphere />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

    </div>
  )
}