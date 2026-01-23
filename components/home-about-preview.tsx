import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Over 10 years of professional experience",
  "Premium quality products only",
  "Personalized styling consultations",
]

export function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/african-hairstylist-working-on-client-hair-salon.jpg"
                  alt="Stylist at work"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img
                  src="/6.jpeg"
                  alt="Salon interior"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/1.jpeg"
                  alt="Happy client"
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6 text-balance">
              Where Beauty Meets Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Liz Hairstylist, your premier destination for natural hair care and nail services in
              Hurlingham, Nairobi. Founded with a passion for enhancing natural beauty, we&apos;ve been transforming
              looks and boosting confidence for over a decade.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
