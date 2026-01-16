import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { AboutContent } from "@/components/about-content"
import { TestimonialsSection } from "@/components/testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Liz Hairstylist",
  description:
    "Learn about Liz Hairstylist - your premier destination for natural hair care and nail services in Hurlingham, Nairobi.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="About Us"
        subtitle="Discover the story behind Liz Hairstylist and our commitment to excellence in beauty care."
        backgroundImage="/african-hairstylist-team-salon-professional.jpg"
      />
      <AboutContent />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
