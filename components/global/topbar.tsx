interface TopbarProps {
  message: string 
  enableTopbarLink: boolean 
  topbarLinkUrl: string 
  topbarLinkText: string 
  topbarLinkColor: string
}

export default function Topbar(props: TopbarProps) {

  const { 
    message, 
    enableTopbarLink, 
    topbarLinkUrl, 
    topbarLinkText, 
    topbarLinkColor 
  } = props

  return (
    <div className='fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[95%] md:w-fit z-20 flex flex-row items-center justify-between md:justify-center p-2 pl-4 text-base text-white tracking-wide rounded-lg bg-black'>
      <div className='pr-1 text-[15px] md:text-[16px]'>
        {message}
      </div>
      {enableTopbarLink && (
        <a 
          href={`${topbarLinkUrl}`} 
          target='_blank'
          rel="noopener noreferrer"
          className='ml-3 py-[2px] px-[10px] text-[14px] text-black rounded transition hover:scale-[0.98]'
          style={{ backgroundColor: topbarLinkColor }}
        >
          {topbarLinkText}
        </a>
      )}
    </div>
  )
}