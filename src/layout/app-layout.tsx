import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '../components/layout/sidebar'
import { Outlet } from '@tanstack/react-router'
import AppHeader from '../components/layout/header'

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex flex-col">
        <AppHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-2">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
