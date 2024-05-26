import Flex from "../shared/ui/flex"
import { SettingsPayload } from "@/types"

interface BottomBarProps {
  settings: SettingsPayload
}

export default function BottomBar(props: BottomBarProps) {

  const { settings } = props

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-fit z-20">
      <Flex className='flex-row items-center justify-between md:justify-center p-2 pl-4 border rounded-lg bg-[#F6F6F1]'>
        <Message>
          {settings.bottomBarMessage}
        </Message>
        {settings.enableBottomBarLink && (
          <Link settings={settings}>
            {settings.bottomBarLinkText}
          </Link>
        )}
      </Flex>
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
  settings: SettingsPayload,
  children: React.ReactNode
}) {
  return (
    <a 
      href={`${settings.bottomBarLinkUrl}`} 
      target='_blank'
      rel="noopener noreferrer"
      className='ml-3 py-0.5 px-2.5 text-3.5 text-white rounded transition hover:scale-[0.98]'
      style={{ backgroundColor: settings.bottomBarLinkColor }}
    >
     {children}
    </a>
  )
}