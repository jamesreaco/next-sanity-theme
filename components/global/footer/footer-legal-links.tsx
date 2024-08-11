import Link from "next/link"
import { Settings } from "@/types/singletons/settings"
import AnimatedUnderline from "@/components/shared/ui/animated-underline"

interface FooterLegalLinksProps {
  footerLegalLinks: Settings['footerLegalLinks']
}

export default function FooterLegalLinks({ footerLegalLinks }: FooterLegalLinksProps) {
  return (
    <div className='flex items-center gap-2.5'>
      {footerLegalLinks?.map((link) => (
        <div 
          key={link._id} 
          className='flex items-center gap-2.5 group'
        >
          <Link 
            href={link.link}
            className='relative mt-1 md:mt-0 text-sm tracking-tight group'
          >
            {link.title}
            <AnimatedUnderline className="-bottom-1.5" />
          </Link>
          <span className='group-last:hidden'>
            /
          </span>
        </div>
      ))}
    </div>
  )
}