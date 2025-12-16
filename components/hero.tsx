"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) * 0.05,
          y: (e.clientY - rect.top - rect.height / 2) * 0.05,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 glow-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="slide-up space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">Awaken the Tradition</h2>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">Rezan Kineto</h1>
            <p className="text-xl text-muted-foreground mt-4 leading-relaxed text-balance">
              A fermented Ethiopian drink crafted with generations of tradition, revitalized for the modern world.
            </p>
          </div>

          <p className="text-base text-foreground/90 max-w-md leading-relaxed">
            Experience the authentic taste of Ethiopian heritage. Bold, energetic, and deeply rooted in centuries-old
            craftsmanship.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-all duration-300 btn-shadow">
              Discover Now
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/20 transition-all duration-300 btn-shadow">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Bottle showcase */}
        <div className="relative flex items-center justify-center">
          <div
            ref={bottleRef}
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            }}
            className="transition-transform duration-100 ease-out"
          >
            <div className="relative w-72 h-96">
              {/* Bottle glow background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-transparent rounded-3xl filter blur-2xl opacity-60" />

              <div className="relative w-full h-full rounded-3xl border border-primary/30 flex items-center justify-center float group hover:shadow-2xl transition-all duration-500 overflow-hidden btn-shadow bg-card/20">
                <Image
                  src="/images/mewded.png"
                  alt="Rezan Kineto Bottle"
                  width={288}
                  height={384}
                  className="object-cover py-3 drop-shadow-2xl w-full h-full"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
