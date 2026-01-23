import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/services-data"

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
    icon: Mail,
    title: "Email",
    details: ["info@lizhairstylist.co.ke"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
  },
]

export function ContactContent() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6 text-balance">
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
                src="/luxury-hair-salon-interior-nairobi.jpg"
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

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Do I need to book in advance?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, we recommend booking at least 24-48 hours in advance, especially for braiding services. Walk-ins
                are welcome but subject to availability.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
              <p className="text-muted-foreground text-sm">
                We accept M-Pesa, cash, and card payments. A deposit may be required for certain services.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Do you provide hair products for purchase?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, we stock a range of premium natural hair care products that we use in our services, available for
                purchase.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">What is your cancellation policy?</h4>
              <p className="text-muted-foreground text-sm">
                Please notify us at least 24 hours before your appointment if you need to cancel or reschedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
