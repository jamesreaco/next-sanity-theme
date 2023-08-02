import { FaQuoteLeft } from 'react-icons/fa'

export default function PostQuoteBlock({ block }) {

  const { 
    quote,
    author,
    bgColor, 
    iconColor, 
    textColor 
  } = block

  return (
    <div className='mb-[60px] mx-auto max-w-[600px] px-4'>
      <div className='flex flex-col justify-center items-center p-12 border rounded-lg bg-grey-200' style={{
        backgroundColor: `#${bgColor}`
      }}>
        <div>
          <FaQuoteLeft 
            size={20} 
            color={`#${iconColor}`}
          />
        </div>
        <div className='mt-3 text-2xl text-center' style={{
          color: `#${textColor}`
        }}>
          {quote}
        </div>
        <div className='mt-4 antialiased text-center text-white' style={{
          color: `#${textColor}`
        }}>
          {author}
        </div>
      </div>
    </div>
  )
}
