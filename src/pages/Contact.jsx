import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const Contact = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🔮 Parallax Glow */}
      <Parallax speed={-10}>
        <div className="absolute bottom-[10%] left-[15%] w-[350px] h-[350px] bg-indigo-500 opacity-10 blur-[150px] rounded-full z-[-1]" />
      </Parallax>

      {/* 📝 Header */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Whether you're an employer, investor, or collaborator — I’d love to hear from you.
        Let’s connect and build something impactful.
      </motion.p>

      {/* 📧 Email & Contact Form */}
      <motion.div
        className="space-y-6 w-full max-w-md text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="mailto:benaiabands@icloud.com"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
        >
          Send Email
        </a>

        {/* 🔗 Optional: Formspree inline form */}
        <form
          action="https://formspree.io/f/mzzrryvq"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  )
}

export default Contact
