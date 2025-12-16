"use client"

import { useEffect, useState } from "react"

export default function FloatingBubbles() {
  const [barley, setBarley] = useState<Array<{ id: number; left: string; delay: string }>>([])

  useEffect(() => {
    const generatedBarley = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }))
    setBarley(generatedBarley)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {barley.map((particle) => {
        const size = Math.random() * 8 + 4
        const isHorizontalGrain = Math.random() > 0.5
        const rotation = Math.random() * 360

        return (
          <div
            key={particle.id}
            style={{
              left: particle.left,
              bottom: "-50px",
              animation: `barley-float ${Math.random() * 10 + 12}s ease-in infinite`,
              animationDelay: particle.delay,
              opacity: Math.random() * 0.4 + 0.15,
              position: "absolute",
              pointerEvents: "none",
            }}
          >
            <svg
              width={isHorizontalGrain ? size * 2.5 : size}
              height={isHorizontalGrain ? size : size * 2.5}
              viewBox={isHorizontalGrain ? "0 0 25 10" : "0 0 10 25"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: `rotate(${rotation}deg)`,
                filter: "drop-shadow(0 0 3px rgba(255, 149, 0, 0.4))",
              }}
            >
              {isHorizontalGrain ? (
                <path
                  d="M 2 5 Q 6 2 12 2 Q 18 2 23 5 Q 18 8 12 8 Q 6 8 2 5"
                  fill="rgba(139, 90, 43, 0.7)"
                  stroke="rgba(184, 115, 51, 0.8)"
                  strokeWidth="0.5"
                />
              ) : (
                <path
                  d="M 5 2 Q 2 6 2 12 Q 2 18 5 23 Q 8 18 8 12 Q 8 6 5 2"
                  fill="rgba(139, 90, 43, 0.7)"
                  stroke="rgba(184, 115, 51, 0.8)"
                  strokeWidth="0.5"
                />
              )}
            </svg>
          </div>
        )
      })}
    </div>
  )
}
