import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, WHATSAPP_LINK } from "@/lib/services-data"
import type { LucideIcon } from "lucide-react"

interface Treatment {
  name: string
  price: string
  duration: string
}

interface Service {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  image: string
  heroImage: string
  description: string
  treatments: Treatment[]
  benefits: string[]
}

interface ServiceDetailPageProps {
  service: Service
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  // Get related services (exclude current)
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary text-primary-foreground">
              <service.icon className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white text-balance">
              {service.title}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">{service.shortDescription}</p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book This Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">About This Service</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {service.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery Preview */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Our Work</h3>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} example 1`}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <img
                    src={service.heroImage || "/placeholder.svg"}
                    alt={`${service.title} example 2`}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} example 3`}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar - Pricing */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Pricing & Treatments</h3>

                <div className="space-y-4">
                  {service.treatments.map((treatment) => (
                    <div key={treatment.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-foreground">{treatment.name}</h4>
                        <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
                          {treatment.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {treatment.duration}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prices may vary based on hair length, thickness, and style complexity.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Explore Other Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={relatedService.image || "/placeholder.svg"}
                    alt={relatedService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{relatedService.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
