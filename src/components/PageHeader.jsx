import './PageHeader.css'

/*
 * Cabecera de las páginas interiores: etiqueta, titular serif y entradilla.
 */
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="page-header">
      <div className="container reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-header__title">{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </section>
  )
}
