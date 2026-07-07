import Icon from './Icon'
import { newsletterUrl } from '../data/site'
import './NewsletterCta.css'

/*
 * Banda de suscripción a la newsletter, antes del footer en todas las páginas.
 */
export default function NewsletterCta() {
  return (
    <section className="nl" id="newsletter">
      <div className="container nl__grid reveal">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2 className="nl__title">Las ideas llegan primero por correo.</h2>
          <p className="nl__text">
            Artículos, frameworks y recursos sobre IA, aprendizaje e innovación.
            Sin ruido y con propósito, directamente en tu bandeja de entrada.
          </p>
        </div>
        <a
          href={newsletterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary nl__btn"
        >
          Suscríbete en Substack
          <Icon name="arrowRight" size={18} />
        </a>
      </div>
    </section>
  )
}
