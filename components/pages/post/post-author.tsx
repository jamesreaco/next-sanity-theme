import Image from 'next/image'
import { cn } from '@/utils/cn'
import { type PostAuthor } from '@/types'

export default function PostAuthor(props: PostAuthor) {

  const { name, description, image } = props

  return (
    <div className='pt-16 xl:pt-0 pb-8 flex flex-col items-start gap-2.5 border-t xl:border-t-0 xl:border-b'>
      <div>
        <Image
          src={image}
          width={50}
          height={50}
          alt={`Image of ${name}`}
          className='rounded-full'
        />
      </div>
      <div>
        <div className='text-lg'>
          {name}
        </div>
        <div className='text-base antialiased text-gray-600'>
          {description}
        </div>
      </div>
    </div>
  )
}
