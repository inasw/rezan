"use client"

import { useEffect, useRef, useState } from "react"
import { Flame, Clock, Package } from "lucide-react"

export default function HowWeMakeIt() {
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

  const steps = [
    {
      symbol: "◈",
      title: "Awakening",
      subtitle: "First Stage",
      icon: Flame,
      description:
        "Barley meets water. Time begins its slow work. Natural cultures awaken, transforming grain into something alive. No rush, no force. Only patience.",
    },
    {
      symbol: "◉",
      title: "Deepening",
      subtitle: "Second Stage",
      icon: Clock,
      description:
        "Ancient spices join the dance. Each ingredient chosen through generations of wisdom. Flavors merge, deepen, become whole. The wait continues.",
    },
    {
      symbol: "◊",
      title: "Blessing",
      subtitle: "Third Stage",
      icon: Package,
      description:
        "With ceremony, we seal each vessel. What was grain is now spirit. What was separate is now unified. The tradition passes forward.",
    },
  ]

  return (
    <section id="craft" ref={sectionRef} className="relative py- md:py- bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "fade-in-ceremonial" : "opacity-0"}`}>
          <p className="text-whisper text-primary/70 mb-6">The Sacred Process</p>
          <h2 className="text-5xl md:text-6xl text-ceremonial leading-tight text-balance mb-6">
            Three Stages of <span className="text-primary">Becoming</span>
          </h2>
          <p className="text-grounded text-foreground/70 mt-8 max-w-2xl mx-auto text-lg">
            Each bottle follows an ancient path. From raw grain to living spirit, transformation unfolds through patience, care, and reverence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`group relative p-10 rounded-2xl border border-primary/10 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 flex items-center justify-center text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-5xl text-primary/50 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-500">
                      {step.symbol}
                    </div>
                  </div>

                  <div>
                    <p className="text-whisper text-primary/50 group-hover:text-primary/70 mb-2 transition-colors">
                      {step.subtitle}
                    </p>
                    <h3 className="text-3xl text-ceremonial text-foreground mb-4">{step.title}</h3>
                  </div>

                  <p className="text-grounded text-foreground/70 leading-relaxed">{step.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary via-accent to-transparent w-0 group-hover:w-full transition-all duration-700" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
