import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"

export function HomeServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-card">
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

        {/* Services Grid - Links to individual service pages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>

                {/* View Details */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
