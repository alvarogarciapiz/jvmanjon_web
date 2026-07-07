import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import { nav, newsletterUrl } from '../data/site'
import './Header.css'

/* Los enlaces con ancla (/#ideas) no llevan estado activo; los de página, sí */
function NavItem({ item, className, onClick }) {
  if (item.to.includes('#')) {
    return (
      <Link to={item.to} className={className} onClick={onClick}>
        {item.label}
      </Link>
    )
  }
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `${className} ${isActive ? 'is-active' : ''}`
      }
      onClick={onClick}
    >
      {item.label}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Eleva la cabecera (sombra + blur) al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand__mono" aria-hidden="true">
            JV
          </span>
          <span className="brand__name">
            Juan Vicente
            <br />
            García Manjón
          </span>
        </Link>

        <nav className="nav" aria-label="Principal">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavItem item={item} className="nav__link" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            href={newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary header__newsletter"
          >
            Newsletter
          </a>
          <button
            className="icon-btn header__burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <ul className="mobile-nav__list">
          {nav.map((item) => (
            <li key={item.to}>
              <NavItem
                item={item}
                className="mobile-nav__link"
                onClick={close}
              />
            </li>
          ))}
          <li>
            <a
              href={newsletterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary mobile-nav__cta"
              onClick={close}
            >
              Newsletter
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
