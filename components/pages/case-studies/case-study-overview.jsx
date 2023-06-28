import { PortableText } from '@portabletext/react';

export default function CaseStudyOverview({ overview }) {
  return (
    <section>
      <div className='max-w-3xl mx-auto my-20'>
        <h2 className='text-7xl font-extralight'>
          Project Overview
        </h2>
        <PortableText value={overview} />
      </div>
    </section>
  )
}
