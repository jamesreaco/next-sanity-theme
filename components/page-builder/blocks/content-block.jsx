import Container from '@/components/global/container'
import Content from '@/components/shared/content'
import { urlFor } from '@/sanity/image-builder'
import Image from 'next/image'

export default function ContentBlock({ block }) {

  return (
    <div className='mt-16 pt-7 pb-10 md:py-20 bg-[#fff] border'>
      <Container>
        <div className='grid md:grid-cols-2 gap-10 md:gap-16'>
          <div className=''>
            <Image
              src={urlFor(block.image).url()}
              width={600}
              height={300}
              className='h-full w-full object-cover'
              alt="Image alt goes here"
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Content data={block.content}/>
          </div>
        </div>
      </Container>
    </div>
  )
}
