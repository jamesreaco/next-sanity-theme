interface TagProps {
  text: string
}

export default function Tag(props: TagProps) {

  const { text } = props

  return (
    <span className='py-0.5 px-2.5 text-sm font-medium antialiased border-solid border rounded-full'>
      {text}
    </span>
  )
}
