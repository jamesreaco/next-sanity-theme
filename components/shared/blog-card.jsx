import Link from 'next/link'
import Image from 'next/image'
import Tag from './tag'

export default function BlogCard({ post }) {
  return (
    <article>
      <Link 
        href={`blog/${post.slug}`} 
        className='h-full flex flex-col items-start justify-between pb-8 border-b border-black cursor-pointer group'
      >
        <Image 
          src={post.image}
          width={600}
          height={400}
          sizes="(max-width: 640px) 320px, (max-width: 1280px) 584px, (max-width: 1600px) 712px"
          className='w-full h-auto bg-black md:group-hover:scale-[1.01] transition'
          alt={`${post.title} Thumbnail Image`}
        />
        <div className='mt-5 flex items-center'>
          <Tag text={post.category.title} />
          <div className='ml-3 text-gray-500 text-[15px] md:text-[16px] font-light tracking-wide antialiased'>
            {post.readTime} Minute Read
          </div>
        </div>
        <h3 className='mt-3 text-[22px] md:text-[28px] pr-12 font-normal md:group-hover:underline underline-offset-4 decoration-[2px]'>
          {post.title}
        </h3>
      </Link>
    </article>
  )
}
