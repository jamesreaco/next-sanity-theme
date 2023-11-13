import Container from '@/components/global/container'
import Content from '@/components/shared/content'

export default function TextBlock({ block }) {
  
  if (block.numberOfColumns === '1') {
    return (
      <Container>
        <div className='my-[30px] md:my-[60px] mx-auto' style={{
          maxWidth: block.style === 'narrow' ? '600px' : '1280px'
        }}>
          <div>
            <Content data={block.columnOne}/>
          </div>
        </div>
      </Container>
    )
  }

  if (block.numberOfColumns === '2') {
    return (
      <Container>
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap:10 md:gap-20'>
          <div>
            <Content data={block.columnOne}/>
          </div>
          <div>
            <p>
              <Content data={block.columnTwo}/>
            </p>
          </div>
        </div>
      </Container>
    )
  }
  
}
