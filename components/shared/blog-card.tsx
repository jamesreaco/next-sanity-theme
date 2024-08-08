import Tag from './tag'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types/documents/post'

export default function BlogCard({ post }: {
  post: Post
}) {

  const { slug, image, category, readTime, title } = post

  return (
    <article>
      <Link 
        href={`/blog/${slug}`} 
        className='h-full flex flex-col items-start justify-between pb-8 border-b border-black cursor-pointer group'
      >
        <Image 
          src={image}
          width={600}
          height={400}
          sizes="(max-width: 640px) 320px, (max-width: 1280px) 584px, (max-width: 1600px) 712px"
          className='w-full h-auto bg-black rounded-lg md:group-hover:scale-[1.01] transition'
          alt={`${title} Thumbnail Image`}
        />
        <div className='flex items-center mt-5'>
          <Tag text={category.title} />
          <span className='ml-3 text-gray-500 text-sm md:text-base font-light tracking-wide antialiased'>
            {readTime} Minute Read
          </span>
        </div>
        <h3 className='mt-3 text-xl md:text-2xl pr-12 font-normal md:group-hover:underline underline-offset-4 decoration-2'>
          {title}
        </h3>
      </Link>
    </article>
  )
}
