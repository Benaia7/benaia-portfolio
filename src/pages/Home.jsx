import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-white to-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Benaia Banda
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Fullstack Developer. Entrepreneur. Builder of ideas that grow and solutions that matter.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          See My Work
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default Home
