"use client"
import { z } from 'zod';
import { cn } from '@/utils/cn'
import { TbMail } from "react-icons/tb";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface SubscribeFormProps {
  title: string
  placeholder: string
}

export default function SubscribeForm(props: SubscribeFormProps) {

  const { title, placeholder } = props

  return (
    <div className='mt-8 w-full border-t border-t-zinc-100'>
      <div className='flex items-center gap-1.5 mt-8'>
        <TbMail />
        <span className='text-sm tracking-tight'>
          {title}
        </span> 
      </div>
      <Form placeholder={placeholder}/>
    </div>
  )
}

const subscribeFormSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type SubscribeFormData = z.infer<typeof subscribeFormSchema>;

function Form({ placeholder }: { placeholder: string }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { 
      errors, 
      isSubmitting, 
      isSubmitSuccessful 
    },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeFormSchema),
  })

  async function onSubmit(data: SubscribeFormData) {

    const res = await fetch("/api/convert-kit", {
      body: JSON.stringify({ email: data.email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    
    const response = await res.json()
    if (response.status === 200) { reset() }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex gap-1.5 mt-2'
    >
      <div className='relative'>
        <input
          id="email"
          {...register('email')}
          className={cn('w-full h-10 px-3.5 text-sm rounded-lg bg-zinc-100', {
            'border-red-400': errors.email
          })}
          placeholder={placeholder ?? 'Enter your email'}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'emailError' : undefined}
        />
        {errors.email && (
          <ErrorMessage 
            id="emailError" 
            message={errors.email.message} 
          />
        )}
        {isSubmitSuccessful && (
          <div className="absolute -bottom-7 left-0 text-sm text-green-700">
            Thanks for subscribing!
          </div>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting} 
          className="px-5 h-10 rounded-lg bg-[#000] text-[#fff]"
        >
          {isSubmitting ? "Please Wait..." : "Subscribe"}
        </button>
        {errors.root && (
          <ErrorMessage 
            id="rootError" 
            message={errors.root.message} 
          />
        )}
      </div>
    </form>
  )
}

function ErrorMessage({ id, message }: {
  id: string
  message?: string
}) {
  return (
    <div id={id} className="text-red-400 text-sm mt-2">
      {message}
    </div>
  )
}