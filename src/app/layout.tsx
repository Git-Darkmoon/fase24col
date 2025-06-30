import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { CartProvider } from "./(context)/CartContext"
import { AccountProvider } from "./(context)/Account/AccountContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "FASE24COL | Streetwear de lujo y moda urbana",
    template: "%s | FASE24COL",
  },
  description:
    "Descubre la mejor tienda e-commerce de streetwear y moda urbana en Colombia. FASE24COL ofrece ropa exclusiva, lanzamientos limitados y envíos rápidos.",
  keywords: [
    "FASE24COL",
    "streetwear",
    "moda urbana",
    "ropa exclusiva",
    "ecommerce",
    "Colombia",
    "ropa de lujo",
    "tienda online",
    "envíos rápidos",
    "lanzamientos limitados",
  ],
  authors: [{ name: "FASE24COL", url: "https://fase24col.vercel.app/" }],
  creator: "FASE24COL",
  publisher: "FASE24COL",
  metadataBase: new URL("https://fase24col.vercel.app/"),
  openGraph: {
    title: "FASE24COL | Streetwear de lujo y moda urbana",
    description:
      "Explora las últimas tendencias en streetwear y moda urbana. Compra ropa exclusiva y recibe envíos rápidos en toda Colombia.",
    url: "https://fase24col.vercel.app/",
    siteName: "FASE24COL",
    images: [
      {
        url: "/ogFasecol.png",
        width: 1200,
        height: 630,
        alt: "FASE24COL - Streetwear de lujo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fase24col", // Cambia esto si tienes un handle de Twitter
    title: "FASE24COL | Streetwear de lujo y moda urbana",
    description:
      "Compra streetwear y moda urbana exclusiva en FASE24COL. Lanzamientos limitados, envíos rápidos y atención personalizada.",
    images: ["/ogFasecol.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fase24col.vercel.app/",
    languages: {
      es: "https://fase24col.vercel.app/",
    },
  },
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
        <AccountProvider>
          <CartProvider>
            <Navbar />
            <main className="container mx-auto min-h-[calc(100dvh-164px)]">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AccountProvider>
      </body>
    </html>
  )
}
