"use client"

import { useEffect, useState } from "react"

export default function Founders() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("founders-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const founders = [
    {
      name: "Fozia Dawud",
      title: "CEO & Co-Founder",
      description:
        "Fozia brings decades of experience in traditional Ethiopian beverages, blending ancestral knowledge with modern innovation to create Rezan Kineto.",
      image: "/images/lady.png",
    },
    {
      name: "Seid Ahmed",
      title: "CFO & Co-Founder",
      description:
        "Seid leads our financial strategy and operational excellence, ensuring sustainable growth while maintaining our commitment to quality and authenticity.",
      image: "/images/boy.png",
    },
  ]

  return (
    <section id="founders-section" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Founders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries behind Rezan Kineto who are dedicated to bringing authentic Ethiopian heritage to the
            world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden bg-card border border-border transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-96 overflow-hidden bg-secondary">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                <p className="text-primary font-semibold mb-4">{founder.title}</p>
                <p className="text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
