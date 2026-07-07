import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import useScrollReveal from '../hooks/useScrollReveal'
import { articles } from '../data/site'
import './Articulos.css'

export default function Articulos() {
  usePageMeta(
    'Artículos',
    'Reflexiones y análisis sobre inteligencia artificial, aprendizaje, innovación y estrategia.',
  )

  const [filter, setFilter] = useState('Todos')
  const categories = ['Todos', ...new Set(articles.map((a) => a.category))]
  const visible =
    filter === 'Todos' ? articles : articles.filter((a) => a.category === filter)

  // Reobserva las tarjetas cuando cambia el filtro (se re-renderizan)
  useScrollReveal([filter])

  return (
    <>
      <PageHeader
        eyebrow="Artículos"
        title="Ideas para pensar el nuevo tiempo."
        lead="Reflexiones y análisis sobre inteligencia artificial, aprendizaje, innovación y estrategia. Se publican primero en la newsletter."
      />

      <section className="articulos">
        <div className="container">
          <div
            className="articulos__filters"
            role="group"
            aria-label="Filtrar por categoría"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`chip ${filter === cat ? 'is-active' : ''}`}
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="articulos__grid">
            {visible.map((art, i) => (
              <article
                className={`post reveal${i % 3 ? ` reveal-d${i % 3}` : ''}`}
                key={art.title}
              >
                <a
                  href={art.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post__media-link"
                  aria-label={art.title}
                  tabIndex={-1}
                >
                  {art.image ? (
                    <img
                      src={art.image}
                      alt=""
                      className="post__img"
                      loading="lazy"
                    />
                  ) : (
                    <Placeholder
                      tone={art.tone}
                      ratio="16 / 10"
                      label="Ilustración"
                    />
                  )}
                </a>
                <div className="post__body">
                  <p className="eyebrow">{art.category}</p>
                  <h2 className="post__title">
                    <a href={art.href} target="_blank" rel="noopener noreferrer">
                      {art.title}
                    </a>
                  </h2>
                  <p className="post__excerpt">{art.excerpt}</p>
                  <div className="post__meta">
                    <span>{art.date}</span>
                    <span className="post__dot" aria-hidden="true">
                      ·
                    </span>
                    <span className="post__time">
                      <Icon name="clock" size={14} />
                      {art.readTime} de lectura
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
