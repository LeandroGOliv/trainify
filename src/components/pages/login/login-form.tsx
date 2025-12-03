import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LoginSchema } from '@/utils/schemas/login'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
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
import { Eye, EyeOff } from 'lucide-react'

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false)

  const methods = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const { mutate } = useMutation({
    mutationFn: async (form: LoginSchema) => {
      setIsPending(true)
      return // falta requisicao
    },
    onSuccess: () => {
      toast.success('Logado com sucesso!')
    },
    onError: (e: AxiosError) => {
      setIsPending(false)
      toast.error(e.message || 'Usuário e/ou senha inválidos.')
    },
  })

  const navigate = useNavigate()

  function onSubmit(e: LoginSchema) {
    // mutate(e)
    console.log(e)
    navigate({ to: '/' })
  }
  const [isView, setIsView] = useState(false)

  return (
    <div className="h-7/12 w-xl flex flex-col bg-amber-300">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            control={methods.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com.br"
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
            render={() => (
              <FormItem>
                <FormLabel>Senha:</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type={isView ? 'text' : 'password'} id="password" />
                    {isView ? (
                      <Eye
                        className="absolute right-2 top-2 z-10 cursor-pointer text-gray-500"
                        onClick={() => {
                          ;(setIsView(!isView), console.log(isView))
                        }}
                      />
                    ) : (
                      <EyeOff
                        className="absolute right-2 top-2 z-10 cursor-pointer text-gray-500"
                        onClick={() => setIsView(!isView)}
                      />
                    )}
                  </div>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Acessar</Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
