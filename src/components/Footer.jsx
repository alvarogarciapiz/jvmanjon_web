import { Link } from 'react-router-dom'
import Icon from './Icon'
import { footerLinks, nav, linkedinUrl, newsletterUrl } from '../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {footerLinks.map((col, i) => (
            <div
              className={`footer__col reveal${i % 3 ? ` reveal-d${i % 3}` : ''}`}
              key={col.to}
            >
              <span className="footer__icon">
                <Icon name={col.icon} size={30} strokeWidth={1.2} />
              </span>
              <h3 className="footer__title">{col.title}</h3>
              <p className="footer__text">{col.text}</p>
              <Link to={col.to} className="text-link footer__link">
                {col.cta}
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <Link to="/" className="footer__brand">
            <span className="footer__mono">JV</span>
            <span>Juan Vicente García Manjón</span>
          </Link>

          <nav className="footer__nav" aria-label="Pie de página">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="footer__nav-link">
                {item.label}
              </Link>
            ))}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nav-link footer__nav-link--ext"
            >
              LinkedIn
            </a>
            <a
              href={newsletterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nav-link footer__nav-link--ext"
            >
              Substack
            </a>
          </nav>

          <p className="footer__copy">© {year} · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
