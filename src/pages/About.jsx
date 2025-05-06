import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Glow */}
      <Parallax speed={-15}>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500 opacity-10 blur-[150px] rounded-full z-[-1]" />
      </Parallax>

      {/* Layout container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">

        {/* 👤 Image */}
        <motion.img
          src="/profile.jpeg"
          alt="Benaia Banda"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Text Content */}
        <motion.div
          className="space-y-6 text-left text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>

          <p>
            I’m not just a developer — I’m a strategist, maker, and entrepreneur. I started with a love
            for code, but quickly realized that writing software was just the beginning. I build things
            that solve real problems, scale with intention, and carry business value.
          </p>

          <p>
            As a fullstack developer, I specialize in React, Django, and PostgreSQL — crafting everything
            from MVPs to polished products. But I go further: blending logic, design, and human behavior
            to create experiences that feel intuitive and impactful.
          </p>

          <p>
            I’ve created and contributed to diverse ventures: <strong>KwikCash</strong>, school transport platforms,
            cleaning services, funeral tech ventures, and more. Some are shipped. Others are in stealth. All are bold.
          </p>

          <p>
            I believe in launching fast, iterating with purpose, and never losing sight of the user.
            Every line of code is backed by vision.
          </p>

          <p className="italic text-blue-400">
            “Ideas that grow. Solutions that matter. A future reimagined.”
          </p>

          {/* 📎 CV Button */}
          <a
            href="/Benaia_Banda_CV.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Download My CV
          </a>

          {/* 💌 CTA */}
          <div className="pt-6">
            <p className="text-lg font-medium">Got an idea? Let’s build it together.</p>
            <Link
              to="/contact"
              className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-md font-semibold transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>

  )
}

export default About
