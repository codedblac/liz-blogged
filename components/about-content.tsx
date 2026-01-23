import { CheckCircle, Award, Users, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/services-data"

const highlights = [
  "Over 5 years of professional experience",
  "Premium quality products only",
  "Personalized styling consultations",
  "Welcoming and relaxing atmosphere",
  "Competitive and transparent pricing",
  "Trained and certified stylists",
]

const stats = [
  { icon: Users, value: "2,000+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Heart, value: "100%", label: "Satisfaction Rate" },
  { icon: Clock, value: "6", label: "Days a Week" },
]

export function AboutContent() {
  return (
    <>
      {/* Main About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/5.jpeg"
                    alt="Stylist at work"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <img
                    src="/african-braiding-protective-styles-salon.jpg"
                    alt="Salon interior"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src="/7.jpeg"
                    alt="Happy client"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6 text-balance">
                Where Beauty Meets Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to Liz Hairstylist, your premier destination for natural hair care and nail services in
                Hurlingham, Nairobi. Founded with a passion for enhancing natural beauty, we&apos;ve been transforming
                looks and boosting confidence for over a decade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey began with a simple belief: every woman deserves to feel beautiful in her own skin. Today,
                that belief drives everything we do, from the products we use to the personalized attention we give each
                client.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of skilled stylists combines traditional techniques with modern trends to deliver exceptional
                results. We believe every client deserves personalized attention, which is why we take the time to
                understand your unique style and preferences.
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional hair and nail services that celebrate and enhance natural beauty, while creating
                a welcoming space where every client feels valued, pampered, and confident.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Nairobi&apos;s most trusted salon for natural hair care and nail services, known for our
                expertise, quality, and the transformative experiences we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
