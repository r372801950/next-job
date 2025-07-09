import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search } from "lucide-react"
import { getTranslations } from "next-intl/server"

const jobs = [
  {
    id: 1,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Full Stack Developer",
    tags: ["Full-time", "On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3", "Skills 4"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
    featured: true,
  },
  {
    id: 2,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Full Stack Developer",
    tags: ["Full-time", "On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3", "Skills 4"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 3,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Blockchain Developer",
    tags: ["On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 4,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Full Stack Developer",
    tags: ["Full-time", "On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3", "Skills 4"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 5,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Smart Contract Developer",
    tags: ["Full-time", "On-site", "Remote"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 6,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Full Stack Developer",
    tags: ["Full-time", "On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3", "Skills 4"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 7,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Smart Contract Developer",
    tags: ["Full-time", "On-site", "Remote"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
  {
    id: 8,
    recruiter: { name: "Paritosh Gupta", avatar: "/placeholder.svg?width=40&height=40&text=PG" },
    title: "Full Stack Developer",
    tags: ["Full-time", "On-site", "Remote", "Badge"],
    skills: ["3+ YOE", "Skills 1", "Skills 2", "Skills 3", "Skills 4"],
    salary: "$25,000-40,000 per month",
    posted: "23 hours ago posted",
  },
]

export default async function JobsPage() {
  const t = await getTranslations('TalentPage');
  return (
    <div className="relative">
      <div className="relative ">
        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('heroTitle')}</h1>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Position, Title"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border-gray-700 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommend 2,000 Outstanding Talents</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Office mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Nature of work" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Salary Range</span>
              <Select>
                <SelectTrigger className="w-[180px] border-purple-400 ring-1 ring-purple-400">
                  <SelectValue placeholder="Minimum Wage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50k">$50,000</SelectItem>
                  <SelectItem value="80k">$80,000</SelectItem>
                  <SelectItem value="120k">$120,000</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-gray-500">~</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Highest salary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100k">$100,000</SelectItem>
                  <SelectItem value="150k">$150,000</SelectItem>
                  <SelectItem value="200k">$200,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="ghost">Clear</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <p className="text-sm text-gray-600">Page 2 of 16</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">16</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <div className="flex items-center space-x-2">
              <Select defaultValue="7">
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 / page</SelectItem>
                  <SelectItem value="14">14 / page</SelectItem>
                  <SelectItem value="21">21 / page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
