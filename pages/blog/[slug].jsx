import Layout from '@/components/global/layout'
import React from 'react'
import { getPostBySlug } from '@/sanity/utils'
import { PortableText } from '@portabletext/react';
import Image from 'next/image'

export default function PostPage({ post }) {
  return (
    <Layout>
      <header className='grid'>
        <Image 
          src={post.image}
          width={2000}
          height={2000}
          alt='Thumbnail Image'
          className='rounded-2xl'
        />
        <div className='p-10 flex flex-col items-start justify-start'>
          <div className='mt-5 flex items-center '>
            <h5 className='py-0.5 px-2.5 border-solid border rounded-full'>
              {post.category}
            </h5>
            <div className='ml-3 text-gray-500 font-light tracking-wide'>
              {post.readTime} Minute Read
            </div>
          </div>
          <h1 className='text-4xl mt-4'>
            {post.title}
          </h1>
        </div>
      </header>
      <hr className='mx-10'/>
      <div className='mt-10 px-10 pb-14 text-lg text-gray-700 blog-content'>
        <PortableText value={post.content} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const { slug } = context.params
  const post = await getPostBySlug(slug)

  return {
    props: {
      post: post,
    }
  }
  
}

