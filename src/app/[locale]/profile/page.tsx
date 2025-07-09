"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, Github, LinkIcon, Mail, MapPin, Pencil, Phone, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("My resume")
  const router = useRouter()

  const renderTab = (name: string) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`py-3 px-4 text-sm font-medium ${
        activeTab === name ? "text-gray-900 border-b-2 border-[#335cff]" : "text-[#5c5c5c] hover:text-gray-900"
      }`}
    >
      {name}
    </button>
  )

  return (
    <div className="bg-[#ffffff] min-h-screen font-sans relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="border-b border-[#ebebeb]">
          <nav className="-mb-px flex space-x-6">
            {renderTab("My resume")}
            {renderTab("Account Management")}
          </nav>
        </header>

        <main className="mt-8">
          <section className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-[#171717]">Frontend Developer</h1>
              <p className="text-lg text-[#5c5c5c] mt-1">$25,000-40,000 per month</p>
            </div>
            <Button variant="outline" className="rounded-lg border-[#e2e4e9] text-[#171717] font-medium bg-transparent">
              <Briefcase className="w-4 h-4 mr-2" />
              Get permission
            </Button>
          </section>

          <section className="mt-8 border-t border-[#ebebeb] pt-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#a3a3a3]" />
                <span className="ml-4 text-base text-[#525866] w-32">Location</span>
                <span className="text-base text-[#171717]">Madrid, Spain</span>
              </div>
              <hr className="border-[#ebebeb]" />
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#a3a3a3]" />
                <span className="ml-4 text-base text-[#525866] w-32">Email Address</span>
                <span className="text-base text-[#171717]">pulse@alignui.com</span>
              </div>
              <hr className="border-[#ebebeb]" />
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#a3a3a3]" />
                <span className="ml-4 text-base text-[#525866] w-32">Phone number</span>
                <span className="text-base text-[#171717]">+86 18888888888</span>
              </div>
            </div>
          </section>

          <section className="mt-6 border-t border-[#ebebeb] pt-6 flex items-center space-x-8">
            <a href="#" className="flex items-center text-sm text-[#171717] hover:underline">
              <Twitter className="w-4 h-4 mr-2 text-[#5c5c5c]" />
              Twitter Link →
            </a>
            <a href="#" className="flex items-center text-sm text-[#171717] hover:underline">
              <Mail className="w-4 h-4 mr-2 text-[#5c5c5c]" />
              QQ Mail Link →
            </a>
            <a href="#" className="flex items-center text-sm text-[#171717] hover:underline">
              <Github className="w-4 h-4 mr-2 text-[#5c5c5c]" />
              github Link →
            </a>
            <a href="#" className="flex items-center text-sm text-[#171717] hover:underline">
              <LinkIcon className="w-4 h-4 mr-2 text-[#5c5c5c]" />
              Link address →
            </a>
          </section>

          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <InfoCard label="EDUCATION LEVEL" value="Undergraduate" />
            <InfoCard label="WORKING IN THE WEB 3" value="3 years" />
            <InfoCard label="LANGUAGE ABILITY" value="Chinese, English" />
            <InfoCard label="OFFICE MODE" value="On-site" />
            <InfoCard label="NATURE OF WORK" value="Full-time/Part-time" />
            <InfoCard
              label="SKILL"
              value="PHP Vue Java"
              className="col-span-full sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5"
            />
          </section>

          <TextSection
            title="About"
            content="I'm Bhavin Gala, a Web3 marketer with 6+ years in the space and a background in enterprise tech. I've worked with 35+ crypto projects, helping them grow through storytelling, organic marketing, and community building. Before Web3, I was a Senior SAP Consultant—so I've always balanced structure with creativity. I enjoy turning complex ideas into narratives people actually connect with."
          />

          <section className="mt-8 p-6 border border-[#ebebeb] rounded-lg">
            <h2 className="text-xl font-bold text-[#171717]">Experience</h2>
            <div className="mt-4 space-y-6">
              <ExperienceItem title="Senior SAP BI Consultant at Hitachi Consulting" dates="Jul 2014 - Dec 2021" />
              <ExperienceItem title="Social Media Lead at Router Protocol" dates="May 2021 - Jan 2023" />
              <ExperienceItem title="Senior SAP BI Consultant at Hitachi Consulting" dates="Jul 2014 - Dec 2021" />
              <ExperienceItem title="Senior SAP BI Consultant at Hitachi Consulting" dates="Jul 2014 - Dec 2021" />
            </div>
          </section>

          <TextSection
            title="Competitive Advantage"
            content="I'm Bhavin Gala, a Web3 marketer with 6+ years in the space and a background in enterprise tech. I've worked with 35+ crypto projects, helping them grow through storytelling, organic marketing, and community building. Before Web3, I was a Senior SAP Consultant—so I've always balanced structure with creativity. I enjoy turning complex ideas into narratives people actually connect with."
          />
        </main>

        <footer className="mt-12 pt-6 border-t border-[#ebebeb] flex justify-between items-center">
          <p className="text-sm text-[#a4a4a4]">Posted on: May 3, 2025</p>
          <Button variant="outline" className="rounded-lg border-[#e2e4e9] text-[#171717] font-medium bg-transparent" onClick={() => router.push('/profile/edit')}>
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </footer>
      </div>
    </div>
  )
}

interface InfoCardProps {
  label: string
  value: string
  className?: string
}

const InfoCard = ({ label, value, className }: InfoCardProps) => (
  <div className={`p-4 border border-[#ebebeb] rounded-lg ${className}`}>
    <p className="text-xs text-[#a4a4a4] uppercase tracking-wider">{label}</p>
    <p className="text-base font-semibold text-[#171717] mt-1">{value}</p>
  </div>
)

interface TextSectionProps {
  title: string
  content: string
}

const TextSection = ({ title, content }: TextSectionProps) => (
  <section className="mt-8 p-6 border border-[#ebebeb] rounded-lg">
    <h2 className="text-xl font-bold text-[#171717]">{title}</h2>
    <p className="mt-2 text-base text-[#5c5c5c] leading-relaxed">{content}</p>
  </section>
)

interface ExperienceItemProps {
  title: string
  dates: string
}

const ExperienceItem = ({ title, dates }: ExperienceItemProps) => (
  <div>
    <h3 className="font-semibold text-[#171717]">{title}</h3>
    <p className="text-sm text-[#a4a4a4] mt-1">{dates}</p>
  </div>
)
