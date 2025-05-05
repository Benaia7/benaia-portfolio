import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p>I’m Benaia Banda, a fullstack developer and entrepreneur, focused on building solutions that matter.</p>

      {/* Download CV Button */}
      <a
        href="/Benaia_Banda_CV.pdf"
        download
        className="mt-4 inline-block bg-gray-800 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
      >
        Download CV
      </a>
    </motion.div>
  )
}

export default About
