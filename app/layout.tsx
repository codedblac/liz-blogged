import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Liz Hairstylist | Premium Hair & Nail Salon in Nairobi",
  description:
    "Your Hair. Your Nails. Your Style. Premium Hair & Nail Salon in Hurlingham, Nairobi – Because You Deserve the Best.",
  keywords: ["hairstylist", "nail salon", "Nairobi", "Hurlingham", "natural hair", "braiding", "manicure", "pedicure"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
