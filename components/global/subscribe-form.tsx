import { cn } from '@/lib/utils';
import { SettingsPayload } from '@/types';
import { useState, FormEvent } from 'react'
import { TbMail } from "react-icons/tb";

interface SubscribeFormProps {
  title: SettingsPayload['subscribeFormTitle']
  placeholder: SettingsPayload['subscribeFormPlaceholder']
}

export default function SubscribeForm(props: SubscribeFormProps) {

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
    <div className='w-full border-t border-t-zinc-100 mt-8'>
      <div className='flex items-center gap-1.5 mt-8'>
        <TbMail />
        <span className='text-sm'>
          {title}
        </span> 
      </div>
      <form 
        onSubmit={handleSubmit}
        className='flex mt-2'
      >
        <input 
          type="email" 
          name="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className='w-full px-3.5 py-2 rounded-tl-lg rounded-bl-lg bg-zinc-100'
          placeholder={placeholder ?? 'Enter your email'}
        />
        <button 
          type="submit"
          className='px-3.5 py-2 rounded-tr-lg rounded-br-lg bg-[#000] text-[#fff]'
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
