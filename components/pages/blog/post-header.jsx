import Image from 'next/image'
import Tag from '@/components/shared/tag'

export default function PostHeader({
  image,
  category,
  readTime,
  title
}) {
  return (
    <header className='mt-8'>
      <Image 
        src={image}
        width={2000}
        height={2000}
        alt='Thumbnail Image'
        className='rounded-2xl'
      />
      <div className='max-w-xl mx-auto my-10'>
        <div className='mt-20 flex items-center'>
          <Tag text={category} />
          <div className='ml-3 text-gray-500 font-light tracking-wide'>
            {readTime} Minute Read
          </div>
        </div>
        <h1 className='text-4xl mt-4'>
          {title}
        </h1>
      </div>
    </header>
  )
}


