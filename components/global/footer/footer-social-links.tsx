import Link from "next/link"
import { Settings } from "@/types/singletons/settings"

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
              <span className="absolute -bottom-2 left-0 block h-0.5 w-full max-w-0 group-hover:max-w-full transition-all duration-500 bg-black"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}