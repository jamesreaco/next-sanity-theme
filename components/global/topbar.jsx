import Link from 'next/link'

export default function Topbar({ 
  message, 
  enableTopbarLink, 
  topbarLinkUrl, 
  topbarLinkText, 
  topbarLinkColor 
}) {
  return (
    <div className='m-2 md:m-0 rounded-lg md:rounded-none flex flex-col md:flex-row items-center justify-center p-4 text-base text-white tracking-wide bg-black'>
      <div>
        {message}
      </div>
      {enableTopbarLink && (
        <Link 
          href={`${topbarLinkUrl}`} 
          className='mt-2 md:mt-0 ml-4 py px-2 rounded text-black'
          style={{ backgroundColor: topbarLinkColor }}
        >
          {topbarLinkText}
        </Link>
      )}
    </div>
  )
}