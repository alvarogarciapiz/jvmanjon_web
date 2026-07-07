import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import { bio, newsletterUrl, linkedinUrl } from '../data/site'
import retrato from '../img/juanvi.webp'
import './SobreMi.css'

export default function SobreMi() {
  usePageMeta(
    'Sobre mí',
    'Juan Vicente García Manjón — Doctor (PhD), profesor universitario, investigador y divulgador. Innovación, aprendizaje e inteligencia artificial.',
  )

  return (
    <>
      <section className="bio">
        <div className="container bio__grid">
          <div className="bio__media reveal">
            <img
              src={retrato}
              alt="Juan Vicente García Manjón"
              className="bio__photo"
            />
          </div>

          <div className="bio__content reveal reveal-d1">
            <p className="eyebrow">Sobre mí</p>
            <h1 className="bio__title">{bio.title}</h1>

            <ul className="bio__highlights">
              {bio.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="bio__text">
              {bio.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="bio__actions">
              <a
                href={newsletterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Suscríbete a la newsletter
                <Icon name="arrowRight" size={18} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Conecta en LinkedIn
                <Icon name="arrowRight" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="research">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">Investigación y publicaciones</h2>
          </div>

          <div className="research__grid">
            <div className="research__lines reveal">
              <p className="research__intro">{bio.research.intro}</p>
              <ul className="research__list">
                {bio.research.lines.map((line) => (
                  <li key={line}>
                    <Icon name="check" size={16} strokeWidth={2} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article className="research__book panel reveal reveal-d1">
              <p className="eyebrow">{bio.research.book.label}</p>
              <h3 className="research__book-title">{bio.research.book.title}</h3>
              <p className="research__book-publisher">
                {bio.research.book.publisher}
              </p>
              <p className="research__book-text">{bio.research.book.text}</p>
              <a
                href={bio.research.book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {bio.research.book.cta}
                <Icon name="arrowRight" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="scopes">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">En qué trabajo</h2>
          </div>

          <div className="scopes__grid">
            {bio.scopes.map((scope, i) => (
              <div
                className={`scope reveal${i ? ` reveal-d${i}` : ''}`}
                key={scope.title}
              >
                <span className="scope__icon">
                  <Icon name={scope.icon} size={28} strokeWidth={1.3} />
                </span>
                <h3 className="scope__title">{scope.title}</h3>
                <p className="scope__text">{scope.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
