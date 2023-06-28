import Content from '@/components/shared/content'

export default function TextBlock({ block }) {
  return (
    <section className='mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap:10 md:gap-20'>
      <div>
        <Content data={block.columnOne}/>
      </div>
      <div>
        <p>
          <Content data={block.columnTwo}/>
        </p>
      </div>
    </section>
  )
}
