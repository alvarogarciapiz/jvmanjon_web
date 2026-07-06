import Icon from './Icon'
import Placeholder from './Placeholder'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            IA · Aprendizaje · Innovación · Estrategia
          </p>

          <h1 className="hero__title">
            La IA está redefiniendo las capacidades humanas y organizativas.
          </h1>

          <p className="hero__lead">
            Investigo, enseño y aplico la inteligencia artificial para potenciar
            cómo aprendemos, pensamos, creamos, decidimos e innovamos en un mundo
            en transformación.
          </p>

          <div className="hero__actions">
            <a href="#ideas" className="btn btn--primary">
              Explora las ideas
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#frameworks" className="btn btn--ghost">
              Conoce los frameworks
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
        </div>

        <div className="hero__media">
          <Placeholder
            tone="cream"
            ratio="4 / 5"
            label="Retrato"
            className="hero__photo"
          />

          <figure className="hero__quote">
            <span className="hero__quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              No se trata de usar la IA, se trata de desarrollar nuevas
              capacidades para un nuevo tiempo.
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  )
}
