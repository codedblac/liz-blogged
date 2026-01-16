"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    location: "Hurlingham, Nairobi",
    rating: 5,
    text: "Best natural hair stylist in Nairobi! Liz really understands how to care for natural hair. My hair has never looked better.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Grace Otieno",
    location: "Westlands, Nairobi",
    rating: 5,
    text: "The braiding is always perfect and lasts for weeks. Very professional and welcoming atmosphere. Highly recommend!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Angela Muthoni",
    location: "Kilimani, Nairobi",
    rating: 5,
    text: "My go-to salon for both hair and nails. The attention to detail is amazing and prices are very fair for the quality.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Faith Kamau",
    location: "Lavington, Nairobi",
    rating: 5,
    text: "I've been coming here for 2 years and I'm never disappointed. The gel nails are perfect every single time!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-sm">
                    <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-serif italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
