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
      number: "01",
      title: "Fermentation",
      icon: Flame,
      description:
        "Traditional fermentation using carefully selected grains and pure spring water, allowing natural cultures to develop the signature taste.",
    },
    {
      number: "02",
      title: "Mixing",
      icon: Clock,
      description:
        "Expert blending of fermented base with secret spice combinations, each batch crafted to achieve the perfect balance of flavors.",
    },
    {
      number: "03",
      title: "Bottling",
      icon: Package,
      description:
        "Careful bottling under strict quality control, ensuring every bottle delivers the authentic Rezan Kineto experience.",
    },
  ]

  return (
    <section id="craft" ref={sectionRef} className="relative py- md:py- bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <p className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">THE CRAFT</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            HOW WE <span className="text-primary">MAKE IT</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Every bottle of Rezan Kineto goes through a meticulous three-step process, combining ancient wisdom with
            modern precision.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-primary/20 bg-card/40 hover:bg-primary/10 transition-all duration-500 hover:scale-110 hover:-translate-y-3 ${
                  isVisible ? "float-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center text-primary mb-6 group-hover:scale-125 transition-transform duration-500">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>

                {/* Step number overlay */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/80 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{step.description}</p>
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
