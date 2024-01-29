import { useState, FormEvent } from 'react'
import { TbMail } from "react-icons/tb";

export default function SubscribeForm() {

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
    <div className='w-full border-t border-t-zinc-100 mt-[30px]'>
      <div className='flex items-center gap-[6px] mt-[30px] mb-[8px]'>
        <TbMail />
        <span className='text-[15px]'>
          Subscribe to my newsletter
        </span> 
      </div>
      <form 
        onSubmit={handleSubmit}
        className='flex'
      >
        <input 
          type="email" 
          name="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className='w-full px-[14px] py-[8px] rounded-tl-lg rounded-bl-lg bg-zinc-100'
          placeholder='Your Email'
        />
        <button 
          type="submit"
          className='px-[14px] py-[8px] rounded-tr-lg rounded-br-lg bg-[#000] text-[#fff]'
        >
          Submit
        </button>
      </form>
      <p 
      className='mt-[8px] text-center font-medium antialiased text-[14px]'
        style={{
          color: error ? '#ff3535' : '#0E788A'
        }}
      >
        {message}
      </p>
    </div>
  )
}
