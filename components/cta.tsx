"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showStores, setShowStores] = useState(false)

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

  const stores = [
    { name: "Addis Ababa Central Market", address: "Merkato, Addis Ababa" },
    { name: "Bole District Store", address: "Bole Road, Addis Ababa" },
    { name: "Piazza Shopping Hub", address: "Piazza, Addis Ababa" },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-22 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 ${isVisible ? "scale-in" : "opacity-0"}`}
      >
        <div>
          <h2 className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">
            Ready to Taste Tradition?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Experience the Power of Rezan Kineto
          </h3>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands discovering the authentic taste of Ethiopian heritage. Limited availability in select regions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 btn-shadow">
            Shop Now
          </button>
          <button
            onClick={() => setShowStores(!showStores)}
            className="px-8 py-4 border border-primary/50 text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 btn-shadow flex items-center justify-center gap-2"
          >
            <MapPin size={18} />
            Find a Store
          </button>
        </div>

        {showStores && (
          <div className="mt-12 pt-8 border-t border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h4 className="text-xl font-semibold mb-6 text-foreground">Available Store Locations in Addis Ababa</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {stores.map((store, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-primary/20 bg-card/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{store.name}</p>
                      <p className="text-sm text-foreground/60 mt-1">{store.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-foreground/50 pt-4">Free delevery on orders over 10000ETB</p>
      </div>
    </section>
  )
}
