import './Placeholder.css'

/*
 * Placeholder de imagen. Sustituir por <img> cuando lleguen las fotos reales.
 *
 *   tone:  'cream' | 'dark' | 'tan'   -> paleta del recuadro
 *   ratio: p.ej. '3 / 4', '1 / 1'     -> proporción (aspect-ratio)
 *   label: texto pequeño bajo el icono
 *   children: SVG/ilustración a medida (opcional; si no, se usa un icono neutro)
 */
export default function Placeholder({
  tone = 'dark',
  ratio = '4 / 3',
  label = 'Imagen',
  children,
  className = '',
}) {
  return (
    <div
      className={`ph ph--${tone} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder de imagen: ${label}`}
    >
      <div className="ph__inner">
        {children || (
          <svg
            className="ph__glyph"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="6" y="9" width="36" height="30" rx="3" />
            <circle cx="17" cy="19" r="3.2" />
            <path d="M6 33l10-9 8 7 6-5 12 11" />
          </svg>
        )}
        <span className="ph__label">{label}</span>
      </div>
    </div>
  )
}
