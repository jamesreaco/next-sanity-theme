import Image from 'next/image'
import { urlForImage } from '@/sanity/utils/urlForImage'

export default function PortableTextImage({ data }: {
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
