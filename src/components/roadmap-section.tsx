"use client"

import { motion } from "framer-motion"

const roadmapItems = [
  {
    year: "2022 Q1",
    title: "Opening The Web3 Recruitment Platform - Dejob",
    description: "Short Description Text Short Description Text",
  },
  {
    year: "2023 Q1",
    title: "Opening The Web3 Recruitment Platform - Dejob",
    description: "Short Description Text Short Description Text",
  },
  {
    year: "2024 Q1",
    title: "Opening The Web3 Recruitment Platform - Dejob",
    description: "Short Description Text Short Description Text",
  },
  {
    year: "2025 Q1",
    title: "Opening The Web3 Recruitment Platform - Dejob",
    description: "Short Description Text Short Description Text",
  },
  {
    year: "2025 Q1",
    title: "Opening The Web3 Recruitment Platform - Dejob",
    description: "Short Description Text Short Description Text",
  },
]

export function RoadmapSection() {
  return (
    <div className="relative py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">RoadMap of Get jobs</h2>

        <div className="relative">
          {/* Curved path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            <path
              d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,200 Q750,250 700,300 Q650,350 600,400 Q500,450 400,400 Q300,350 200,400 Q100,450 150,500"
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Roadmap items */}
          <div className="relative z-10">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-16"
                style={{
                  marginLeft: `${(index % 2) * 50 + Math.sin(index) * 100}px`,
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Glowing node */}
                <motion.div
                  className="relative mr-6"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-purple-500 relative z-10" />
                  <div
                    className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500 animate-ping"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </motion.div>

                {/* Content */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="text-purple-400 font-semibold mb-2">{item.year}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
