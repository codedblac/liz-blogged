import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services, WHATSAPP_LINK } from "@/lib/services-data"
import { Button } from "@/components/ui/button"

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
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

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View Details & Pricing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Not Sure Which Service Is Right for You?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Reach out to us on WhatsApp for a free consultation. We&apos;ll help you choose the perfect service for your
            needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Get a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
