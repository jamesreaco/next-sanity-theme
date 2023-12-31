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
    <header className='mt-6 md:mt-12'>
      <Container>
        <Image 
          src={image}
          width={2000}
          height={600}
          alt='Thumbnail Image'
          className='h-[250px] md:h-[600px] object-cover'
        />
        <div className='max-w-xl mx-auto mt-8 md:my-10'>
          <div className='md:mt-20 flex items-center'>
            <Tag text={category} />
            <div className='ml-3 text-[15px] md:text-[16px] text-gray-500 font-light tracking-wide'>
              {readTime} Minute Read
            </div>
          </div>
          <h1 className='text-2xl md:text-4xl mt-4'>
            {title}
          </h1>
        </div>
      </Container>
    </header>
  )
}


