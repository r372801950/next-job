import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  MapPinIcon,
  MailIcon,
  BriefcaseIcon,
  SendIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex h-[500px] items-center justify-center bg-gray-950 text-white overflow-hidden pt-16 md:pt-0">
        {/* Starry background effect - simplified */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-2000" />
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-3000" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-4000" />
        </div>
        {/* Glowing Orb - using placeholder image */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-10 z-10">
          <Image
            src="/placeholder.svg?height=200&width=200"
            width={200}
            height={200}
            alt="Abstract Orb"
            className="animate-spin-slow"
          />
        </div>
        <h1 className="relative z-20 text-4xl md:text-6xl font-bold tracking-tight text-center">
          About Get Jobs
        </h1>
      </section>

      {/* Main Content Area */}
      <main className="relative z-30 -mt-20 mx-auto max-w-6xl px-4 md:px-8 lg:px-12 bg-white rounded-lg shadow-xl py-8 md:py-12">
        {/* Introduction */}
        <section className="pb-8 md:pb-12 border-b border-gray-200 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            DeJob.top is a recruitment platform built by blockchain enthusiasts.
            Our ultimate goal is to develop into a fully decentralized
            autonomous organization (DAO) that provides talent support for the
            development of Web3. Countless ideas and companies about Web3 are
            sprouting, requiring young talents from different fields to join.
            But job hunters may be frustrated because of the lack of Web3 jobs
            information. So, DeJob hopes address this gap and matches the
            employers and employees in Web3 industry.
          </p>
        </section>

        {/* Join Us */}
        <section className="pb-8 md:pb-12 border-b border-gray-200 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            As a free and open DAO, DeJob welcomes people with common goals and
            ideas to join. If you have experience in UI, copywriting,
            operations, technology development, marketing, etc., you can contact
            us:{" "}
            <Link
              href="#"
              className="text-purple-600 hover:underline"
              prefetch={false}
            >
              @AndyTernary (Telegram)
            </Link>
          </p>
        </section>

        {/* Contact Us */}
        <section className="pb-8 md:pb-12 border-b border-gray-200 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-700">Madrid, Spain</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MailIcon className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold">Email Address</p>
                <Link
                  href="mailto:pulse@alignui.com"
                  className="text-purple-600 hover:underline"
                  prefetch={false}
                >
                  pulse@alignui.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BriefcaseIcon className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold">Company Size</p>
                <Link
                  href="#"
                  className="text-purple-600 hover:underline"
                  prefetch={false}
                >
                  Address link
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <SendIcon className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold">Telegram</p>
                <Link
                  href="#"
                  className="text-purple-600 hover:underline"
                  prefetch={false}
                >
                  Address link
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Cooperation */}
        <section className="pb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Business Cooperation
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            DeJob.top has entered more than 600 companies, including major
            media, exchanges, wallets, auditing, mining pools and other
            platform-based companies. Besides, we have reached partnership with
            project parties, investment institutions and KOLs from various
            tracks. For business cooperation needs, please contact us:{" "}
            <Link
              href="#"
              className="text-purple-600 hover:underline"
              prefetch={false}
            >
              @Junnie_666 (Telegram)
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
