import { Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <nav className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-semibold">React Template</a>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <Code className="w-12 h-12 mb-8 opacity-75" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Minimal React Template
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-gray-300 animate-fade-in animation-delay-200">
          A clean, simple starting point for your next project.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition-colors animate-fade-in animation-delay-400">
          Get Started
        </button>
      </main>
    </div>
  )
}


