"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">REZAN</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-sm hover:text-primary transition-colors">
            About
          </a>
          <a href="#story" className="text-sm hover:text-primary transition-colors">
            Story
          </a>
          <a href="#craft" className="text-sm hover:text-primary transition-colors">
            Craft
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform">
          Shop Now
        </button>
      </nav>
    </header>
  )
}
