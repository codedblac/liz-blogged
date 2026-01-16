import { Scissors, Sparkles, Heart, Palette, Crown, Star } from "lucide-react"

export const WHATSAPP_LINK =
  "https://wa.me/254700000000?text=Hello%20Liz%20Hairstylist%2C%20I%20would%20like%20to%20book%20an%20appointment"

export const services = [
  {
    slug: "natural-hair-care",
    icon: Crown,
    title: "Natural Hair Care",
    shortDescription: "Expert care for your natural crown with moisturizing treatments, styling, and maintenance.",
    image: "/natural-african-hair-care-treatment-salon.jpg",
    heroImage: "/african-woman-natural-hair-care-hero.jpg",
    description: `At Liz Hairstylist, we celebrate the beauty of natural hair. Our natural hair care services are designed to nurture, protect, and enhance your crown while maintaining its health and vitality.

Our expert stylists understand the unique needs of African hair textures and use only premium products specifically formulated for natural hair. Whether you're transitioning, maintaining a protective style, or simply want your natural curls to shine, we've got you covered.`,
    treatments: [
      { name: "Deep Conditioning Treatment", price: "KES 1,500 - 2,500", duration: "45 mins" },
      { name: "Protein Treatment", price: "KES 2,000 - 3,000", duration: "60 mins" },
      { name: "Hot Oil Treatment", price: "KES 1,200 - 1,800", duration: "30 mins" },
      { name: "Scalp Treatment", price: "KES 1,500 - 2,200", duration: "45 mins" },
      { name: "Wash & Style (Natural)", price: "KES 1,000 - 2,000", duration: "60 mins" },
      { name: "Twist Out / Braid Out", price: "KES 1,500 - 2,500", duration: "90 mins" },
    ],
    benefits: [
      "Promotes healthy hair growth",
      "Restores moisture and shine",
      "Strengthens hair strands",
      "Reduces breakage and split ends",
      "Soothes dry, itchy scalp",
    ],
  },
  {
    slug: "braiding-protective-styles",
    icon: Scissors,
    title: "Braiding & Protective Styles",
    shortDescription: "Box braids, cornrows, twists, and locs crafted with precision for lasting beauty.",
    image: "/african-braiding-protective-styles-salon.jpg",
    heroImage: "/stunning-african-braids-hairstyle-hero.jpg",
    description: `Our braiding and protective styling services are legendary in Nairobi. We specialize in creating intricate, long-lasting styles that not only look stunning but also protect your natural hair from damage.

From classic cornrows to trendy knotless braids, our skilled stylists bring years of experience and artistic vision to every style. We take pride in our attention to detail, ensuring each braid is neat, uniform, and comfortable.`,
    treatments: [
      { name: "Box Braids (Medium)", price: "KES 3,500 - 5,000", duration: "4-6 hours" },
      { name: "Knotless Braids", price: "KES 4,500 - 7,000", duration: "5-7 hours" },
      { name: "Cornrows (Full Head)", price: "KES 2,000 - 4,000", duration: "2-4 hours" },
      { name: "Senegalese Twists", price: "KES 3,500 - 5,500", duration: "4-6 hours" },
      { name: "Passion Twists", price: "KES 4,000 - 6,000", duration: "4-5 hours" },
      { name: "Loc Maintenance", price: "KES 2,500 - 4,000", duration: "2-4 hours" },
      { name: "Fulani Braids", price: "KES 3,000 - 5,000", duration: "3-5 hours" },
    ],
    benefits: [
      "Protects natural hair from daily manipulation",
      "Low maintenance for busy lifestyles",
      "Lasts 4-8 weeks with proper care",
      "Versatile styling options",
      "Promotes hair growth",
    ],
  },
  {
    slug: "hair-treatment-styling",
    icon: Sparkles,
    title: "Hair Treatment & Styling",
    shortDescription: "Deep conditioning, protein treatments, and professional styling for all occasions.",
    image: "/hair-treatment-styling-salon-professional.jpg",
    heroImage: "/professional-hair-styling-african-woman-hero.jpg",
    description: `Transform your hair with our professional treatment and styling services. We offer a comprehensive range of treatments designed to address various hair concerns, from dryness and damage to thinning and breakage.

Our stylists stay updated on the latest trends and techniques to ensure you leave our salon looking and feeling your absolute best. Whether it's a simple blowout or an elaborate updo, we deliver exceptional results every time.`,
    treatments: [
      { name: "Blowout & Flat Iron", price: "KES 1,500 - 2,500", duration: "60-90 mins" },
      { name: "Silk Press", price: "KES 2,500 - 4,000", duration: "90-120 mins" },
      { name: "Relaxer Treatment", price: "KES 3,000 - 5,000", duration: "2-3 hours" },
      { name: "Keratin Treatment", price: "KES 8,000 - 15,000", duration: "3-4 hours" },
      { name: "Hair Coloring", price: "KES 3,500 - 8,000", duration: "2-4 hours" },
      { name: "Highlights/Lowlights", price: "KES 4,000 - 10,000", duration: "3-5 hours" },
    ],
    benefits: [
      "Restores damaged hair",
      "Creates smooth, silky finish",
      "Long-lasting color results",
      "Reduces frizz and flyaways",
      "Professional-grade products",
    ],
  },
  {
    slug: "nail-care-manicure",
    icon: Palette,
    title: "Nail Care & Manicure",
    shortDescription: "Classic and luxury manicures with premium polishes and nail art options.",
    image: "/luxury-manicure-nail-care-salon.jpg",
    heroImage: "/elegant-gel-nails-african-woman-hero.jpg",
    description: `Indulge in our luxurious nail care and manicure services. From classic manicures to elaborate nail art, our skilled technicians deliver flawless results that make a statement.

We use only premium, long-lasting polishes and prioritize the health of your natural nails. Our hygienic practices and sterilized tools ensure a safe and relaxing experience every visit.`,
    treatments: [
      { name: "Classic Manicure", price: "KES 800 - 1,200", duration: "30 mins" },
      { name: "Spa Manicure", price: "KES 1,500 - 2,000", duration: "45 mins" },
      { name: "Gel Manicure", price: "KES 2,000 - 3,000", duration: "45 mins" },
      { name: "Acrylic Extensions", price: "KES 3,500 - 6,000", duration: "90 mins" },
      { name: "Nail Art (per nail)", price: "KES 100 - 500", duration: "varies" },
      { name: "French Tip", price: "KES 500 - 800", duration: "15 mins" },
      { name: "Nail Repair", price: "KES 200 - 400", duration: "15 mins" },
    ],
    benefits: [
      "Nourishes cuticles and nails",
      "Long-lasting chip-free polish",
      "Strengthens weak nails",
      "Wide range of colors and designs",
      "Relaxing hand massage included",
    ],
  },
  {
    slug: "pedicure-gel-nails",
    icon: Heart,
    title: "Pedicure & Gel Nails",
    shortDescription: "Relaxing pedicures and long-lasting gel applications for beautiful hands and feet.",
    image: "/pedicure-gel-nails-spa-treatment.jpg",
    heroImage: "/luxury-pedicure-spa-treatment-hero.jpg",
    description: `Treat your feet to the pampering they deserve with our professional pedicure services. Our treatments go beyond just polish – we provide complete foot care that leaves your feet soft, smooth, and beautiful.

Our gel nail services offer a durable, glossy finish that lasts for weeks without chipping. Perfect for busy professionals who want perfect nails without frequent touch-ups.`,
    treatments: [
      { name: "Classic Pedicure", price: "KES 1,200 - 1,800", duration: "45 mins" },
      { name: "Spa Pedicure", price: "KES 2,000 - 3,000", duration: "60 mins" },
      { name: "Gel Pedicure", price: "KES 2,500 - 3,500", duration: "60 mins" },
      { name: "Callus Treatment", price: "KES 800 - 1,200", duration: "30 mins" },
      { name: "Paraffin Wax Treatment", price: "KES 1,000 - 1,500", duration: "20 mins" },
      { name: "Gel Polish Removal", price: "KES 500 - 800", duration: "15 mins" },
    ],
    benefits: [
      "Removes dead skin and calluses",
      "Improves circulation",
      "Prevents ingrown toenails",
      "Deeply moisturizes feet",
      "Gel polish lasts 2-3 weeks",
    ],
  },
  {
    slug: "bridal-special-events",
    icon: Star,
    title: "Bridal & Special Events",
    shortDescription: "Complete beauty packages for weddings, graduations, and special celebrations.",
    image: "/bridal-hair-makeup-african-woman-elegant.jpg",
    heroImage: "/beautiful-african-bride-wedding-hair-hero.jpg",
    description: `Make your special day unforgettable with our comprehensive bridal and event services. We work closely with you to create a look that complements your style, outfit, and the occasion.

From bridal parties to graduation ceremonies, quinceañeras to anniversary celebrations, we offer customized packages that ensure you and your loved ones look stunning for every milestone moment.`,
    treatments: [
      { name: "Bridal Hair Styling", price: "KES 8,000 - 15,000", duration: "2-3 hours" },
      { name: "Bridal Trial Session", price: "KES 3,000 - 5,000", duration: "2 hours" },
      { name: "Bridesmaid Styling", price: "KES 3,500 - 6,000", duration: "60-90 mins" },
      { name: "Event Updo", price: "KES 3,000 - 5,000", duration: "60-90 mins" },
      { name: "Graduation Styling", price: "KES 2,500 - 4,000", duration: "60 mins" },
      { name: "Party Glam Package", price: "KES 5,000 - 8,000", duration: "2 hours" },
    ],
    benefits: [
      "Personalized consultation included",
      "Trial session available",
      "On-location services available",
      "Group discounts for bridal parties",
      "Touch-up kit provided",
    ],
  },
]

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug)
}
