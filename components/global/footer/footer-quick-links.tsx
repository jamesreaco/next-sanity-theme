import Link from "next/link"
import { Settings } from "@/types/singletons/settings"

interface FooterQuickLinksProps {
  footerQuickLinks: Settings['footerQuickLinks']
}

export default function FooterQuickLinks({ footerQuickLinks }: FooterQuickLinksProps) {
  return (
    <div>
      <h5 className='mb-6 font-semibold antialiased tracking-tight'>
        Quick Links
      </h5>
      <ul className="space-y-4">
        {footerQuickLinks?.map((item) => (
          <li key={item._id}>
            <Link 
              href={`${item.link}`}
              className="relative tracking-tight group"
            >
              {item.title}
              <span className="absolute -bottom-2 left-0 block h-0.5 w-full max-w-0 group-hover:max-w-full transition-all duration-500 bg-black"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}