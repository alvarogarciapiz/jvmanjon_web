import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * Al cambiar de ruta, sube al principio de la página.
 * Si la URL lleva ancla (/#ideas), desplaza hasta esa sección.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
