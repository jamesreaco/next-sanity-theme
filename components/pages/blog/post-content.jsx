import { PortableText } from '@portabletext/react';

export default function PostContent({ content }) {
  return (
    <div className='pt-10 mx-10 pb-14 text-lg text-gray-700 border-t blog-content'>
      <PortableText value={content} />
    </div>
  )
}
