import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold tracking-wide">Frontend V2</h1>
        <button className="bg-white text-indigo-600 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-5">
        
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          Frontend
        </h1>

        <p className="text-xl md:text-2xl bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl animate-pulse mb-6">
          Welcome To Frontend V3
        </p>

        <p className="text-lg max-w-2xl mb-8 text-gray-100">
          This is my first website built using modern technologies like React and Tailwind CSS.
          It is deployed using CI/CD pipelines, making development faster, smoother, and more professional.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore
          </button>
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>

      </div>

      {/* Features Section */}
      <div className="mt-24 grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">React Powered</h2>
          <p>Built with modern React components and clean structure.</p>
        </div>

        <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Tailwind Styling</h2>
          <p>Fast and responsive UI using Tailwind CSS utility classes.</p>
        </div>

        <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">CI/CD Ready</h2>
          <p>Automatically deployed using CI/CD pipelines for real-world workflows.</p>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-black/20">
        <p>© 2026 Frontend V2 | Built by Satyam</p>
      </footer>

    </div>
  )
}