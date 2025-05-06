import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { Parallax } from 'react-scroll-parallax'

const Home = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🔁 Parallax Floating Glow */}
      <Parallax speed={-20}>
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-500 opacity-[0.08] blur-[150px] rounded-full pointer-events-none z-[-1]" />
      </Parallax>

      {/* ✨ Static Soft Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[40%] h-[400px] w-[400px] bg-gradient-to-br from-blue-500 via-purple-500 to-transparent opacity-20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-120px] right-[30%] h-[300px] w-[300px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-transparent opacity-20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* 🪩 Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Benaia Banda
      </motion.h1>

      {/* 🚀 Punchy Intro */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I’m not just a developer — I’m a builder of ideas, ventures, and real-world solutions. I mix code, creativity, and business thinking to launch things that matter. 
        <br />
        <span className="text-blue-400 font-semibold">
          <Typewriter
            words={['Fullstack Developer.', 'Entrepreneur.', 'Builder of Digital Solutions.']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </motion.p>

      {/* 👇 CTA */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
        >
          See My Work
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default Home
