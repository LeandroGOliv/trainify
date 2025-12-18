import { ThemeModeToggle } from '../theme-mode-toggle'
import { SidebarTrigger } from '../ui/sidebar'

export default function AppHeader() {
  return (
    <header className="w-dvw h-14 flex border-b-2 border-sidebar-ring bg-secondary z-50">
      <SidebarTrigger />
      <h1>Trainify</h1>
      <ThemeModeToggle />
      <span>avatar</span>
    </header>
  )
}
