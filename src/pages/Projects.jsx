import React from 'react'

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <div className="space-y-8">
        {/* Project 1: KwikCash */}
        <div className="bg-white shadow p-6 rounded-lg border">
          <h3 className="text-2xl font-semibold text-green-600">KwikCash – Remittance App</h3>
          <p className="mt-2 text-gray-700">
            A cross-border remittance app allowing users to send money between Congo and South Africa with QR verification, dynamic fees, and multilingual support.
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Built with Django, PostgreSQL, React</li>
            <li>QR scanner, fee logic, printable receipts</li>
            <li>Supports USD & ZAR, with offline mode planned</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://github.com/Benaia7/kwikcash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Add more projects below this block */}
      </div>
    </div>
  )
}

export default Projects
