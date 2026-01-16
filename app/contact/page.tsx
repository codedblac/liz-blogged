import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { ContactContent } from "@/components/contact-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Liz Hairstylist",
  description:
    "Get in touch with Liz Hairstylist. Visit our salon in Hurlingham, Nairobi or book an appointment on WhatsApp.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to book an appointment or visit our salon in Hurlingham, Nairobi."
        backgroundImage="/salon-reception-contact-hero.jpg"
        showCta
      />
      <ContactContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
