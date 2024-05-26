import { Quote } from '@/types'
import { FaQuoteLeft } from 'react-icons/fa'
import Box from '@/components/shared/ui/box'
import Flex from '@/components/shared/ui/flex'

export default function PostQuoteBlock({ data }: {
  data: Quote
}) {

  const { 
    quote,
    author,
    bgColor, 
    iconColor, 
    textColor 
  } = data

  return (
    <Box className='my-10 block mx-auto w-full'>
      <Flex className='flex-col justify-center items-center p-12 border bg-grey-200 rounded-xl' style={{
        backgroundColor: `#${bgColor}`
      }}>
        <Box>
          <FaQuoteLeft 
            size={20} 
            color={`#${iconColor}`}
          />
        </Box>
        <Box className='mt-3 text-xl md:text-2xl text-center' style={{
          color: `#${textColor}`
        }}>
          {quote}
        </Box>
        <Box className='mt-4 antialiased text-center text-white' style={{
          color: `#${textColor}`
        }}>
          {author}
        </Box>
      </Flex>
    </Box>
  )
}
