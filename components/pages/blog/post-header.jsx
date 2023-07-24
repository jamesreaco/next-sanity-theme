import Image from 'next/image'
import Tag from '@/components/shared/tag'
import Container from '@/components/global/container'

export default function PostHeader({
  image,
  category,
  readTime,
  title
}) {
  return (
    <Container>
      <header className='mt-6 md:mt-12'>
        <Image 
          src={image}
          width={2000}
          height={2000}
          alt='Thumbnail Image'
          className='rounded-2xl'
        />
        <div className='max-w-xl mx-auto my-10'>
          <div className='md:mt-20 flex items-center'>
            <Tag text={category} />
            <div className='ml-3 text-gray-500 font-light tracking-wide'>
              {readTime} Minute Read
            </div>
          </div>
          <h1 className='text-3xl md:text-4xl mt-4'>
            {title}
          </h1>
        </div>
      </header>
    </Container>
  )
}


