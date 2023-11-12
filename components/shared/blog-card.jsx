import Link from 'next/link'
import Image from 'next/image'

// components
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
        <div className='mt-3 flex items-end justify-between'>
          <h3 className='text-[22px] md:text-[28px] pr-12 font-normal '>
            {post.title}
          </h3>
          <Image
            src="/images/link-icon.png"
            width={30}
            height={30}
            className='invert-[100%] w-[30px] h-[20px] object-contain transition md:group-hover:rotate-90'
            alt="Link Icon Image"
          />
        </div>
      </Link>
    </article>
  )
}
