import { CaseStudy } from '@/types';
import Image from 'next/image';
import Content from '@/components/shared/content';

interface CaseStudyOverviewProps {
  caseStudy: CaseStudy
}

export default function CaseStudyOverview({ caseStudy }: CaseStudyOverviewProps) {
  return (
    <section className='mx-[20px] md:mx-0 md:py-[60px] grid md:grid-cols-2 md:border-t md:border-b'>
      <Image 
        src={caseStudy.image}
        width={2000}
        height={600}
        alt={caseStudy.title}
        className='h-[400px] md:h-[1200px] object-cover'
      />
      <div className='relative flex flex-col justify-center mx-auto mt-[60px] md:my-16 md:px-[80px]'>
        <h2 className='mb-4 text-3xl md:text-4xl font-extralight'>
          Project Overview
        </h2>
        <Content data={caseStudy.overview} />
      </div>
    </section>
  )
}
