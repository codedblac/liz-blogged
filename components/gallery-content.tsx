"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "/stunning-african-braids-hairstyle-woman.jpg", alt: "Beautiful braided hairstyle", category: "hair" },
  { src: "/elegant-gel-nails-african-woman-manicure.jpg", alt: "Elegant gel nails", category: "nails" },
  { src: "/natural-hair-twist-out-african-woman.jpg", alt: "Natural twist out style", category: "hair" },
  { src: "/artistic-nail-art-design-salon.jpg", alt: "Artistic nail art", category: "nails" },
  { src: "/cornrows-braiding-style-african-woman.jpg", alt: "Cornrows style", category: "hair" },
  { src: "/french-tip-manicure-elegant-nails.jpg", alt: "French tip manicure", category: "nails" },
  { src: "/knotless-braids-beautiful-african-woman.jpg", alt: "Knotless braids", category: "hair" },
  { src: "/colorful-nail-art-african-woman.jpg", alt: "Colorful nail art", category: "nails" },
  { src: "/loc-styling-african-woman-beautiful.jpg", alt: "Styled locs", category: "hair" },
  { src: "/spa-pedicure-feet-relaxing-salon.jpg", alt: "Luxury pedicure", category: "nails" },
  { src: "/passion-twists-hairstyle-african-woman.jpg", alt: "Passion twists", category: "hair" },
  { src: "/acrylic-nails-extension-salon-art.jpg", alt: "Acrylic nail extensions", category: "nails" },
  { src: "/fulani-braids-african-woman-elegant.jpg", alt: "Fulani braids", category: "hair" },
  { src: "/bridal-nails-wedding-elegant-design.jpg", alt: "Bridal nail design", category: "nails" },
  { src: "/silk-press-straight-hair-african-woman.jpg", alt: "Silk press styling", category: "hair" },
  { src: "/ombre-nail-art-trendy-design.jpg", alt: "Ombre nail art", category: "nails" },
]

const categories = ["all", "hair", "nails"]

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
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
              {category === "all" ? "All Work" : category}
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
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
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
