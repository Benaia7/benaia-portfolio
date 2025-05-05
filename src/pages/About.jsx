import React from 'react'

const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p>I’m Benaia Banda, a fullstack developer and entrepreneur...</p>

      {/* Download CV Button */}
      <a
        href="/Benaia_Banda_CV.pdf"
        download
        className="mt-4 inline-block bg-gray-800 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
      >
        Download CV
      </a>
    </div>
  )
}

export default About
