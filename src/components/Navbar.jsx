import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/30 bg-[#0c1b13]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center">
            <span className="text-emerald-400 text-lg font-black">S+</span>
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Subscribfy+</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#plans" className="hover:text-white transition">Plans</a>
          <a href="#cta" className="hover:text-white transition">Get started</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
