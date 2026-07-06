import Header from './components/Header'
import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import FeaturedContent from './components/FeaturedContent'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <FeaturedContent />
      </main>
      <Footer />
    </>
  )
}
