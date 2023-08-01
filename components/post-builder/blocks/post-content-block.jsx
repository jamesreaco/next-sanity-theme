import Container from '@/components/global/container'
import Content from '@/components/shared/content'

export default function PostContentBlock({ block }) {
  return (
    <Container>
      <div className='mb-[60px] mx-auto max-w-[600px] px-0 md:px-4'>
        <div>
          <Content data={block.content}/>
        </div>
      </div>
    </Container>
  )
  
}
