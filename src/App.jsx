import { Routes, Route } from 'react-router-dom'
import ScrollManager from './components/ScrollManager'
import useScrollReveal from './hooks/useScrollReveal'
import Header from './components/Header'
import NewsletterCta from './components/NewsletterCta'
import Footer from './components/Footer'
import Home from './pages/Home'
import Articulos from './pages/Articulos'
import Conferencias from './pages/Conferencias'
import Formacion from './pages/Formacion'
import Recursos from './pages/Recursos'
import SobreMi from './pages/SobreMi'
import NotFound from './pages/NotFound'

export default function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollManager />
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/conferencias" element={<Conferencias />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <NewsletterCta />
      <Footer />
    </>
  )
}
