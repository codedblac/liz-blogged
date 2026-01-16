"use client"

import { Scissors, Sparkles, Heart, Palette, Crown, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_LINK =
  "https://wa.me/254700000000?text=Hello%20Liz%20Hairstylist%2C%20I%20would%20like%20to%20book%20an%20appointment"

const services = [
  {
    icon: Crown,
    title: "Natural Hair Care",
    description: "Expert care for your natural crown with moisturizing treatments, styling, and maintenance.",
    image: "/natural-african-hair-care-treatment-salon.jpg",
  },
  {
    icon: Scissors,
    title: "Braiding & Protective Styles",
    description: "Box braids, cornrows, twists, and locs crafted with precision for lasting beauty.",
    image: "/african-braiding-protective-styles-salon.jpg",
  },
  {
    icon: Sparkles,
    title: "Hair Treatment & Styling",
    description: "Deep conditioning, protein treatments, and professional styling for all occasions.",
    image: "/hair-treatment-styling-salon-professional.jpg",
  },
  {
    icon: Palette,
    title: "Nail Care & Manicure",
    description: "Classic and luxury manicures with premium polishes and nail art options.",
    image: "/luxury-manicure-nail-care-salon.jpg",
  },
  {
    icon: Heart,
    title: "Pedicure & Gel Nails",
    description: "Relaxing pedicures and long-lasting gel applications for beautiful hands and feet.",
    image: "/pedicure-gel-nails-spa-treatment.jpg",
  },
  {
    icon: Star,
    title: "Bridal & Special Events",
    description: "Complete beauty packages for weddings, graduations, and special celebrations.",
    image: "/bridal-hair-makeup-african-woman-elegant.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-4 text-balance">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From natural hair care to stunning nail designs, we provide comprehensive beauty services tailored to your
            unique style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute top-4 left-4 p-3 rounded-full bg-primary/90 text-primary-foreground">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Hover CTA */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium text-primary",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  )}
                >
                  Book on WhatsApp
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
