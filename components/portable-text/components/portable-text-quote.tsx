import { Quote } from '@/types/portable-text/quote'
import { FaQuoteLeft } from 'react-icons/fa'

export default function PortableTextQuote({ data }: {
  data: Quote
}) {

  const { quote, author, bgColor, iconColor, textColor } = data

  return (
    <div className='mt-12 mb-10 block mx-auto w-full'>
      <div 
        className='flex flex-col justify-center items-center p-12 border bg-grey-200 rounded-xl' 
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <div>
          <FaQuoteLeft 
            size={20} 
            color={`#${iconColor}`}
          />
        </div>
        <div className='mt-6 text-center'>
          <span 
            className='text-xl md:text-2xl'
            style={{ color: `#${textColor}` }}
          >
            {quote}
          </span>
        </div>
        <div className='mt-4'>
          <span 
            className='antialiased text-center text-white'
            style={{ color: `#${textColor}` }}
          >
            {author}
          </span>
        </div>
      </div>
    </div>
  )
}
