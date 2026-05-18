import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutClub } from "@/components/about-club"
import { Statistics } from "@/components/statistics"
import { GolfMap } from "@/components/golf-map"
import { Services } from "@/components/services"
import { MembershipBenefits } from "@/components/membership-benefits"
import { ContactFaq } from "@/components/contact-faq"
import { Membership } from "@/components/membership"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"
import { HoleTrailLayer } from "@/components/hole-trail-layer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <div className="relative isolate bg-background">
        <HoleTrailLayer />
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <AboutClub /> {/* Внутри этого файла должен быть id="about" */}
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <Statistics />
      </ScrollReveal>
      <GolfMap />
      <Services />
      <MembershipBenefits />
      <ContactFaq />
      <Membership />
      <PhotoGallery />
      <Footer />
    </main>
  )
}
