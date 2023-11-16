import Image from 'next/image'
import { urlFor } from '@/sanity/lib/sanity.image'

export default function PostImageBlock({ data: image }) {
  return (
    <Image
      src={urlFor(image).fit('max').auto('format').url()}
      width={800}
      height={800}
      className='my-[40px] block mx-auto w-full'
    />
  )
}
