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
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">Our Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-balance">The Story Behind Rezan Kineto</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Ancient Origins",
              description:
                "For centuries, Ethiopian communities have crafted fermented beverages as a symbol of strength and celebration. Rezan Kineto honors this sacred tradition.",
            },
            {
              number: "02",
              title: "Modern Revival",
              description:
                "We've brought this ancient craft into the contemporary world, blending time-honored techniques with modern quality standards.",
            },
            {
              number: "03",
              title: "Global Impact",
              description:
                "Today, Rezan Kineto connects people worldwide to Ethiopian culture and authentic taste, creating a bridge between tradition and modernity.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-primary/10 bg-card/30 hover:bg-card/50 hover:border-primary/10 transition-all duration-500 hover:scale-110 hover:-translate-y-3 ${
                isVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary/80 mb-4 group-hover:text-primary/40 transition-colors">
                  {item.number}
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500" />

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
