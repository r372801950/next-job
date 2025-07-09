import { Briefcase, MoveUpRight } from "lucide-react"
import Link from "next/link"
import path from "path"
import fs from "fs/promises"

interface SiteFooterProps {
  locale: string
}

export async function SiteFooter({ locale }: SiteFooterProps) {
  // 动态加载对应语言的 messages
  const messagesPath = path.join(process.cwd(), "messages", `${locale}.json`)
  const file = await fs.readFile(messagesPath, "utf-8")
  const messages = JSON.parse(file)
  const t = (key: string) => key.split('.').reduce((o, i) => o?.[i], messages.Footer)

  return (
    <footer className="relative bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold text-black">{t('brand')}</span>
            </div>
            <p className="text-gray-500 text-sm" style={{ whiteSpace: 'pre-line' }}>
              {t('slogan')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">{t('aboutUs.title')}</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('aboutUs.about')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('aboutUs.contact')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('aboutUs.join')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">{t('jobApplication.title')}</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('jobApplication.postResume')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('jobApplication.findJob')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('jobApplication.findCompany')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">{t('recruitment.title')}</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('recruitment.postJob')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500 flex items-center gap-1">
                  {t('recruitment.hireDev')}
                  <MoveUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
