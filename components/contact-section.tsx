import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK =
  "https://wa.me/2547722241321?text=Hello%20Liz%20Hairstylist%2C%20I%20would%20like%20to%20book%20an%20appointment"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Hurlingham, Nairobi", "Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 722 241 321"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6 text-balance">
              Visit Our Salon
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to transform your look? Reach out to us on WhatsApp to book your appointment. We&apos;d love to
              welcome you to our salon in Hurlingham, Nairobi.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary h-fit">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-8 gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Button>
          </div>

          {/* Map / Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-full min-h-[400px]">
              <img
                src="/fulani.jpg"
                alt="Liz Hairstylist Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="font-serif text-lg text-foreground mb-2">Because You Deserve the Best</p>
              <p className="text-sm text-muted-foreground">
                Experience premium beauty services in the heart of Nairobi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
