import Image from 'next/image'

export default function BlogRow({ post }) {
  return (
    <article className='pb-8 flex items-center justify-between border-b border-black cursor-pointer group'>
      <h5 className='mt-3 py-0.5 px-2.5 border-solid bg-black text-white border rounded-full'>
        {post.category.title}
      </h5>
      <h4 className='mr-auto ml-6 text-[4vw] font-normal'>
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
