import * as React from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  const [isView, setIsView] = React.useState(false)

  const isPassword = type === 'password'

  return (
    <div className="relative w-full">
      <input
        type={isPassword ? (isView ? 'text' : 'password') : type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          isPassword && 'pr-10',
          className,
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setIsView(!isView)}
          className="absolute right-2 top-2 cursor-pointer text-gray-500"
        >
          {isView ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      )}
    </div>
  )
}

export { Input }
