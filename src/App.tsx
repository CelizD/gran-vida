import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Services from './sections/Services'
import ScienceBand from './sections/ScienceBand'
import Process from './sections/Process'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ScienceBand />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
