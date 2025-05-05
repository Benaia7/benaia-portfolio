import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      className="px-4 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m Benaia Banda, a Fullstack Developer and Entrepreneur passionate about building scalable digital products that solve real-world problems.
        I bring together both business insight and technical expertise to develop powerful applications that are clean, fast, and user-focused.
        My journey includes projects like KwikCash, a remittance app for Congo–SA transfers, and a school transport system with live tracking.
      </p>

      <motion.a
        href="/Benaia_Banda_CV.pdf"
        download
        className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Download CV
      </motion.a>
    </motion.div>
  )
}

export default About
