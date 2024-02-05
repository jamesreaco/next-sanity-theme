import Image from 'next/image'

interface PostAuthorProps {
  name: string
  description: string
  image: string
}

export default function PostAuthor(props: PostAuthorProps) {

  const { name, description, image } = props

  return (
    <div className='flex flex-col items-start gap-[10px] pt-[60px] xl:pt-0 pb-[30px] border-t xl:border-t-[0px] xl:border-b'>
      <Image
        src={image}
        width={50}
        height={50}
        alt={`Image of ${name}`}
        className='rounded-full'
      />
      <div>
        <div className='text-[18px]'>
          {name}
        </div>
        <p className='text-[14px] md:text-[16px] text-base text-gray-600 antialiased'>
          {description}
        </p>
      </div>
    </div>
  )
}
