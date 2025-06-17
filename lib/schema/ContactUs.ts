import { z } from 'zod'

export const ContactUsFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .min(8, { message: 'Email must be at least 8 characters.' }),
  full_name: z
    .string({
      required_error: 'Full Name field is required.',
    })
    .min(3, { message: 'Full Name must be at least 2 characters.' }),
  message: z
    .string({
      required_error: 'Message field is required.',
    })
    .min(5, { message: 'Message must be at least 5 characters.' }),
})
