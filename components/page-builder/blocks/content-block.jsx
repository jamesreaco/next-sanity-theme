import Container from '@/components/global/container'
import Button from '@/components/shared/button'
import { urlFor } from '@/sanity/image-builder'
import Image from 'next/image'

export default function ContentBlock({ block }) {

  return (
    <Container>
      <div className='my-14 grid grid-cols-1 md:grid-cols-2 border bg-white rounded-lg overflow-hidden'>
        <div className='p-10 lg:p-20 flex flex-col items-start justify-start'>
          <h2 className='text-3xl font-medium'>
            {block.heading}
          </h2>
          <p className='mt-4'>
            {block.paragraph}
          </p>
          <Button 
            text='Learn More' 
            destination="" 
            variant="dark"
            classNames="mt-8"
          />
        </div>
        <div>
          <Image
            src={urlFor(block.image).url()}
            width={600}
            height={600}
            className='h-full w-full object-cover'
            alt="Image alt goes here"
          />
        </div>
      </div>
    </Container>
  )
  
}
