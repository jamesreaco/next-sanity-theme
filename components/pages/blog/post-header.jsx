import Image from 'next/image'

export default function PostHeader({
  image,
  category,
  readTime,
  title
}) {
  return (
    <header className='grid mt-8'>
      <Image 
        src={image}
        width={2000}
        height={2000}
        alt='Thumbnail Image'
        className='rounded-2xl'
      />
      <div className='p-10 flex flex-col items-start justify-start'>
        <div className='mt-5 flex items-center '>
          <h5 className='py-0.5 px-2.5 border-solid border rounded-full'>
            {category}
          </h5>
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
