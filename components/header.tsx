"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { services, WHATSAPP_LINK } from "@/lib/services-data"

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
  },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || pathname !== "/" ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-primary text-4xl font-serif italic">L</span>
              <div className="flex flex-col leading-tight">
                <span
                  className={cn(
                    "text-xl font-serif font-semibold transition-colors",
                    isScrolled || pathname !== "/" ? "text-foreground" : "text-white",
                  )}
                >
                  Liz
                </span>
                <span
                  className={cn(
                    "text-sm tracking-wide transition-colors",
                    isScrolled || pathname !== "/" ? "text-muted-foreground" : "text-white/80",
                  )}
                >
                  Hairstylist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                      isScrolled || pathname !== "/" ? "text-foreground" : "text-white",
                      pathname === link.href && "text-primary",
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-card rounded-xl shadow-xl border border-border overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors",
                              pathname === child.href && "text-primary bg-muted",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled || pathname !== "/" ? "text-foreground" : "text-white")} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-card animate-in fade-in duration-200">
          {/* Scrollable container that starts below the header */}
          <div className="pt-20 h-full overflow-y-auto">
            <div className="flex flex-col py-4 gap-2 pb-20">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-6 py-3 text-foreground hover:bg-muted transition-colors block text-lg",
                      pathname === link.href && "text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                  {/* Mobile dropdown items */}
                  {link.children && (
                    <div className="pl-6 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "px-6 py-2 text-muted-foreground hover:text-primary transition-colors block",
                            pathname === child.href && "text-primary",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-6 pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Book an Appointment
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
