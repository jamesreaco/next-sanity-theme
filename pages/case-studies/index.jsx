import { getAllCaseStudies } from '@/sanity/utils'
import Image from 'next/image'

//components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import Button from '@/components/shared/button'

export default function CaseStudiesPage({ caseStudies }) {
  return (
    <Layout>
      <Page heading="Case Studies">
        <div className='grid grid-cols-2 gap-4 mt-16 mb-16'>
          {caseStudies.map(caseStudy => (
            <div key={caseStudy.title} className='relative cursor-pointer overflow-hidden rounded-lg group'>
              <Image 
                src={caseStudy.image}
                width={800}
                height={1000}
                alt={caseStudy.title}
                className='w-full h-full object-cover transition hover:scale-[1.02]'
              />
              <div className='p-[1rem] absolute bottom-0 left-0 right-0 transition-all group-hover:p-[2rem]'>
                <Button text={caseStudy.title} />
              </div>
            </div>
          ))}
        </div>
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const caseStudies = await getAllCaseStudies()

  return {
    props: {
      caseStudies: caseStudies,
    }
  }
  
}
