import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err)
        setMessage('Error connecting to backend (Is it running?)')
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 sticky top-0 h-screen">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Universal App</h1>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="p-2 rounded bg-blue-50 text-blue-600 font-medium">Dashboard</a>
          <a href="#" className="p-2 rounded hover:bg-gray-100 text-gray-600">Settings</a>
          <a href="#" className="p-2 rounded hover:bg-gray-100 text-gray-600">Profile</a>
        </nav>
      </aside>

      {/* Mobile Header - Visible on mobile only */}
      <header className="md:hidden bg-white p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-blue-600">Universal App</h1>
        <button className="p-2 text-gray-600 border rounded hover:bg-gray-50">☰</button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Status Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Backend Connection</h2>
            <div className="flex items-center space-x-2">
              <span className={`h-3 w-3 rounded-full ${message.includes('Error') ? 'bg-red-500' : 'bg-green-500'}`}></span>
              <p className="text-gray-700 font-mono text-sm bg-gray-50 px-3 py-1 rounded inline-block">
                {message}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Content Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 flex flex-col">
                <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Card Item {item}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">
                  This card adapts to the screen size. On mobile it takes full width, on desktop it sits in a grid.
                </p>
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
