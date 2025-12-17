// "use client"

// import { useState, useEffect } from "react"

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="text-2xl font-bold text-primary">REZAN</div>
//         <div className="hidden md:flex gap-8">
//           <a href="#about" className="text-sm hover:text-primary transition-colors">
//             About
//           </a>
//           <a href="#story" className="text-sm hover:text-primary transition-colors">
//             Story
//           </a>
//           <a href="#craft" className="text-sm hover:text-primary transition-colors">
//             Craft
//           </a>
//           <a href="#contact" className="text-sm hover:text-primary transition-colors">
//             Contact
//           </a>
//         </div>
//         <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform">
//           Shop Now
//         </button>
//       </nav>
//     </header>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
        <Link href="/" className="text-2xl font-bold text-primary">
          REZAN
        </Link>
        <div className="hidden md:flex gap-8">
          <a href="/#about" className="text-sm hover:text-primary transition-colors">
            About
          </a>
          <a href="/#story" className="text-sm hover:text-primary transition-colors">
            Story
          </a>
          <a href="/#craft" className="text-sm hover:text-primary transition-colors">
            The Craft
          </a>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
          )}
          <Link
            href="/shop"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform btn-shadow"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </header>
  )
}
