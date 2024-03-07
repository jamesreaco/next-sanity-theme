import Image from 'next/image'
import { urlFor } from '@/sanity/lib/sanity.image'

interface PostImageBlockProps {
  data: string
}

export default function PostImageBlock(props: PostImageBlockProps) {

  const { data: image } = props

  return (
    <Image
      src={urlFor(image).fit('max').auto('format').url()}
      width={800}
      height={800}
      className='my-10 block mx-auto w-full rounded-xl'
      alt=""
    />
  )
}
