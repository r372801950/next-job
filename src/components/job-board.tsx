"use client";

import { useState } from "react";
import { Search, MapPin, Clock, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Virtuoso } from "react-virtuoso";
import { JobCard, tagColors } from "@/components/job-card";
import { cn } from "@/lib/utils";

interface JobPosition {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedTime: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  tags: string[];
}

interface JobBoardProps {
  jobPositions: JobPosition[];
  messages: any;
}

export default function JobBoard({ jobPositions, messages }: JobBoardProps) {
  const [selectedJob, setSelectedJob] = useState<JobPosition>(jobPositions[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobPositions.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const convertToJobCardData = (jobPosition: JobPosition) => ({
    id: jobPosition.id,
    recruiter: {
      name: jobPosition.company,
      avatar: "",
    },
    title: jobPosition.title,
    tags: [jobPosition.type, jobPosition.location],
    skills: jobPosition.tags,
    salary: jobPosition.salary,
    posted: jobPosition.postedTime,
    featured: false,
  });

  return (
    <div className="min-h-screen text-white">
      {/* 其余代码保持不变 */}
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

      {/* 其余 JSX 代码 */}
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

      <div className="w-full relative bg-white">
        <div className="container mx-auto px-4 pb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">
              1355 Web3 Companies, {jobPositions.length} Job Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[800px]">
            <div className="lg:col-span-1 h-full">
              <Virtuoso
                data={filteredJobs}
                itemContent={(index, job) => (
                  <div key={job.id} onClick={() => setSelectedJob(job)}>
                    <JobCard job={convertToJobCardData(job)} className="mb-6" />
                  </div>
                )}
                style={{ height: "100%" }}
              />
            </div>

            <div className="lg:col-span-2 rounded-lg p-6 border border-gray-200/80">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#e64ceb] to-[#fea5f9] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedJob.company.charAt(0)}</span>
                </div>
                <p className="font-medium text-sm leading-6 tracking-tight text-[#868C98] align-bottom">
                  {selectedJob.title}
                </p>
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
                  <Button className="bg-[#e64ceb] hover:bg-[#d63ae6] text-white px-8 py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}