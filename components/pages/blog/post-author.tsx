import { PostAuthor } from '@/types'
import Image from 'next/image'

export default function PostAuthor(props: PostAuthor) {

  const { name, description, image } = props

  return (
    <div className='flex flex-col items-start gap-2.5 pt-16 xl:pt-0 pb-8 border-t xl:border-t-0 xl:border-b'>
      <Image
        src={image}
        width={50}
        height={50}
        alt={`Image of ${name}`}
        className='rounded-full'
      />
      <div>
        <div className='text-lg'>
          {name}
        </div>
        <p className='text-base text-gray-600 antialiased'>
          {description}
        </p>
      </div>
    </div>
  )
}
