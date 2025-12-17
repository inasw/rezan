import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Rezan Kineto | Ancient Energy, Modern Spirit",
  description:
    "Ethiopian fermented tradition, handed down through generations. Rezan Kineto honors sacred barley fermentation rituals, transforming ancient grain into living spirit. Where ceremony meets sustenance.",
  keywords: "Ethiopian fermented drink, traditional fermentation, Rezan Kineto, barley drink, Ethiopian heritage, ancient beverages, fermented tradition",
  openGraph: {
    title: "Rezan Kineto | Ancient Energy, Modern Spirit",
    description: "Ethiopian fermented tradition, handed down through generations. Where ceremony meets sustenance, where patience becomes spirit.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
