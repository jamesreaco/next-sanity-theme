import Content from '@/components/shared/content';

export default function PostContent({ content }) {
  return (
    <div className='max-w-xl mx-auto pt-8 pb-20 text-lg text-gray-700 border-t blog-content'>
      <Content data={content} />
    </div>
  )
}
