import Link from 'next/link'

export default function Topbar({ 
  message, 
  enableTopbarLink, 
  topbarLinkUrl, 
  topbarLinkText, 
  topbarLinkColor 
}) {
  return (
    <div className='hidden sm:flex flex-row items-center justify-center p-4 text-base text-white tracking-wide bg-black'>
      <div>
        {message}
      </div>
      {enableTopbarLink && (
        <Link 
          href={`${topbarLinkUrl}`} 
          className='ml-3 py-0.5 px-1.5 rounded text-sm text-black'
          style={{ backgroundColor: topbarLinkColor }}
        >
          {topbarLinkText}
        </Link>
      )}
    </div>
  )
}