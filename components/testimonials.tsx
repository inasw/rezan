"use client"

import { useEffect, useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Abebe Tekle",
      role: "Food Enthusiast",
      content: "Rezan Kineto brought back memories of my childhood in Addis Ababa. The authentic taste and quality are unmatched.",
      rating: 5,
      photo: "/images/boy.png"
    },
    {
      name: "Meaza Hailu",
      role: "Wellness Coach",
      content: "I love the natural ingredients and the energy boost this drink provides. Perfect for my morning routine!",
      rating: 5,
      photo: "/images/lady.png"
    },
    {
      name: "Kassa Mengistu",
      role: "Business Owner",
      content: "Served Rezan Kineto at our restaurant and customers ask for it by name. Exceptional product with great story.",
      rating: 5,
      photo: "/placeholder-user.jpg"
    },
    {
      name: "Almaz Demissie",
      role: "Health Conscious Consumer",
      content: "Finally found a traditional beverage that maintains authenticity while being modern and accessible. Highly recommend!",
      rating: 5,
      photo: "/placeholder-user.jpg"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials-section" className="py-20 px-6 bg-card/50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who've experienced the magic of Rezan Kineto.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full shrink-0 px-4">
                <div className="bg-background/80 backdrop-blur-sm border border-primary/50 rounded-2xl p-8 mx-auto max-w-2xl hover:border-primary/50 transition-all duration-300">
                 
                  <p className="text-foreground mb-8 italic text-lg text-center leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
