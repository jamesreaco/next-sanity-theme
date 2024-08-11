import { cn } from '@/utils/cn'
import { TbMail } from "react-icons/tb";
import { useState, FormEvent } from 'react'

interface FooterSubscribeFormProps {
  title: string
  placeholder: string
}

export default function FooterSubscribeForm(props: FooterSubscribeFormProps) {

  const { title, placeholder } = props

  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch("/api/convert-kit", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json()

    if (error) {
      
      setEmail("")
      setError(true)
      setMessage('Failed to subscribe.')
      
      return
    }

    setEmail("")
    setMessage('Thanks for subscribing!')
    
  }

  return (
    <div className='pb-8 w-full border-t border-t-zinc-100 mt-8'>
      <div className='flex items-center gap-1.5 mt-8'>
        <TbMail />
        <span className='text-sm tracking-tight'>
          {title}
        </span> 
      </div>
      <form 
        onSubmit={handleSubmit}
        className='flex gap-1 mt-2'
      >
        <input 
          type="email" 
          name="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className='w-full px-3.5 py-2 text-sm rounded-lg bg-zinc-100'
          placeholder={placeholder ?? 'Enter your email'}
        />
        <button 
          type="submit"
          className='px-5 py-2 rounded-lg bg-[#000] text-[#fff]'
        >
          Submit
        </button>
      </form>
      <p 
        className={cn('mt-2 text-center font-medium antialiased text-sm text-[#0E788A]', {
          'text-[#ff3535]': error
        })}
      >
        {message}
      </p>
    </div>
  )
}
