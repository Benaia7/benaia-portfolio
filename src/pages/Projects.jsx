import React from 'react'
import projects from '../data/projectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section
      className="relative min-h-screen px-4 py-20 max-w-5xl mx-auto bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[25%] left-[40%] h-[300px] w-[300px] bg-gradient-to-br from-blue-500 to-purple-700 opacity-20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* 🧩 Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
        Projects
      </h2>

      {/* 🛠️ Project Cards */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 shadow-lg rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>

            <ul className="mt-4 list-disc list-inside text-gray-400 text-sm">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>

            <div className="mt-4 space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-300 hover:underline transition"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-400 hover:text-purple-300 hover:underline transition"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
