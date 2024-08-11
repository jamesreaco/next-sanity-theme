import Link from "next/link"
import { Settings } from "@/types/singletons/settings"

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
            <span className="absolute -bottom-1.5 left-0 block h-0.5 w-full max-w-0 group-hover:max-w-full transition-all duration-500 bg-black"></span>
          </Link>
          <span className='group-last:hidden'>
            /
          </span>
        </div>
      ))}
    </div>
  )
}