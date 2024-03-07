import { CaseStudy } from '@/types';
import Image from 'next/image';
import Content from '@/components/shared/content';
import Container from '@/components/global/container';

interface CaseStudyOverviewProps {
  caseStudy: CaseStudy
}

export default function CaseStudyOverview({ caseStudy }: CaseStudyOverviewProps) {
  return (
    <section>
      <Container>
        <Image 
          src={caseStudy.image}
          width={2000}
          height={600}
          alt={caseStudy.title}
          className='h-[400px] md:h-[600px] object-cover rounded-xl'
        />
        <div className='relative flex flex-col justify-center max-w-4xl mx-auto mt-16 md:my-32'>
          <h2 className='mb-4 text-3xl md:text-4xl font-extralight'>
            Project Overview
          </h2>
          <Content data={caseStudy.overview} />
        </div>
      </Container>
    </section>
  )
}
