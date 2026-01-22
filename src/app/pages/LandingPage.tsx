import { Hero } from '@/components/landing/hero'
import { Statistics } from '@/components/landing/statistics'
import { EconomicTransformation } from '@/components/landing/economic-transformation'
import { Footer } from '@/components/landing/footer'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Statistics />
      <EconomicTransformation />
      <Footer />
    </>
  )
}
