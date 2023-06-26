import Link from 'next/link'

export default function Topbar({ 
  message, 
  enableTopbarLink, 
  topbarLinkUrl, 
  topbarLinkText, 
  topbarLinkColor 
}) {
  return (
    <div className='flex items-center justify-center p-4 text-lg text-white tracking-wide bg-black'>
      <div>
        {message}
      </div>
      {enableTopbarLink && (
        <Link 
          href={`${topbarLinkUrl}`} 
          className='ml-4 py px-2 rounded text-black'
          style={{ backgroundColor: topbarLinkColor }}
        >
          {topbarLinkText}
        </Link>
      )}
    </div>
  )
}