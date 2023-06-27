import Image from 'next/image'
import Link from 'next/link'

export default function BlogRow({ post }) {
  return (
    <article>
      <Link 
        href={`/blog/${post.slug}`}
        className='pb-8 flex items-center justify-between border-b border-black cursor-pointer group'
      > 
        <div>
          <div className='mt-5 flex items-center '>
            <h5 className='py-0.5 px-2.5 border-solid border rounded-full'>
              {post.category.title}
            </h5>
            <div className='ml-3 text-gray-500 font-light tracking-wide'>
              {post.readTime} Minute Read
            </div>
          </div>
          <h4 className='mr-auto mt-3 text-[4vw] font-normal'>
            {post.title}
          </h4>
        </div>
        <Image
          src="/images/link-icon.png"
          width={40}
          height={40}
          className='invert-[100%] transition group-hover:rotate-90'
        />
      </Link>
    </article>
  )
}
