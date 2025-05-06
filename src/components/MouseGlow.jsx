import { useEffect } from 'react'

const MouseGlow = () => {
  useEffect(() => {
    const glow = document.createElement('div')
    glow.className =
      'fixed top-0 left-0 w-32 h-32 bg-blue-500 rounded-full pointer-events-none mix-blend-screen opacity-20 blur-3xl z-[9999] transition-transform duration-50'

    // Add smooth custom transition (for responsive feel)
    glow.style.transition = 'transform 0.05s ease-out'

    document.body.appendChild(glow)

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e
      glow.style.transform = `translate(${x - 64}px, ${y - 64}px)` // Center the glow
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(glow)
    }
  }, [])

  return null
}

export default MouseGlow
