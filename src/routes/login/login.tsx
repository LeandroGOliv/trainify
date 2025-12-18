import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/pages/login/login-form'
export const Route = createFileRoute('/login/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center text-center">
      <div>
        <h1 className="text-7xl font-bold bg-linear-to-r from-primary to-primary/25 text-transparent bg-clip-text mb-8">
          Trainify
        </h1>
        <LoginForm />
      </div>
    </div>
  )
}
