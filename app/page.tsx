import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HomeServicesPreview } from "@/components/home-services-preview"
import { HomeAboutPreview } from "@/components/home-about-preview"
import { HomeGalleryPreview } from "@/components/home-gallery-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HomeCtaSection } from "@/components/home-cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <HomeServicesPreview />
      <HomeAboutPreview />
      <HomeGalleryPreview />
      <TestimonialsSection />
      <HomeCtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
