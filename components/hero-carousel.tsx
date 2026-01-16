"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_LINK =
  "https://wa.me/254700000000?text=Hello%20Liz%20Hairstylist%2C%20I%20would%20like%20to%20book%20an%20appointment"

const slides = [
  {
    id: 1,
    headline: "Your Hair. Your Nails. Your Style.",
    subheadline: "Premium Hair & Nail Salon in Hurlingham, Nairobi – Because You Deserve the Best.",
    cta: "Book an Appointment",
    image: "/elegant-african-woman-with-beautiful-natural-hair-.jpg",
  },
  {
    id: 2,
    headline: "Expert Care for Your Natural Beauty",
    subheadline: "Specialized in natural hair care, protective styles, and treatments that nurture your crown.",
    cta: "Book on WhatsApp",
    image: "/african-woman-with-stunning-braids-hairstyle-profe.jpg",
  },
  {
    id: 3,
    headline: "Flawless Braids. Timeless Style.",
    subheadline: "From box braids to cornrows, we create protective styles that last and turn heads.",
    cta: "Book an Appointment",
    image: "/beautiful-intricate-african-braiding-hairstyle-clo.jpg",
  },
  {
    id: 4,
    headline: "Perfect Nails for Every Occasion",
    subheadline: "Manicures, pedicures, and gel nails crafted with precision and care.",
    cta: "Chat with Us",
    image: "/elegant-manicured-nails-african-woman-luxury-nail-.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl pt-20">
              <h1
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 transition-all duration-700 text-balance",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                {slide.headline}
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-white/90 mb-8 leading-relaxed transition-all duration-700 delay-150 text-pretty",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                {slide.subheadline}
              </p>
              <div
                className={cn(
                  "transition-all duration-700 delay-300",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    {slide.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
