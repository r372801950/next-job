import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Zap } from "lucide-react"

type Job = {
  id: number
  recruiter: {
    name: string
    avatar: string
  }
  title: string
  tags: string[]
  skills: string[]
  salary: string
  posted: string
  featured?: boolean
}

interface JobCardProps {
  job: Job;
  className?: string
}

export const tagColors: { [key: string]: string } = {
  "Full-time": "bg-purple-100 text-purple-700",
  "On-site": "bg-blue-100 text-blue-700",
  Remote: "bg-orange-100 text-orange-700",
  Badge: "bg-pink-100 text-pink-700",
}

export function JobCard({ job,className }: JobCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-2xl border border-gray-200/80 transition-all hover:shadow-lg hover:border-purple-300",
        job.featured && "border-pink-400 relative",
        className
      )}
    >
      {job.featured && (
        <div className="absolute -top-px -left-px -right-px h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-t-2xl" />
      )}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={job.recruiter.avatar || "/placeholder.svg"} alt={job.recruiter.name} />
            <AvatarFallback>{job.recruiter.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-800">{job.recruiter.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          {job.tags.map((tag) => (
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
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="font-normal bg-gray-100 text-gray-600">
            {skill}
          </Badge>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{job.salary}</span>
        <span>{job.posted}</span>
      </div>
    </div>
  )
}
