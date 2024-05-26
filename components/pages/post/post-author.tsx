import Image from 'next/image'
import { type PostAuthor } from '@/types'
import Flex from '@/components/shared/ui/flex'
import Box from '@/components/shared/ui/box'
import Stack from '@/components/shared/ui/stack'

export default function PostAuthor(props: PostAuthor) {

  const { name, description, image } = props

  return (
    <Flex className='flex-col items-start gap-2.5 pt-16 xl:pt-0 pb-8 border-t xl:border-t-0 xl:border-b'>
      <Image
        src={image}
        width={50}
        height={50}
        alt={`Image of ${name}`}
        className='rounded-full'
      />
      <Box>
        <Stack>
          <div className='text-lg'>
            {name}
          </div>
          <p className='text-base text-gray-600 antialiased'>
            {description}
          </p>
        </Stack>
      </Box>
    </Flex>
  )
}
