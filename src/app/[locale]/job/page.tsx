// app/page.tsx (Server Component)

import JobBoard from "@/components/job-board"; // 你的客户端组件
import { JobPosition } from "@/types";
import { getTranslations } from "next-intl/server";

// 模拟从服务端获取数据（可以替换为 API 调用或数据库查询）
async function fetchJobPositions(): Promise<JobPosition[]> {
  // 这里可以调用外部 API 或数据库
  return [
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
  ];
}

export default async function Page() {
  const jobPositions = await fetchJobPositions(); // 在服务端获取数据
  const t = await getTranslations('JobPage');

  return (
    <div>
      <JobBoard jobPositions={jobPositions} messages={{ JobPage: { heroTitle1: t('heroTitle1'), heroTitle2: t('heroTitle2'), heroTitle3: t('heroTitle3') } }} />
    </div>
  );
}