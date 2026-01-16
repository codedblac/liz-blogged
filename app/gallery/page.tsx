import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { GalleryContent } from "@/components/gallery-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Liz Hairstylist",
  description: "Browse our gallery of stunning hair and nail transformations at Liz Hairstylist in Nairobi.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Our Gallery"
        subtitle="Browse through our collection of stunning transformations and let our work speak for itself."
        backgroundImage="/salon-gallery-hero-background.jpg"
      />
      <GalleryContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
