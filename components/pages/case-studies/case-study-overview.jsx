import Content from '@/components/shared/content';

export default function CaseStudyOverview({ overview }) {
  return (
    <section>
      <div className='max-w-lg mx-auto my-16 md:my-36 px-6'>
        <h2 className='mb-8 text-3xl md:text-5xl font-extralight'>
          Project Overview
        </h2>
        <Content data={overview} />
      </div>
    </section>
  )
}
