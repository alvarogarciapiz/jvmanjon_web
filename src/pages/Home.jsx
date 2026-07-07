import Hero from '../components/Hero'
import FocusAreas from '../components/FocusAreas'
import FeaturedContent from '../components/FeaturedContent'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    null,
    'Juan Vicente García Manjón — Profesor, investigador y divulgador. Ideas, frameworks y formación sobre inteligencia artificial, aprendizaje e innovación.',
  )

  return (
    <>
      <Hero />
      <FocusAreas />
      <FeaturedContent />
    </>
  )
}
