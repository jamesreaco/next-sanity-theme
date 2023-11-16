import { FaQuoteLeft } from 'react-icons/fa'

export default function PostQuoteBlock({ data }) {

  const { 
    quote,
    author,
    bgColor, 
    iconColor, 
    textColor 
  } = data

  return (
    <div className='my-[40px] block mx-auto w-full'>
      <div className='flex flex-col justify-center items-center p-12 border bg-grey-200' style={{
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
