import { Settings } from "@/types/singletons/settings"

interface BottomBarProps {
  settings: Settings
}

export default function BottomBar({ settings }: BottomBarProps) {

  const { bottomBarMessage, enableBottomBarLink, bottomBarLinkText } = settings

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-fit z-20">
      <div className='flex flex-row items-center justify-between md:justify-center p-1.5 pl-3 border rounded-lg bg-[#F6F6F1]'>
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
    <span className='pr-1 text-sm text-black'>
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
      className='ml-2 py-0.5 px-2 rounded-md transition hover:opacity-95 text-sm tracking-tight text-white'
      style={{ backgroundColor: bottomBarLinkColor }}
    >
     {children}
    </a>
  )
}