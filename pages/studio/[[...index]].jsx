import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'
import PageHead from '@/components/global/page-head'

export default function StudioPage() {
  return (
    <div>
      
      <PageHead 
        title="Studio | Portfolio Site"
        description="A free and open-source Next.js, Sanity + Tailwind starter theme."
        keywords="next, sanity, tailwind"
      />

      <NextStudio config={config} />
    </div>
  )
}