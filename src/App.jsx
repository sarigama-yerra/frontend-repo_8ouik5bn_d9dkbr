import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-10 border-t border-emerald-100 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-900/70">© {new Date().getFullYear()} GreenWeb Agency. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-emerald-900/80 hover:text-emerald-900">Services</a>
            <a href="#work" className="text-emerald-900/80 hover:text-emerald-900">Work</a>
            <a href="#pricing" className="text-emerald-900/80 hover:text-emerald-900">Pricing</a>
            <a href="#contact" className="text-emerald-900/80 hover:text-emerald-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
