import Container from '@/components/global/container'
import Image from 'next/image'
import { urlFor } from '@/sanity/image-builder'

export default function PostQuoteBlock({ block }) {
  return (
    <Container>
      <div className='mb-[60px] mx-auto max-w-[600px] p-4'>
        <div className='p-12 border rounded-lg bg-blue-800' style={{
          backgroundColor: block.backgroundColor
        }}>
          <div className='text-2xl text-center text-white'>
            {block.quote}
          </div>
          <div className='mt-4 antialiased text-center text-white'>
            {block.author}
          </div>
        </div>
      </div>
    </Container>
  )
}
