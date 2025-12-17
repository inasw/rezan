"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingBubbles from "@/components/floating-bubbles"
import { useState } from "react"
import { MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const stores = [
    {
      name: "Downtown Addis",
      address: "Addis Ababa Trade Center, Addis Ababa",
      coords: "9.0265,38.7469",
      phone: "+251 11 123 4567",
    },
    {
      name: "Piazza Store",
      address: "Piazza, Addis Ababa",
      coords: "9.0412,38.7521",
      phone: "+251 11 234 5678",
    },
    {
      name: "Bole Avenue",
      address: "Bole Avenue, Addis Ababa",
      coords: "8.988,38.8057",
      phone: "+251 11 345 6789",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      <FloatingBubbles />
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We'd love to hear from you. Reach out with any questions or feedback about Rezan Kineto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg text-primary">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform btn-shadow"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden h-[500px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6770814256597!2d38.7469!3d9.0265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3d7d7d7d7%3A0x1!2zOcKwMDEnNTkuNSJOIDM4wrA0NCc0NC4xIkU!5e0!3m2!1sen!2set!4v1234567890"
              />
            </div>
          </div>

          {/* Store Locations */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Stores in Addis Ababa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {stores.map((store, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors hover:scale-105 hover:-translate-y-2 duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-primary">{store.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{store.address}</p>
                  <p className="text-sm text-primary font-medium">{store.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
