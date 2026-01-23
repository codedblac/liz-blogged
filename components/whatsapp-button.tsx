"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/254722241321?text=Hello%20Liz%20Hairstylist%2C%20I%20would%20like%20to%20book%20an%20appointment"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Book instantly on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
        </div>
      </div>

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

      {/* Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
