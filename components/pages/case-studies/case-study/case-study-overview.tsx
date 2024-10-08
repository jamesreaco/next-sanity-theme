import Image from 'next/image';
import Container from '@/components/global/container';
import { CaseStudy } from '@/types/documents/case-study';
import PortableTextEditor from '@/components/portable-text';

export default function CaseStudyOverview({ caseStudy }: {
  caseStudy: CaseStudy
}) {
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
        <div className='flex-col justify-center relative max-w-4xl mx-auto mt-16 md:my-32'>
          <h2 className='mb-4 text-3xl md:text-4xl font-extralight'>
            Project Overview
          </h2>
          <PortableTextEditor
            data={caseStudy.overview}
          />
        </div>
      </Container>
    </section>
  )
}