import Content from '@/components/shared/content';

export default function CaseStudyOverview({ overview }) {
  return (
    <section>
      <div className='max-w-lg mx-auto my-36'>
        <h2 className='mb-8 text-6xl font-extralight'>
          Project Overview
        </h2>
        <Content data={overview} />
      </div>
    </section>
  )
}
