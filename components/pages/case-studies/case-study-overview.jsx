import Content from '@/components/shared/content';
import Image from 'next/image';

export default function CaseStudyOverview({ overview, image, title }) {
  return (
    <section className='mx-[20px] md:mx-0 md:py-[60px] grid md:grid-cols-2 md:border-t md:border-b'>
      <Image 
        src={image}
        width={2000}
        height={600}
        alt={title}
        className='h-[600px] md:h-[1200px] object-cover'
      />
      <div className='relative flex flex-col justify-center mx-auto mt-[60px] md:my-16 md:px-[80px]'>
        <h2 className='mb-4 text-3xl md:text-4xl font-extralight'>
          Project Overview
        </h2>
        <Content data={overview} />
      </div>
    </section>
  )
}
