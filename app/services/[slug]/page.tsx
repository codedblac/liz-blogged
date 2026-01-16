import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceDetailPage } from "@/components/service-detail-page"
import { services, getServiceBySlug } from "@/lib/services-data"
import type { Metadata } from "next"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service Not Found | Liz Hairstylist" }
  }

  return {
    title: `${service.title} | Liz Hairstylist`,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage service={service} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
