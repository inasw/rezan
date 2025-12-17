"use client"

import { useRef, useEffect, useState } from "react"

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py- md:py bg-linear-to-b from-background via-background to-card/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-15 items-center">
          {/* Left image  */}
          <div className={`relative w-full h-96 md:h-full min-h-96 flex items-center justify-center transform -translate-x-4 md:-translate-x-8 ${isVisible ? "scale-in" : "opacity-0"}`}>
            <div className="relative w-full h-full">
              {/* Card glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-transparent rounded-3xl filter blur-2xl opacity-60" />

              {/* Card */}
              <div className="relative w-[95%] h-full my-4 rounded-3xl border border-primary/30 flex items-center justify-center float group hover:shadow-2xl transition-all duration-500 overflow-hidden btn-shadow bg-card/20">
                <img
                  src="/images/rezan.gif"
                  alt="Rezan Kineto preview"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>

              {/* Decorative accents (same as Hero) */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right content */}
          <div className={`space-y-8 ${isVisible ? "slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-whisper text-primary/70">Living Heritage</p>
              <h3 className="text-5xl text-ceremonial leading-tight text-balance">
                Where Grain Becomes Spirit
              </h3>
            </div>

            <p className="text-lg text-grounded text-foreground/75 leading-relaxed">
              Rezan Kineto is not merely a drink. It is a sacred vessel, carrying centuries of Ethiopian wisdom. Through traditional fermentation, we honor the patience of our ancestors who understood that transformation takes time.
            </p>

            <div className="space-y-5 pt-6">
              {[
                { title: "Untouched by Industry", desc: "Pure barley, pure water, pure tradition. No additives interrupt the ancient dialogue." },
                { title: "Time-Honored Ritual", desc: "Each batch follows ceremonies passed down through generations. Patience cannot be rushed." },
                { title: "Living Nourishment", desc: "Fermentation creates life. Probiotics dance, enzymes awaken. Nature's alchemy." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 items-start group cursor-default ${isVisible ? "scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary/30 transition-all duration-500">
                    <span className="text-primary text-base">◉</span>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-500">
                    <h4 className="font-medium text-foreground text-base mb-2">{item.title}</h4>
                    <p className="text-sm text-grounded text-foreground/65">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
