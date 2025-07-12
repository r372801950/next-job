"use client"

import { useState } from "react"
import { Search, MapPin, Clock, DollarSign, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Virtuoso } from "react-virtuoso"
import { JobCard, tagColors } from "@/components/job-card"
import { cn } from "@/lib/utils"

interface JobPosition {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  postedTime: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  benefits: string[]
  tags: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    company: "Phantom Wallet",
    location: "Remote",
    salary: "$120,000-180,000",
    type: "Full-time",
    postedTime: "2 hours ago",
    description:
      "Join our team to build the future of Web3 and decentralized applications. We're looking for experienced engineers passionate about blockchain technology.",
    responsibilities: [
      "Build and maintain scalable web applications using React and Node.js",
      "Develop smart contracts and integrate with blockchain networks",
      "Collaborate with design and product teams to create exceptional user experiences",
      "Optimize application performance and ensure security best practices",
    ],
    qualifications: [
      "5+ years of full-stack development experience",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with blockchain technologies (Ethereum, Solana)",
      "Knowledge of smart contract development",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first work environment",
      "Health, dental, and vision insurance",
      "Professional development budget",
    ],
    tags: ["Remote", "Full-time", "On-site", "English leve", "Undergraduate"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "MetaMask",
    location: "San Francisco, CA",
    salary: "$100,000-150,000",
    type: "Full-time",
    postedTime: "5 hours ago",
    description:
      "Help us build the most trusted crypto wallet and gateway to blockchain apps. We're seeking a talented frontend developer to join our growing team.",
    responsibilities: [
      "Develop responsive web applications using modern JavaScript frameworks",
      "Implement pixel-perfect designs with attention to detail",
      "Integrate with Web3 APIs and blockchain networks",
      "Write clean, maintainable, and well-tested code",
    ],
    qualifications: [
      "3+ years of frontend development experience",
      "Expertise in React, HTML5, CSS3, and JavaScript",
      "Experience with Web3.js or Ethers.js",
      "Understanding of cryptocurrency and blockchain concepts",
    ],
    benefits: [
      "Stock options and crypto bonuses",
      "Flexible working hours",
      "Top-tier health benefits",
      "Learning and development opportunities",
    ],
    tags: ["React", "Web3", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "Blockchain Developer",
    company: "Uniswap Labs",
    location: "New York, NY",
    salary: "$130,000-200,000",
    type: "Full-time",
    postedTime: "1 day ago",
    description:
      "Join the team behind the world's largest decentralized exchange. We're building the infrastructure for a decentralized financial system.",
    responsibilities: [
      "Design and implement smart contracts on Ethereum",
      "Build and maintain DeFi protocols and applications",
      "Conduct security audits and optimize gas efficiency",
      "Collaborate with researchers on protocol improvements",
    ],
    qualifications: [
      "Strong experience with Solidity and smart contract development",
      "Deep understanding of DeFi protocols and mechanisms",
      "Experience with testing frameworks like Hardhat or Foundry",
      "Knowledge of MEV, AMMs, and liquidity provision",
    ],
    benefits: [
      "Competitive compensation with token grants",
      "Work on cutting-edge DeFi technology",
      "Collaborative and innovative work environment",
      "Conference and education budget",
    ],
    tags: ["Solidity", "DeFi", "Ethereum", "Smart Contracts"],
  },
  {
    id: 4,
    title: "Product Manager",
    company: "OpenSea",
    location: "Remote",
    salary: "$140,000-180,000",
    type: "Full-time",
    postedTime: "2 days ago",
    description:
      "Lead product development for the world's largest NFT marketplace. Help shape the future of digital ownership and creator economies.",
    responsibilities: [
      "Define product strategy and roadmap for NFT marketplace features",
      "Work closely with engineering and design teams",
      "Analyze user behavior and market trends",
      "Coordinate product launches and feature rollouts",
    ],
    qualifications: [
      "5+ years of product management experience",
      "Understanding of NFTs and blockchain technology",
      "Experience with marketplace or e-commerce platforms",
      "Strong analytical and communication skills",
    ],
    benefits: [
      "Equity participation in a leading Web3 company",
      "Remote-friendly culture",
      "Comprehensive health benefits",
      "Professional growth opportunities",
    ],
    tags: ["Product Management", "NFT", "Marketplace", "Strategy"],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Chainlink",
    location: "Austin, TX",
    salary: "$110,000-160,000",
    type: "Full-time",
    postedTime: "3 days ago",
    description:
      "Help us scale the infrastructure that powers thousands of decentralized applications. Join our mission to connect smart contracts with real-world data.",
    responsibilities: [
      "Manage and scale blockchain node infrastructure",
      "Implement CI/CD pipelines for smart contract deployment",
      "Monitor system performance and ensure high availability",
      "Automate deployment and infrastructure management",
    ],
    qualifications: [
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Understanding of blockchain networks and nodes",
      "Proficiency in scripting languages (Python, Bash)",
    ],
    benefits: [
      "LINK token incentives",
      "Flexible work arrangements",
      "Health and wellness benefits",
      "Technical conference attendance",
    ],
    tags: ["DevOps", "AWS", "Kubernetes", "Blockchain"],
  },
]

interface JobBoardProps {
  messages: any
}

export default function JobBoard({ messages }: JobBoardProps) {
  const [selectedJob, setSelectedJob] = useState<JobPosition>(jobPositions[0])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobPositions.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 转换 JobPosition 为 JobCard 期待的格式
  const convertToJobCardData = (jobPosition: JobPosition) => ({
    id: jobPosition.id,
    recruiter: {
      name: jobPosition.company,
      avatar: "", // 空字符串，JobCard 会使用 fallback
    },
    title: jobPosition.title,
    tags: [jobPosition.type, jobPosition.location],
    skills: jobPosition.tags,
    salary: jobPosition.salary,
    posted: jobPosition.postedTime,
    featured: false,
  })

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {messages.JobPage.heroTitle1}{" "}
            <span className="bg-gradient-to-r from-[#e64ceb] to-[#fea5f9] bg-clip-text text-transparent">
              {messages.JobPage.heroTitle2}
            </span>{" "}
            {messages.JobPage.heroTitle3}
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Position, Title"
                className="pl-12 py-4 bg-[#2f3031] border-gray-700 text-white placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Backend", "Frontend", "Blockchain", "Solidity", "Management & Finance", "NFT"].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-[#2f3031] text-gray-300 hover:bg-[#e64ceb] hover:text-white cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full relative bg-white">
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">1355 Web3 Companies, 5479 Job Positions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[800px]">
          {/* Job List - Left Side */}
          <div className="lg:col-span-1 h-full">
            <Virtuoso
              data={filteredJobs}
              itemContent={(index, job) => (
                <div key={job.id} onClick={() => setSelectedJob(job)}>
                  <JobCard job={convertToJobCardData(job)} className="mb-6" />
                </div>
              )}
              style={{ height: '100%' }}
            />
          </div>

          {/* Job Details - Right Side */}
          <div className="lg:col-span-2 rounded-lg p-6 border border-gray-200/80">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#e64ceb] to-[#fea5f9] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{selectedJob.company.charAt(0)}</span>
              </div>
              <p className="font-medium text-sm leading-6 tracking-tight text-[#868C98] align-bottom">{selectedJob.title}</p>
            </div>
            <h1 className="text-2xl font-bold text-[#0A0D14] mb-2">{selectedJob.title}</h1>
                <div className="flex items-center space-x-2">
                  {selectedJob.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn("font-normal", tagColors[tag] || "bg-gray-100 text-gray-700")}
                    >
                      {tag}
                      {tag === "Badge" && <Zap className="w-3 h-3 ml-1" />}
                    </Badge>
                  ))}
                </div>
                {/* <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {selectedJob.salary}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedJob.postedTime}
                  </span>
                </div> */}

            <div className="space-y-6">
              <div className="border-b border-[#E5E5E5] border-b pb-6">
                <p className="text-[#868C98] leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A0D14] mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="text-[#0A0D14] flex items-start">
                      <span className="text-[#e64ceb] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A0D14] mb-3">Qualifications</h3>
                <ul className="space-y-2">
                  {selectedJob.qualifications.map((item, index) => (
                    <li key={index} className="text-[#0A0D14] flex items-start">
                      <span className="text-[#e64ceb] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A0D14] mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index} className="text-[#0A0D14] flex items-start">
                      <span className="text-[#e64ceb] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E5E5E5]">
                <Button className="bg-[#e64ceb] hover:bg-[#d63ae6] text-white px-8 py-3">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}
