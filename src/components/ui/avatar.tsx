import { ChevronDown } from 'lucide-react'

export default function Avatar() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-primary/85 flex items-center justify-center">
        <span className=" font-bold text-large">LG</span>
      </div>
      <div className="flex">
        <span>Olá, Leandro</span>
        <ChevronDown
          className="hover:cursor-pointer"
          onClick={() => console.log('user menu')}
        />
      </div>
    </div>
  )
}
