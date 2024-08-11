import Link from "next/link"
import { Settings } from "@/types/singletons/settings"
import AnimatedUnderline from "@/components/shared/ui/animated-underline"

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
              <AnimatedUnderline />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}