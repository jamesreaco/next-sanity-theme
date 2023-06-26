import Image from 'next/image'

export default function BlogCard({ post }) {
  return (
    <article className='pb-8 border-b border-black cursor-pointer group'>
      <Image 
        src=""
        width={600}
        height={300}
        className='bg-black rounded-lg'
      />
      <div className='mt-6 flex items-end justify-between'>
        <h4 className='text-[2.8vw] pr-12 font-normal'>
          {post.title}
        </h4>
        <Image
          src="/images/link-icon.png"
          width={30}
          height={30}
          className='invert-[100%] transition group-hover:rotate-90'
        />
      </div>
    </article>
  )
}
