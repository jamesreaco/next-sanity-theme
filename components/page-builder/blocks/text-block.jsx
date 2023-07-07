import Content from '@/components/shared/content'

export default function TextBlock({ block }) {
  
  if (block.numberOfColumns === '1') {
    return (
      <section className='mt-6 mx-auto mb-6' style={{
        maxWidth: block.style === 'narrow' ? '600px' : '1280px'
      }}>
        <div>
          <Content data={block.columnOne}/>
        </div>
      </section>
    )
  }

  if (block.numberOfColumns === '2') {
    return (
      <section className='my-14 grid grid-cols-1 md:grid-cols-2 gap:10 md:gap-20'>
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
  
}
