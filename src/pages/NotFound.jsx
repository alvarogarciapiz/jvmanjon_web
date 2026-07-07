import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import './NotFound.css'

export default function NotFound() {
  usePageMeta('Página no encontrada')

  return (
    <section className="nf">
      <div className="container nf__inner">
        <p className="eyebrow">Error 404</p>
        <h1 className="nf__title">Esta página no existe.</h1>
        <p className="nf__text">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <Link to="/" className="btn btn--primary">
          Volver al inicio
          <Icon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  )
}
