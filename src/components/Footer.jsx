import Icon from './Icon'
import { footerLinks, nav } from '../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="sobre-mi">
      <div className="container">
        <div className="footer__grid">
          {footerLinks.map((col) => (
            <div className="footer__col" key={col.id} id={col.id}>
              <span className="footer__icon">
                <Icon name={col.icon} size={30} strokeWidth={1.2} />
              </span>
              <h3 className="footer__title">{col.title}</h3>
              <p className="footer__text">{col.text}</p>
              <a href="#" className="text-link footer__link">
                {col.cta}
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <a href="#inicio" className="footer__brand">
            <span className="footer__mono">JV</span>
            <span>Juan Vicente García Manjón</span>
          </a>

          <nav className="footer__nav" aria-label="Pie de página">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="footer__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <p className="footer__copy">© {year} · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
