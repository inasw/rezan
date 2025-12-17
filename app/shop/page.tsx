"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingBubbles from "@/components/floating-bubbles"
import { useState } from "react"

export default function Shop() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const products = [
    {
      id: 1,
      name: "Rezan Kineto Premium 500ml",
      price: 149,
      description: "Classic fermented barley drink in our premium bottle",
      image: "/images/rezan2.png",
    },
    {
      id: 2,
      name: "Rezan Kineto 1L Family Pack",
      price: 279,
      description: "Perfect for sharing with family and friends",
      image: "/images/rezan.png",
    },
    {
      id: 3,
      name: "Rezan Kineto Variety Pack (6 bottles)",
      price: 799,
      description: "Assorted flavors - classic, ginger spice, and honey blend",
      image: "/public/images/untitled-20design-20-281-29.png",
    },
    {
      id: 4,
      name: "Rezan Kineto Gift Box",
      price: 1299,
      description: "Beautifully packaged with 12 premium bottles",
      image: "/public/images/untitled-20design-20-281-29.png",
    },
  ]

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = products.find((p) => p.id === Number.parseInt(id))
      return total + (product?.price || 0) * quantity
    }, 0)
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  }

  const handleCheckout = async () => {
    if (getTotalItems() === 0) return

    const checkoutData = {
      items: Object.entries(cart).map(([id, quantity]) => ({
        productId: Number.parseInt(id),
        quantity,
      })),
      totalAmount: getTotalPrice(),
    }

    try {
      // Redirect to Telebirr payment gateway
      const response = await fetch("/api/telebirr-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      })

      if (response.ok) {
        const data = await response.json()
        window.location.href = data.paymentUrl
      }
    } catch (error) {
      console.error("Checkout error:", error)
    }
  }

  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      <FloatingBubbles />
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Shop <span className="text-primary">Rezan Kineto</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the authentic taste of Ethiopia. Premium quality, delivered to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Products */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="h-64 bg-secondary overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">ETB {product.price}</span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform btn-shadow"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {Object.entries(cart).length === 0 ? (
                    <p className="text-muted-foreground">Your cart is empty</p>
                  ) : (
                    Object.entries(cart).map(([id, quantity]) => {
                      const product = products.find((p) => p.id === Number.parseInt(id))
                      return (
                        <div key={id} className="flex justify-between text-sm pb-2 border-b border-border">
                          <span>
                            {product?.name} <span className="text-muted-foreground">x{quantity}</span>
                          </span>
                          <span className="font-semibold">
                            ETB {((product?.price || 0) * quantity).toLocaleString()}
                          </span>
                        </div>
                      )
                    })
                  )}
                </div>

                <div className="space-y-2 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>ETB {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>ETB 50</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold mt-4 mb-6">
                  <span>Total</span>
                  <span className="text-primary">ETB {(getTotalPrice() + 50).toLocaleString()}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={getTotalItems() === 0}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform btn-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">Payment via Telebirr</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
