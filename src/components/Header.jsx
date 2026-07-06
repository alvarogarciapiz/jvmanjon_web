import { useState, useEffect } from 'react'
import Icon from './Icon'
import { nav } from '../data/site'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mono" aria-hidden="true">
            JV
          </span>
          <span className="brand__name">
            Juan Vicente
            <br />
            García Manjón
          </span>
        </a>

        <nav className="nav" aria-label="Principal">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#newsletter" className="btn btn--primary header__newsletter">
            Newsletter
          </a>
          <button className="icon-btn" aria-label="Buscar">
            <Icon name="search" size={20} />
          </button>
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
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#newsletter"
              className="btn btn--primary mobile-nav__cta"
              onClick={() => setOpen(false)}
            >
              Newsletter
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
