import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { CartProvider } from "./(context)/CartContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FASE24COL",
  description: "Tienda e-commerce para Fase24Col",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main className="container mx-auto min-h-[calc(100dvh-164px)]">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
