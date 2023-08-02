import Image from 'next/image'
import { urlFor } from '@/sanity/image-builder'

export default function PostImageBlock({ block }) {
  return (
    <div className='mb-[60px] mx-auto max-w-[600px] px-4'>
      <Image
        src={urlFor(block.image).url()}
        width={600}
        height={600}
        className='object-contain rounded-lg'
        alt={block.image.alt}
      />
    </div>
  )
}