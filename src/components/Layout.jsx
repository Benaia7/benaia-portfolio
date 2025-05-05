import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Benaia Banda</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:underline">Home</Link>
          <Link to="/about" className="text-gray-700 hover:underline">About</Link>
          <Link to="/projects" className="text-gray-700 hover:underline">Projects</Link>
          <Link to="/contact" className="text-gray-700 hover:underline">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        © {new Date().getFullYear()} Benaia Banda
      </footer>
    </div>
  )
}

export default Layout
