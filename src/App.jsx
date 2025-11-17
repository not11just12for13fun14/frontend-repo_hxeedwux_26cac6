import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a1711]">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-emerald-900/30 bg-[#0c1b13]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-emerald-100/60">
          © {new Date().getFullYear()} Subscribfy+. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
