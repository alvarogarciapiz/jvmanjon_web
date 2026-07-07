import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import { resources, newsletterUrl } from '../data/site'
import './Recursos.css'

export default function Recursos() {
  usePageMeta(
    'Recursos',
    'Guías, prompts, plantillas y mapas para aplicar la inteligencia artificial con propósito.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Herramientas para aplicar la IA con propósito."
        lead="Guías, prompts, plantillas y mapas pensados para pasar de la teoría a la práctica. Materiales claros, útiles y sin humo."
      />

      <section className="recursos">
        <div className="container">
          <div className="recursos__grid">
            {resources.map((res, i) => (
              <article
                className={`recurso panel reveal${i % 2 ? ' reveal-d1' : ''}`}
                key={res.title}
              >
                <div className="recurso__top">
                  <span className="recurso__icon">
                    <Icon name={res.icon} size={26} strokeWidth={1.3} />
                  </span>
                  <span className="recurso__type">{res.type}</span>
                </div>
                <h2 className="recurso__title">{res.title}</h2>
                <p className="recurso__text">{res.text}</p>
                {res.href && (
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link recurso__link"
                  >
                    {res.cta}
                    <Icon name="arrowRight" size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>

          <aside className="recursos__note reveal">
            <p className="recursos__note-text">
              Los recursos se publican primero en la newsletter, con el contexto
              y los ejemplos para sacarles partido desde el primer día.
            </p>
            <a
              href={newsletterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Recibir los recursos
              <Icon name="arrowRight" size={18} />
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}
