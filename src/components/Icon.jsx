/*
 * Iconos de línea dibujados a mano (SVG inline, sin dependencias).
 * Heredan el color con `currentColor` y el grosor con `strokeWidth`.
 * Uso: <Icon name="brain" />
 */

const paths = {
  // --- Áreas de enfoque ---
  brain: (
    <>
      <path d="M8.5 4.5A2.5 2.5 0 0 0 6 7a2.6 2.6 0 0 0-1 5 2.5 2.5 0 0 0 1.2 4.6A2.4 2.4 0 0 0 8.5 20c1.4 0 2.5-1 2.5-2.3V6.8c0-1.3-1.1-2.3-2.5-2.3Z" />
      <path d="M15.5 4.5A2.5 2.5 0 0 1 18 7a2.6 2.6 0 0 1 1 5 2.5 2.5 0 0 1-1.2 4.6A2.4 2.4 0 0 1 15.5 20c-1.4 0-2.5-1-2.5-2.3V6.8c0-1.3 1.1-2.3 2.5-2.3Z" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8.9.9 1.5l.1.7h5.2l.1-.7c.1-.6.4-1.1.9-1.5A6 6 0 0 0 12 3Z" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20h4L19 9a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0L4 16v4Z" />
      <path d="M14.5 6.5 17.5 9.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M4 19a5 5 0 0 1 10 0" />
      <path d="M16 6.5a3 3 0 0 1 0 5.5" />
      <path d="M17 14.5a5 5 0 0 1 3 4.5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.5 5 5 5 9l-3 2h-4l-3-2c0-4 2-7.5 5-9Z" />
      <circle cx="12" cy="9.5" r="1.5" />
      <path d="M10 16c-1 .5-2 2-2 4 2 0 3.5-1 4-2" />
      <path d="M14 16c1 .5 2 2 2 4-2 0-3.5-1-4-2" />
    </>
  ),

  // --- Footer ---
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
      <path d="M9 21h6" />
    </>
  ),
  cap: (
    <>
      <path d="M3 9 12 5l9 4-9 4-9-4Z" />
      <path d="M7 11v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
      <path d="M21 9v4.5" />
    </>
  ),
  book: (
    <>
      <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" />
      <path d="M5 18a2 2 0 0 1 2-2h11" />
      <path d="M9 8h6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </>
  ),

  // --- Interfaz ---
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </>
  ),
}

export default function Icon({ name, size = 24, strokeWidth = 1.5, className }) {
  const glyph = paths[name]
  if (!glyph) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
