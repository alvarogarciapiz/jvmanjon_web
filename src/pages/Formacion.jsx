import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import { programs, linkedinUrl } from '../data/site'
import './Formacion.css'

export default function Formacion() {
  usePageMeta(
    'Formación',
    'Programas y talleres para desarrollar capacidades en la era de la inteligencia artificial.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Formación"
        title="Capacidades para un nuevo tiempo."
        lead="Programas y talleres prácticos para personas, equipos y organizaciones que no quieren limitarse a usar la IA: quieren desarrollar las capacidades que este nuevo tiempo exige."
      />

      <section className="programas">
        <div className="container">
          <div className="programas__grid">
            {programs.map((prog, i) => (
              <article
                className={`programa panel reveal${i % 2 ? ' reveal-d1' : ''}`}
                key={prog.title}
              >
                <div className="programa__head">
                  <span className="programa__tag">{prog.tag}</span>
                  <h2 className="programa__title">{prog.title}</h2>
                  <p className="programa__audience">{prog.audience}</p>
                </div>

                <p className="programa__format">
                  <Icon name="calendar" size={16} />
                  {prog.format}
                </p>

                <ul className="programa__points">
                  {prog.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} strokeWidth={2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="programas__cta">
            <p className="programas__cta-text">
              ¿No encuentras el formato que necesitas? Diseñamos el programa a
              medida para tu organización.
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Cuéntame tu caso en LinkedIn
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
