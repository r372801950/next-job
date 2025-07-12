"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Pencil, Mail, Send, MessageSquare, Info, Plus, X } from "lucide-react"

export default function PersonalInfoForm() {
  const [skills, setSkills] = useState(["Skill1", "Skill2", "Skill2", "Skill2"])

  const removeSkill = (indexToRemove: number) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Personal Information</h1>

        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Get_Jobs__bolin-oYIO4635RcdC7LjDWKyAHw5TFIcVKq.png"
              alt="User avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button variant="ghost" className="text-sm text-gray-600">
            <Pencil className="w-4 h-4 mr-2" />
            Edit avatar
          </Button>
          <p className="text-gray-500 text-sm mt-2">Here is a personalized signature.</p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input id="name" placeholder="Placeholder text..." />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone number<span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center">
                <Select defaultValue="+1">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" placeholder="(555) 000-0000" className="ml-2" />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address<span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="email" placeholder="Placeholder text..." className="pl-10" />
              </div>
            </div>

            {/* Telegram */}
            <div className="space-y-2">
              <Label htmlFor="telegram">Telegram</Label>
              <div className="relative">
                <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="telegram" placeholder="Placeholder text..." className="pl-10" />
              </div>
            </div>

            {/* WeChat */}
            <div className="space-y-2">
              <Label htmlFor="wechat">WeChat</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="wechat" placeholder="Placeholder text..." className="pl-10" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {/* Educational Background */}
            <div className="space-y-2">
              <Label>
                Educational background<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language Ability */}
            <div className="space-y-2">
              <Label>
                Language ability<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Web 3.0 Industry Professionals */}
            <div className="space-y-2">
              <Label>Web 3.0 industry professionals</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-year">1 Year</SelectItem>
                  <SelectItem value="2-years">2 Years</SelectItem>
                  <SelectItem value="3-plus-years">3+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Office Mode */}
            <div className="space-y-2">
              <Label>
                Office mode<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="office">In-Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Nature of Work */}
            <div className="space-y-2">
              <Label>
                Nature of work<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Whether others can see */}
            <div className="space-y-2">
              <Label>Whether others can see</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Permissions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Office Country/City */}
            <div className="space-y-2 lg:col-span-3">
              <Label>
                Office Country/City<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Salary Range */}
            <div className="space-y-2 lg:col-span-3">
              <Label>
                Salary Range<span className="text-red-500">*</span>
              </Label>
              <div className="flex flex-wrap items-center gap-2">
                <Select>
                  <SelectTrigger className="w-auto flex-grow focus:ring-purple-500 focus:border-purple-500">
                    <SelectValue placeholder="Minimum Wage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k">$50,000</SelectItem>
                    <SelectItem value="70k">$70,000</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-gray-500">~</span>
                <Select>
                  <SelectTrigger className="w-auto flex-grow">
                    <SelectValue placeholder="Highest salary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100k">$100,000</SelectItem>
                    <SelectItem value="120k">$120,000</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="usdt">
                  <SelectTrigger className="w-auto flex-grow">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdt">USDT</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="month">
                  <SelectTrigger className="w-auto flex-grow">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">月</SelectItem>
                    <SelectItem value="year">年</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="space-y-2 lg:col-span-3">
              <Label>
                Skill Tags<span className="text-red-500">*</span>
              </Label>
              <div className="flex flex-wrap items-center gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="py-1 px-2">
                    {skill}
                    <button onClick={() => removeSkill(index)} className="ml-1.5">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
                <Button type="button" variant="outline" size="sm" className="text-gray-600 bg-transparent">
                  New Skill
                  <Plus className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

            {/* Project Experience */}
            <div className="space-y-2 lg:col-span-3">
              <Label htmlFor="project-experience">
                Project Experience<span className="text-red-500">*</span>
              </Label>
              <Textarea id="project-experience" placeholder="Placeholder text..." className="min-h-[100px]" />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 flex items-center">
                  <Info className="w-4 h-4 mr-1.5" />
                  This is a hint text to help user.
                </p>
                <p className="text-sm text-gray-400">0/200</p>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="space-y-2 lg:col-span-3">
              <Label htmlFor="competitive-advantage">
                Competitive Advantage<span className="text-red-500">*</span>
              </Label>
              <Textarea id="competitive-advantage" placeholder="Placeholder text..." className="min-h-[100px]" />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 flex items-center">
                  <Info className="w-4 h-4 mr-1.5" />
                  This is a hint text to help user.
                </p>
                <p className="text-sm text-gray-400">0/200</p>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-2 pt-4">
            <p>
              1. If you select "Yes" under "Visible to Others," we will post your resume to our Telegram channel:{" "}
              <a href="#" className="text-blue-600">
                https://t.me/DeJob_official
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-600">
                https://t.me/DeJob_Global
              </a>
              .
            </p>
            <p>
              2. To ensure that the employer can contact you smoothly, please provide at least one of the following
              contact methods: WeChat, phone, or Telegram.
            </p>
          </div>

          <Button type="submit" disabled className="w-full !mt-12" size="lg">
            Release
          </Button>
        </form>
      </div>
    </div>
  )
}
