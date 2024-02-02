import { SettingsPayload } from "@/types"

interface BottomBarProps {
  bottomBarMessage: SettingsPayload['bottomBarMessage']  
  enableBottomBarLink: SettingsPayload['enableBottomBarLink']
  bottomBarLinkUrl: SettingsPayload['bottomBarLinkUrl'] 
  bottomBarLinkText: SettingsPayload['bottomBarLinkText']   
  bottomBarLinkColor: SettingsPayload['bottomBarLinkColor']
}

export default function BottomBar(props: BottomBarProps) {

  const { 
    bottomBarMessage, 
    enableBottomBarLink, 
    bottomBarLinkUrl, 
    bottomBarLinkText, 
    bottomBarLinkColor 
  } = props

  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-fit z-20 flex flex-row items-center justify-between md:justify-center p-2 pl-4 text-base border text-black tracking-wide rounded-lg bg-[#F6F6F1]'>
      <div className='pr-1 text-[15px] md:text-[16px]'>
        {bottomBarMessage}
      </div>
      {enableBottomBarLink && (
        <a 
          href={`${bottomBarLinkUrl}`} 
          target='_blank'
          rel="noopener noreferrer"
          className='ml-3 py-[2px] px-[10px] text-[14px] text-white rounded transition hover:scale-[0.98]'
          style={{ backgroundColor: bottomBarLinkColor }}
        >
          {bottomBarLinkText}
        </a>
      )}
    </div>
  )
}