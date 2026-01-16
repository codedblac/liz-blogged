import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/services-data"

export function HomeCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4 text-balance">
          Ready to Transform Your Look?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Book your appointment today and experience the Liz Hairstylist difference. We can&apos;t wait to welcome you
          to our salon.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 gap-2">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
