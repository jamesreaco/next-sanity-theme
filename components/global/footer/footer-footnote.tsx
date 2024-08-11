import { Settings } from "@/types/singletons/settings"

interface FooterFootnoteProps {
  footerFootnoteText: Settings['footerFootnoteText']
  enableFootnoteLink: Settings['enableFootnoteLink']
  footerFootnoteLink: Settings['footerFootnoteLink']
  footerFootnoteLinkText: Settings['footerFootnoteLinkText']
}

export default function FooterFootnote(props: FooterFootnoteProps) {

  const {
    footerFootnoteText,
    enableFootnoteLink,
    footerFootnoteLink,
    footerFootnoteLinkText
  } = props

  return (
    <span className='mt-1 md:mt-0 ml-0 md:ml-1 text-sm tracking-tight'>
      {footerFootnoteText ?? 'A free and open source theme by'}
      &nbsp;
      {enableFootnoteLink && (
        <a 
          href={footerFootnoteLink ?? 'https://jamesrea.co'}
          target='_blank'
          rel="noopener noreferrer"
          className='relative font-medium text-[#0e788a] group'
        >
          {footerFootnoteLinkText ?? 'James Rea'}
          <span className="absolute -bottom-1.5 left-0 block h-0.5 w-full max-w-0 group-hover:max-w-full transition-all duration-500 bg-[#0e788a]"></span>
        </a>
      )}
    </span>
  )
}