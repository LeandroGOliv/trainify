import z from 'zod'

export const LoginSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(1),
  remember: z.boolean(),
})

export type LoginSchema = z.infer<typeof LoginSchema>
