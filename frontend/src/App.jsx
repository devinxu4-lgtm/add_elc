import { useState, useEffect } from 'react'
import './index.css'
import { Hero } from './components/Hero'
import { FeatureSection } from './components/FeatureSection'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err)
        setMessage('Backend Disconnected')
      })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Navigation Overlay */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-mono text-sm">UA</span>
          </div>
          Universal App
        </div>
        <div className="flex items-center gap-4">
          <span className={`w-2 h-2 rounded-full ${message === 'Backend Disconnected' ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} />
          <span className="text-xs font-mono text-gray-400 hidden md:block">{message}</span>
          <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/5 backdrop-blur-md">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <FeatureSection />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Universal App framework. Built with React & Python.</p>
      </footer>
    </div>
  )
}

export default App
