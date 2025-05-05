import React from 'react'
import projects from '../data/projectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow p-6 rounded-lg border"
          >
            <h3 className="text-2xl font-semibold text-green-600">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
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
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
