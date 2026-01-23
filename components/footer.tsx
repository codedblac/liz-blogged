import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { services } from "@/lib/services-data"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-primary text-4xl font-serif italic">L</span>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-serif font-semibold text-background">Liz</span>
                <span className="text-sm tracking-wide text-background/70">Hairstylist</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Your Hair. Your Nails. Your Style. Premium beauty services in Hurlingham, Nairobi.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-background/70">
              <p>Hurlingham, Nairobi</p>
              <p>Kenya</p>
              <p>+254722241321</p>
              <p className="pt-2">
                <span className="text-background/50">Hours:</span>
                <br />
                Mon - Sat: 8AM - 7PM
                <br />
                Sunday: 10AM - 5PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Liz Hairstylist. All rights reserved.
          </p>
<p className="text-background/40 text-xs mt-2">
    Designed & Developed by{" "}
    <a
      href="https://technopickltd.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-400 hover:text-sky-500 transition"
    >
      Technopick Ltd
    </a>
  </p>

        </div>
      </div>
    </footer>
  )
}
