import React from 'react'

const ParallaxLayer = ({ speed = 0.3, children }) => {
  return (
    <div
      className="absolute inset-0 -z-10 will-change-transform"
      style={{
        transform: `translateY(calc(var(--scroll-y, 0px) * ${speed}))`,
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxLayer
