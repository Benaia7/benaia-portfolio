import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './styles/nprogress.css' // Optional: for custom styling

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [location.pathname])

  return (
    <ParallaxProvider>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ParallaxProvider>
  )
}

export default App
