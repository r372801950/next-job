import { MapPin, Mail, X, Send } from "lucide-react";

export function MainContent() {
  return (
    <main className="bg-[#ffffff] py-12 px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Introduction Section */}
        <section className="bg-[#ffffff] rounded-xl shadow-sm p-6 md:p-8 border border-[#e7e7e7]">
          <h2 className="text-2xl font-bold text-[#171717] mb-4">
            Introduction
          </h2>
          <p className="text-[#171717] leading-relaxed">
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

        {/* Join Us Section */}
        <section className="bg-[#ffffff] rounded-xl shadow-sm p-6 md:p-8 border border-[#e7e7e7]">
          <h2 className="text-2xl font-bold text-[#171717] mb-4">Join Us</h2>
          <p className="text-[#171717] leading-relaxed">
            As a free and open DAO, DeJob welcomes people with common goals and
            ideas to join. If you have experience in UI, copywriting,
            operations, technology development, marketing, etc., you can contact
            us:{" "}
            <a href="#" className="text-[#4c70f5] underline">
              @AndyTernary (Telegram)
            </a>
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="bg-[#ffffff] rounded-xl shadow-sm p-6 md:p-8 border border-[#e7e7e7]">
          <h2 className="text-2xl font-bold text-[#171717] mb-4">Contact Us</h2>
          <div className="grid gap-4">
            <div className="flex items-center py-2 border-b border-[#e7e7e7]">
              <MapPin className="w-5 h-5 text-[#a3a3a3] mr-3" />
              <span className="text-[#a3a3a3] w-32">Location</span>
              <span className="text-[#171717]">Madrid, Spain</span>
            </div>
            <div className="flex items-center py-2 border-b border-[#e7e7e7]">
              <Mail className="w-5 h-5 text-[#a3a3a3] mr-3" />
              <span className="text-[#a3a3a3] w-32">Email Address</span>
              <a
                href="mailto:pulse@alignui.com"
                className="text-[#4c70f5] underline"
              >
                pulse@alignui.com
              </a>
            </div>
            <div className="flex items-center py-2 border-b border-[#e7e7e7]">
              <X className="w-5 h-5 text-[#a3a3a3] mr-3" />{" "}
              {/* Using X as a placeholder for the icon */}
              <span className="text-[#a3a3a3] w-32">Company Size</span>
              <a href="#" className="text-[#4c70f5] underline">
                Address link
              </a>
            </div>
            <div className="flex items-center py-2">
              <Send className="w-5 h-5 text-[#a3a3a3] mr-3" />
              <span className="text-[#a3a3a3] w-32">Telegram</span>
              <a href="#" className="text-[#4c70f5] underline">
                Address link
              </a>
            </div>
          </div>
        </section>

        {/* Business Cooperation Section */}
        <section className="bg-[#ffffff] rounded-xl shadow-sm p-6 md:p-8 border border-[#e7e7e7]">
          <h2 className="text-2xl font-bold text-[#171717] mb-4">
            Business Cooperation
          </h2>
          <p className="text-[#171717] leading-relaxed">
            DeJob.top has entered more than 600 companies, including major
            media, exchanges, wallets, auditing, mining pools and other
            platform-based companies. Besides, we have reached partnership with
            project parties, investment institutions and KOLs from various
            tracks. For business cooperation needs, please contact us:{" "}
            <a href="#" className="text-[#4c70f5] underline">
              @Junnie_666 (Telegram)
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
