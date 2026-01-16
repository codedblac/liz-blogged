import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/services-data"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  showCta?: boolean
}

export function PageHero({ title, subtitle, backgroundImage, showCta = false }: PageHeroProps) {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-foreground" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-balance">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">{subtitle}</p>
        )}
        {showCta && (
          <div className="mt-8">
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
        )}
      </div>
    </section>
  )
}
