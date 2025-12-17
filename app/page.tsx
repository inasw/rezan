"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Story from "@/components/story"
import HowWeMakeIt from "@/components/how-we-make-it"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import FloatingBubbles from "@/components/floating-bubbles"
import Founders from "@/components/founders"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <FloatingBubbles />
      <Header />
      <Hero />
      <About />
      <Story />
      <HowWeMakeIt />
      <Founders/>
      <Testimonials/>
      <CTA />
      <Footer />
    </div>
  )
}
