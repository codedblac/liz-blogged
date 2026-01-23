import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/stunning-african-braids-hairstyle-woman.jpg", alt: "Beautiful braided hairstyle" },
  { src: "/elegant-gel-nails-african-woman-manicure.jpg", alt: "Elegant gel nails" },
  { src: "/6.jpeg", alt: "Natural twist out style" },
  { src: "/artistic-nail-art-design-salon.jpg", alt: "Artistic nail art" },
]

export function HomeGalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-card">
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

        {/* Gallery Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
