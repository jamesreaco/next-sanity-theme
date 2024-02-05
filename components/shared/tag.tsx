interface TagProps {
  text: string
}

export default function Tag(props: TagProps) {

  const { text } = props

  return (
    <div className='text-[15px] font-medium md:text-[15px] antialiased py-0.5 px-2.5 border-solid border rounded-full'>
      {text}
    </div>
  )
}
