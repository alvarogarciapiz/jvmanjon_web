import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import { talks, talkFormats, talksApproach, linkedinUrl } from '../data/site'
import './Conferencias.css'

export default function Conferencias() {
  usePageMeta(
    'Conferencias',
    'Conferencias y masterclasses sobre inteligencia artificial, aprendizaje e innovación.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Conferencias"
        title="Ideas que inspiran y transforman."
        lead="Conferencias y masterclasses sobre inteligencia artificial, aprendizaje e innovación, pensadas para provocar conversaciones que continúan mucho después del aplauso."
      />

      <section className="talks">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">Conferencias destacadas</h2>
          </div>

          <div className="talks__grid">
            {talks.map((talk, i) => (
              <article
                className={`talk panel reveal${i % 2 ? ' reveal-d1' : ''}`}
                key={talk.title}
              >
                <span className="talk__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="talk__title">{talk.title}</h3>
                <p className="talk__text">{talk.description}</p>
                <p className="talk__audience">{talk.audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="container approach__grid">
          <figure className="approach__quote reveal">
            <span className="approach__mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{talksApproach.quote}</blockquote>
          </figure>

          <ul className="approach__creds reveal reveal-d1">
            {talksApproach.credentials.map((cred) => (
              <li key={cred}>
                <Icon name="check" size={16} strokeWidth={2} />
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="formats">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">Formatos</h2>
          </div>

          <div className="formats__grid">
            {talkFormats.map((f, i) => (
              <div
                className={`format reveal${i ? ` reveal-d${i}` : ''}`}
                key={f.title}
              >
                <span className="format__icon">
                  <Icon name={f.icon} size={28} strokeWidth={1.3} />
                </span>
                <h3 className="format__title">{f.title}</h3>
                <p className="format__detail">{f.detail}</p>
                <p className="format__text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="talks__cta">
            <p className="talks__cta-text">
              ¿Quieres llevar estas ideas a tu evento u organización?
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Contactar por LinkedIn
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
