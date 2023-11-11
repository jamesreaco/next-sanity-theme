import Link from 'next/link'

export default function Topbar({ 
  message, 
  enableTopbarLink, 
  topbarLinkUrl, 
  topbarLinkText, 
  topbarLinkColor 
}) {
  return (
    <div className='fixed md:static bottom-3 left-3 right-3 z-20 flex flex-row items-center justify-between md:justify-center p-4 text-base text-white tracking-wide bg-black'>
      <div className='text-[15px] md:text-[16px]'>
        {message}
      </div>
      {enableTopbarLink && (
        <Link 
          href={`${topbarLinkUrl}`} 
          className='ml-3 py-[2px] px-[10px] text-[14px] text-black'
          style={{ backgroundColor: topbarLinkColor }}
        >
          {topbarLinkText}
        </Link>
      )}
    </div>
  )
}