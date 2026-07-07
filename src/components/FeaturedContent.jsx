import { Link } from 'react-router-dom'
import Icon from './Icon'
import Placeholder from './Placeholder'
import { articles, framework } from '../data/site'
import './FeaturedContent.css'

function VennDiagram() {
  return (
    <svg
      className="venn"
      viewBox="0 0 200 160"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="78" cy="62" r="42" stroke="#c4a052" strokeWidth="1.2" />
      <circle cx="122" cy="62" r="42" stroke="#c4a052" strokeWidth="1.2" />
      <text className="venn__label" x="58" y="66">HUMANO</text>
      <text className="venn__label" x="140" y="66">IA</text>
      <text className="venn__plus" x="100" y="66">+</text>
      <line x1="100" y1="104" x2="100" y2="124" stroke="#c4a052" strokeWidth="1" />
      <text className="venn__label venn__label--lg" x="100" y="140">
        AUMENTO
      </text>
    </svg>
  )
}

export default function FeaturedContent() {
  const featured = articles.slice(0, 3)

  return (
    <section className="featured" id="ideas">
      <div className="container featured__layout">
        {/* --- Artículos destacados --- */}
        <div className="featured__main">
          <div className="section-head">
            <h2 className="section-head__title">Ideas y artículos destacados</h2>
            <Link to="/articulos" className="text-link section-head__link">
              Ver todos los artículos
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <div className="articles">
            {featured.map((art, i) => (
              <article
                className={`article reveal${i ? ` reveal-d${i}` : ''}`}
                key={art.title}
              >
                {art.image ? (
                  <img
                    src={art.image}
                    alt=""
                    className="article__media article__media--img"
                    loading="lazy"
                  />
                ) : (
                  <Placeholder
                    tone={art.tone}
                    ratio="3 / 4"
                    label="Ilustración"
                    className="article__media"
                  />
                )}
                <div className="article__body">
                  <p className="eyebrow">{art.category}</p>
                  <h3 className="article__title">{art.title}</h3>
                  <p className="article__excerpt">{art.excerpt}</p>
                  <a
                    href={art.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link article__link"
                  >
                    Leer más
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* --- Framework destacado --- */}
        <aside className="featured__aside">
          <p className="eyebrow featured__aside-label">{framework.category}</p>

          <div className="framework-card reveal reveal-d1">
            <div className="framework-card__viz">
              <VennDiagram />
            </div>
            <div className="framework-card__body">
              <h3 className="framework-card__title">{framework.title}</h3>
              <p className="framework-card__text">{framework.excerpt}</p>
              <a
                href={framework.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explorar framework
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
