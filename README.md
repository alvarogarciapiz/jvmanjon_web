# Juan Vicente García Manjón — Web personal

Web personal de una sola página construida con **React + Vite** (JavaScript),
lista para desplegar en **Vercel**. Diseño editorial responsive con paleta
crema · azul marino · dorado.

## Desarrollo

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción en /dist
npm run preview # sirve el build para comprobarlo
```

Requiere Node 18+.

## Estructura

```
src/
├── main.jsx                # punto de entrada
├── App.jsx                 # composición de la página
├── index.css               # sistema de diseño (colores, tipografía, utilidades)
├── data/
│   └── site.js             # TEXTOS y contenidos (edita aquí sin tocar componentes)
└── components/
    ├── Header.jsx          # cabecera + navegación (menú móvil incluido)
    ├── Hero.jsx            # portada con titular, botones y cita
    ├── FocusAreas.jsx      # barra de "áreas de enfoque"
    ├── FeaturedContent.jsx # artículos destacados + framework
    ├── Footer.jsx          # pie con 4 secciones
    ├── Icon.jsx            # iconos SVG de línea (sin dependencias)
    └── Placeholder.jsx     # recuadros de imagen provisionales
```

## Paleta

Definida como variables CSS en `src/index.css`:

| Variable        | Uso                               | Color     |
| --------------- | --------------------------------- | --------- |
| `--cream`       | fondo del hero                    | `#ece5d7` |
| `--paper`       | secciones claras                  | `#fbf9f3` |
| `--ink`         | marino: footer, tarjetas, botones | `#0b1622` |
| `--gold`        | acento dorado                     | `#b0863a` |
| `--tan`         | tarjeta destacada cálida          | `#d9c8a4` |

## Imágenes

Todas las imágenes son **placeholders** (`src/components/Placeholder.jsx`).
Cuando tengas las fotos definitivas, sustituye cada `<Placeholder ... />` por un
`<img src="..." alt="..." />`. Los sitios recomendados:

- **Retrato del hero** → `src/components/Hero.jsx`
- **Ilustraciones de artículos** → `src/components/FeaturedContent.jsx`

Coloca los archivos en `src/assets/` (impórtalos) o en `public/` (rutas absolutas).

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → *New Project* → importa el repo.
3. Vercel detecta Vite automáticamente:
   - Build command: `npm run build`
   - Output directory: `dist`
4. *Deploy*. El fichero `vercel.json` ya gestiona el enrutado de una SPA.
