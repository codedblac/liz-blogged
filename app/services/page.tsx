import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { ServicesGrid } from "@/components/services-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Liz Hairstylist",
  description:
    "Explore our premium hair and nail services including natural hair care, braiding, styling, manicures, pedicures, and bridal packages.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Discover our comprehensive range of premium beauty services designed to make you look and feel your best."
        backgroundImage="/salon-services-hero-background.jpg"
      />
      <ServicesGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
