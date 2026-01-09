import { ThemeModeToggle } from '../theme-mode-toggle'
import Avatar from '../ui/avatar'
import { SidebarTrigger } from '../ui/sidebar'

export default function AppHeader() {
  return (
    <header className="w-dvw h-14 flex bg-secondary z-50 justify-between items-center px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-xl font-bold bg-linear-to-r from-primary to-primary/25 text-transparent bg-clip-text">
          Trainify
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeModeToggle />
        <Avatar />
      </div>
    </header>
  )
}
