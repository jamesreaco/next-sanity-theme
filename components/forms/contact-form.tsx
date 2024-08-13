"use client"
import { z } from 'zod';
import { cn } from '@/utils/cn'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { 
      errors, 
      isSubmitting, 
      isSubmitSuccessful 
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })
  
  async function onSubmit(data: ContactFormData) {

    const res = await fetch("/api/convert-kit", {
      body: JSON.stringify({ 
        name: data.name,
        email: data.email,
        message: data.message,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    
    const response = await res.json()
    if (response.status === 200) { reset() }
  }
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-6 md:px-8 md:py-8 md:border rounded-lg md:bg-[#f9f9f7]"
    >
      <div className='grid xl:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <label
            htmlFor="name"
            className="text-gray-900 font-normal"
          >
            Your Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register('name')}
            className={cn('mt-3 w-full h-12 px-3.5 text-base border rounded-lg bg-white', {
              'border-red-400': errors.name
            })}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'nameError' : undefined}
          />
          {errors.name && (
            <ErrorMessage 
              id="nameError" 
              message={errors.name.message} 
            />
          )}
        </div>
        <div className='space-y-2'>
          <label
            htmlFor="email"
            className="text-gray-900 font-normal"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            {...register('email')}
            className={cn('w-full h-12 px-3.5 text-base border rounded-lg bg-white', {
              'border-red-400': errors.email
            })}
            placeholder="janedoe@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'emailError' : undefined}
          />
          {errors.email && (
            <ErrorMessage 
              id="emailError" 
              message={errors.email.message} 
            />
          )}
        </div>
      </div>
      <div className='space-y-2'>
        <label
          htmlFor="message"
          className="text-gray-900 font-normal"
        >
          Your Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          className={cn('w-full px-5 py-4 text-base border rounded-lg bg-white', {
            'border-red-500': errors.message
          })}
          rows={10}
          placeholder='Message'
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'messageError' : undefined}
        />
        {errors.message && (
          <ErrorMessage 
            id="messageError" 
            message={errors.message.message} 
          />
        )}
      </div>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1.5'>
            {!isSubmitSuccessful && (
              <>
                <div className="text-red-500">
                  *
                </div> 
                <div className='-mt-1 text-sm font-medium antialiased tracking-tight'>
                  Required Field
                </div>
              </>
            )}
          </div>
          <div className='flex gap-6'>
            {isSubmitSuccessful && (
              <div className="mt-3 text-sm text-green-700">
                Message Sent!
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting} 
              className="px-5 h-12 rounded-lg bg-[#000] text-[#fff]"
            >
              {isSubmitting ? "Please Wait..." : "Send Message"}
            </button>
          </div>

        </div>
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