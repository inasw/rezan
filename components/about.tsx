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
      className="relative py-20 md:py-32 bg-linear-to-b from-background via-background to-card/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-15 items-center">
          {/* Left image (match Hero card styling) */}
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
          <div className={`space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <div>
              <h2 className="text-lg font-semibold text-primary uppercase tracking-widest mb-2">
                What is Rezan Kineto?
              </h2>
              <h3 className="text-4xl font-bold leading-tight text-balance">Ancient Wisdom Meets Modern Energy</h3>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Rezan Kineto is more than a drink—it&apos;s a connection to Ethiopian heritage. Fermented through
              traditional methods passed down through generations, it embodies the spirit of our ancestors.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { title: "100% Natural Ingredients", desc: "Crafted without artificial additives or preservatives" },
                { title: "Traditional Fermentation", desc: "Centuries-old techniques for authentic flavor" },
                { title: "Energy & Wellness", desc: "Packed with natural nutrients and vitality" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 items-start group cursor-pointer ${isVisible ? "float-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary/40 transition-colors">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/60 mt-1">{item.desc}</p>
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
