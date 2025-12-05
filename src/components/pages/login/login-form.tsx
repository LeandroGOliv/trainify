import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LoginSchema } from '@/utils/schemas/login'
// import { useMutation } from '@tanstack/react-query'
// import type { AxiosError } from 'axios'
import { useNavigate } from '@tanstack/react-router'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const LoginForm = () => {
  const [isPending, _setIsPending] = useState(false)

  const methods = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  // const { mutate } = useMutation({
  //   mutationFn: async (form: LoginSchema) => {
  //     setIsPending(true)
  //     return // falta requisicao
  //   },
  //   onSuccess: () => {
  //     toast.success('Logado com sucesso!')
  //   },
  //   onError: (e: AxiosError) => {
  //     setIsPending(false)
  //     toast.error(e.message || 'Usuário e/ou senha inválidos.')
  //   },
  // })

  const navigate = useNavigate()

  function onSubmit(e: LoginSchema) {
    // mutate(e)
    console.log(e)
    toast.success('Logado com sucesso!')
    navigate({ to: '/' })
  }

  return (
    <div className="h-7/12 w-xl flex flex-col">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com.br"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha:</FormLabel>
                <FormControl>
                  <Input type="password" id="password" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="remember"
            render={({ field: { onChange, value } }) => (
              <FormItem className="flex">
                <FormLabel>Lembrar-me:</FormLabel>
                <FormControl>
                  <Checkbox
                    id="remember"
                    onCheckedChange={onChange}
                    checked={value}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" loading={isPending}>
            Acessar
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
