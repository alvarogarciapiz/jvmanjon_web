import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteUrl } from '../data/site'

const SITE_NAME = 'Juan Vicente García Manjón'
const TAGLINE = 'IA, aprendizaje e innovación'

/* Devuelve el elemento de <head> que casa con el selector, creándolo si falta */
function ensureHeadElement(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMetaByName(name, content) {
  ensureHeadElement(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('name', name)
    return m
  }).setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  ensureHeadElement(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('property', property)
    return m
  }).setAttribute('content', content)
}

/*
 * Actualiza por página: <title>, meta descripción, URL canónica y
 * las etiquetas Open Graph equivalentes.
 * Uso: usePageMeta('Artículos', 'Reflexiones sobre IA...')
 */
export default function usePageMeta(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${SITE_NAME}`
      : `${SITE_NAME} — ${TAGLINE}`
    const canonical = pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}`

    document.title = fullTitle
    setMetaByProperty('og:title', fullTitle)
    setMetaByProperty('og:url', canonical)

    if (description) {
      setMetaByName('description', description)
      setMetaByProperty('og:description', description)
    }

    ensureHeadElement('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    }).setAttribute('href', canonical)
  }, [title, description, pathname])
}
