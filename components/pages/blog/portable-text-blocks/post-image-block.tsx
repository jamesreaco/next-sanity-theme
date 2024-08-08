import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/sanity.image'

export default function PostImageBlock({ data }: {
  data: string
}) {

  const image = data

  return (
    <Image
      src={urlForImage(image).url()}
      width={800}
      height={800}
      className='my-10 block mx-auto w-full rounded-xl'
      alt=""
    />
  )
}
