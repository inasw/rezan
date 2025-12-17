"use client"

import { useEffect, useRef, useState } from "react"

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-linear-to-b from-card/20 via-background to-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 ${isVisible ? "fade-in-ceremonial" : "opacity-0"}`}>
          <p className="text-whisper text-primary/70 mb-6">The Three Vessels</p>
          <h3 className="text-5xl md:text-6xl text-ceremonial leading-tight text-balance">
            Tradition, Time & Transformation
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              symbol: "◈",
              title: "Ancient Origins",
              subtitle: "The First Vessel",
              description:
                "For centuries, Ethiopian communities have crafted fermented beverages as symbol of strength and celebration. Rezan Kineto honors this sacred tradition.",
            },
            {
              symbol: "◉",
              title: "Time's Alchemy",
              subtitle: "The Second Vessel",
              description:
                "We've brought this ancient craft into the contemporary world, blending time-honored techniques with modern quality standards.",
            },
            {
              symbol: "◊",
              title: "Shared Spirit",
              subtitle: "The Third Vessel",
              description:
                "Today, Rezan Kineto connects people worldwide to Ethiopian culture and authentic taste, creating a bridge between tradition and modernity.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-2xl border border-primary/10 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-4">
                <div className="text-6xl text-primary/60 mb-6 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                  {item.symbol}
                </div>
                <p className="text-whisper text-primary/50 group-hover:text-primary/70 transition-colors">
                  {item.subtitle}
                </p>
                <h4 className="text-2xl text-ceremonial text-foreground mb-4">{item.title}</h4>
                <p className="text-grounded text-foreground/70 leading-relaxed">{item.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary via-accent to-transparent w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
