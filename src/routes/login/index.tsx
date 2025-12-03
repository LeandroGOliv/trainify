import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/pages/login/login-form'
export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <LoginForm />
    </div>
  )
}
