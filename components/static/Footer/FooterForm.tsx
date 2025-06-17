'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { ContactUsFormSchema } from '@/lib/schema/ContactUs'
import { InputField } from '@/components/shared/InputField'
import { z } from 'zod'

export const FooterForm = () => {
  const [isPending, setIsPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      full_name: '',
      message: '',
      email: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof ContactUsFormSchema>) => {
    console.log(values)
    setIsPending(true)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full mx-auto lg:mx-[unset] flex flex-col lg:justify-start justify-center gap-8 lg:w-[70%] w-full'
      >
        <InputField
          control={form.control}
          name='full_name'
          label='Full Name'
          placeholder='FirstName LastName'
          inputCategory='input'
          inputType='text'
          inputStyle='text-white/60'
          labelStyle='text-white'
        />
        <InputField
          control={form.control}
          name='email'
          label='Email'
          placeholder='Enter your email address'
          inputCategory='input'
          inputType='email'
          inputStyle='text-white/60'
          labelStyle='text-white'
        />
        <InputField
          label='Message'
          control={form.control}
          name='message'
          placeholder='Type here...'
          inputCategory='textArea'
          inputType='text'
          inputStyle='text-white/60'
          labelStyle='text-white'
        />
        <div className='flex flex-col gap-5'>
          <Button
            disabled={isPending}
            className='h-[48px] rounded-[8px] flex items-center justify-center bg-white text-black text-[16px] font-[700] w-full'
          >
            {isPending ? (
              <Loader className='w-5 h-5 text-black animate-spin' />
            ) : (
              'Send message'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
