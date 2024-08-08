import { Settings } from "@/types/settings"

interface BottomBarProps {
  settings: Settings
}

export default function BottomBar({ settings }: BottomBarProps) {

  const { bottomBarMessage, enableBottomBarLink, bottomBarLinkText } = settings

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-fit z-20">
      <div className='flex flex-row items-center justify-between md:justify-center p-2 pl-4 border rounded-lg bg-[#F6F6F1]'>
        <Message>
          {bottomBarMessage}
        </Message>
        {enableBottomBarLink && (
          <Link settings={settings}>
            {bottomBarLinkText}
          </Link>
        )}
      </div>
    </div>
  )
}

function Message({ children }: {
  children: React.ReactNode
}) {
  return (
    <span className='pr-1 text-sm md:text-base text-black tracking-wide'>
      {children}
    </span>
  )
}

function Link({ children, settings }: {
  settings: Settings,
  children: React.ReactNode
}) {

  const { bottomBarLinkUrl, bottomBarLinkColor } = settings

  return (
    <a 
      href={`${bottomBarLinkUrl}`} 
      target='_blank'
      rel="noopener noreferrer"
      className='ml-3 py-0.5 px-2.5 text-3.5 text-white rounded transition hover:scale-[0.98]'
      style={{ backgroundColor: bottomBarLinkColor }}
    >
     {children}
    </a>
  )
}