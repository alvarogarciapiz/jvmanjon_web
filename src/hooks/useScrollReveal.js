import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * Hace aparecer con una transición suave los elementos que llevan la clase
 * `.reveal` cuando entran en el viewport. Respeta prefers-reduced-motion.
 *
 * Se llama una vez en App (cubre cada cambio de ruta). Las páginas que
 * re-renderizan elementos `.reveal` sin cambiar de ruta (p. ej. el filtro
 * de artículos) pueden llamarlo también con sus propias dependencias.
 */
export default function useScrollReveal(deps = []) {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!elements.length) return undefined

    // Sin animación si el usuario prefiere movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ...deps])
}
