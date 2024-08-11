import Link from "next/link"
import { Settings } from "@/types/singletons/settings"
import AnimatedUnderline from "@/components/shared/ui/animated-underline"

interface FooterSocialLinksProps {
  footerSocialLinks: Settings['footerSocialLinks']
}

export default function FooterSocialLinks({ footerSocialLinks }: FooterSocialLinksProps) {
  return (
    <div>
      <h5 className='mb-6 font-semibold antialiased tracking-tight'>
        Socials
      </h5>
      <ul className="space-y-4">
        {footerSocialLinks?.map((item) => (
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