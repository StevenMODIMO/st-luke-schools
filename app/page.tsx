import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import VisionMission from '@/components/sections/VisionMission'
import AcademicsPreview from '@/components/sections/AcademicsPreview'
import ResultsBanner from '@/components/sections/ResultsBanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VisionMission />
        <AcademicsPreview />
        <ResultsBanner />
      </main>
      <Footer />
    </>
  )
}
