"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/stunning-african-braids-hairstyle-woman.jpg",
    alt: "Beautiful braided hairstyle",
    category: "hair",
  },
  {
    src: "/elegant-gel-nails-african-woman-manicure.jpg",
    alt: "Elegant gel nails",
    category: "nails",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Natural twist out style",
    category: "hair",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Artistic nail art",
    category: "nails",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Styled locs",
    category: "hair",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Luxury pedicure",
    category: "nails",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Intricate cornrows",
    category: "hair",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "French tip manicure",
    category: "nails",
  },
]

const categories = ["all", "hair", "nails"]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-4 text-balance">
            Gallery of Beauty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse through our collection of stunning transformations and let our work speak for itself.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
