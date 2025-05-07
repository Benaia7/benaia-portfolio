import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getProjects } from '../lib/getProjects'
import { Github, ExternalLink } from 'lucide-react' // 🔗 Icons (optional)

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      className="relative min-h-screen px-4 py-20 max-w-6xl mx-auto bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[25%] left-[40%] h-[300px] w-[300px] bg-gradient-to-br from-blue-500 to-purple-700 opacity-20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* 🧩 Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects to display yet.</p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="bg-gray-900 border border-gray-700 shadow-lg rounded-xl p-6 transition-transform"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {project.title}
                </h3>
                {project.upcoming && (
                  <span className="ml-4 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/40">
                    Coming Soon
                  </span>
                )}
              </div>

              <p className="mt-2 text-gray-300">{project.description}</p>

              <ul className="mt-4 list-disc list-inside text-gray-400 text-sm">
                {project.tech?.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              {!project.upcoming && (project.github || project.demo) && (
                <div className="mt-4 flex gap-4 items-center text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline transition"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 hover:underline transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  )
}

export default Projects
