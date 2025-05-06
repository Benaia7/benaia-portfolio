import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MouseGlow from './MouseGlow'

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // 🌓 Dark Mode Effect
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // 🎯 Parallax Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 overflow-hidden">
      {/* ✨ Mouse Trail Effect */}
      <MouseGlow />

      {/* 🌊 Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-black animate-gradientBackground" />

      {/* 🧭 Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-black/70 border-b border-gray-200/30 dark:border-gray-800/30 shadow-md p-4 flex justify-between items-center px-6 transition-colors duration-300">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo-bb.png"
            alt="Benaia Banda Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>

        <nav className="space-x-4 flex items-center text-sm font-medium">
          <Link to="/" className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
          <Link to="/projects" className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</Link>
          <Link to="/contact" className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link>

          {/* 🌗 Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white shadow-sm border border-gray-300 dark:border-gray-700 transition-all"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* 📄 Page Content */}
      <main className="flex-grow pt-24 px-6">{children}</main>

      {/* 🔚 Footer */}
      <footer className="bg-black/80 text-white text-center py-6 text-sm relative overflow-hidden">
        {/* ✨ Subtle animated background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[300px] h-[300px] bg-gradient-to-t from-purple-700 via-blue-500 to-transparent opacity-20 blur-3xl animate-pulse" />
        </div>

        {/* ⚡ Footer Content */}
        <div className="relative z-10">
          <p>© {new Date().getFullYear()} Benaia Banda</p>
          <a
            href="https://www.linkedin.com/in/benaia-banda-113b37245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors block mt-1"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>

    </div>
  )
}

export default Layout
