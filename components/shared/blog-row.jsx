import Image from 'next/image'

export default function BlogRow({ post }) {
  return (
    <article className='pb-8 flex items-center justify-between border-b border-black cursor-pointer group'>
      <h4 className='text-[4vw] font-normal'>
        {post.title}
      </h4>
      <Image
        src="/images/link-icon.png"
        width={40}
        height={40}
        className='invert-[100%] transition group-hover:rotate-90'
      />
    </article>
  )
}
