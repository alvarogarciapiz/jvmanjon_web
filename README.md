# Juan Vicente García Manjón — Web personal

Web personal construida con **React + Vite + React Router** (JavaScript),
lista para desplegar en **Vercel**. Diseño editorial responsive con paleta
crema · azul marino · dorado. Newsletter en
[jvmanjon.substack.com](https://jvmanjon.substack.com).

## Desarrollo

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción en /dist
npm run preview # sirve el build para comprobarlo
```

Requiere Node 20+.

## Estructura

```
src/
├── main.jsx                # punto de entrada (BrowserRouter)
├── App.jsx                 # layout común + rutas
├── index.css               # sistema de diseño (colores, tipografía, utilidades)
├── img/                    # imágenes (retrato + ilustraciones de artículos)
│   └── articulos/          #   ⟵ aquí van las ilustraciones de los artículos
├── data/
│   └── site.js             # ★ TODOS los textos y contenidos se editan aquí
├── hooks/
│   └── usePageMeta.js      # título y descripción por página
├── pages/                  # una página por ruta, con su CSS
│   ├── Home.jsx            #   /
│   ├── Articulos.jsx       #   /articulos (con filtro por categoría)
│   ├── Conferencias.jsx    #   /conferencias
│   ├── Formacion.jsx       #   /formacion
│   ├── Recursos.jsx        #   /recursos
│   ├── SobreMi.jsx         #   /sobre-mi
│   └── NotFound.jsx        #   404
└── components/             # cabecera, hero, footer, iconos, placeholders…
```

---

## ✏️ Guía de edición manual

Casi cualquier cambio de contenido se hace en **un solo fichero**:
`src/data/site.js`. No hace falta tocar componentes.

### Añadir o editar un artículo

En `src/data/site.js`, dentro del array `articles`, añade un objeto:

```js
{
  category: 'Innovación',        // categoría (crea el filtro automáticamente)
  tone: 'dark',                  // color del placeholder: 'dark' | 'tan' | 'cream'
  title: 'Título del artículo',
  excerpt: 'Resumen de una o dos líneas.',
  date: 'Julio 2026',
  readTime: '7 min',
  href: 'https://jvmanjon.substack.com/p/mi-articulo', // URL real del artículo
},
```

- Los **tres primeros** artículos del array salen destacados en la portada.
- La categoría nueva aparece sola como filtro en `/articulos`.

### Añadir una imagen a un artículo

1. Guarda el archivo en **`src/img/articulos/`** (recomendado: `.webp`,
   ~1200 px de ancho, proporción apaisada 16:10).
2. En la cabecera de `src/data/site.js`, impórtalo:
   ```js
   import miImagen from '../img/articulos/mi-imagen.webp'
   ```
3. Añade el campo `image` al artículo:
   ```js
   { title: '...', image: miImagen, ... }
   ```

Si un artículo no tiene `image`, se muestra un placeholder elegante con el
color indicado en `tone` — la web nunca se ve "rota".

### Añadir o editar una conferencia

En `src/data/site.js`, dentro del array `talks`:

```js
{
  title: 'Título de la conferencia',
  description: 'Qué cuenta y por qué importa, en dos líneas.',
  audience: 'Dirección general · Eventos corporativos', // separado por ·
},
```

Los formatos (keynote, masterclass, jornada) se editan en `talkFormats`,
y la cita + credenciales de la sección oscura en `talksApproach`.

### Cambiar el retrato

Sustituye el archivo **`src/img/juanvi.webp`** por otro con el mismo nombre
(se usa en la portada y en «Sobre mí»). Si prefieres otro nombre, actualiza
el `import` en `src/components/Hero.jsx` y `src/pages/SobreMi.jsx`.

### Otros contenidos editables en `site.js`

| Qué                                | Dónde           |
| ---------------------------------- | --------------- |
| Menú de navegación                 | `nav`           |
| Áreas de enfoque (portada)         | `focusAreas`    |
| Framework destacado (portada)      | `framework`     |
| Programas de formación             | `programs`      |
| Recursos (test, guías, plantillas) | `resources`     |
| Biografía, líneas de investigación | `bio`           |
| Columnas del pie                   | `footerLinks`   |
| URL de la newsletter               | `newsletterUrl` |
| URL de LinkedIn                    | `linkedinUrl`   |
| URL del libro / test               | `bookUrl` / `testUrl` |
| Dominio canónico (SEO)             | `siteUrl`       |

### Si cambia el dominio

El dominio `https://jvmanjon.com` está asumido en varios sitios. Para
cambiarlo, busca y reemplaza en:

- `src/data/site.js` → `siteUrl` (canonicals y og:url de cada página)
- `index.html` → Open Graph y JSON-LD
- `public/sitemap.xml`, `public/robots.txt` y `public/llms.txt`

### Paleta y tipografía

Variables CSS en `src/index.css`:

| Variable  | Uso                               | Color     |
| --------- | --------------------------------- | --------- |
| `--cream` | fondo del hero y cabeceras        | `#ece5d7` |
| `--paper` | secciones claras                  | `#fbf9f3` |
| `--ink`   | marino: footer, tarjetas, botones | `#0b1622` |
| `--gold`  | acento dorado                     | `#b0863a` |
| `--tan`   | banda newsletter, tarjetas        | `#d9c8a4` |

---

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → *New Project* → importa el repo.
3. Vercel detecta Vite automáticamente:
   - Build command: `npm run build`
   - Output directory: `dist`
4. *Deploy*. El fichero `vercel.json` ya gestiona el enrutado de la SPA
   (imprescindible para que `/articulos`, `/sobre-mi`, etc. funcionen al
   recargar la página).

Cada `git push` a `main` publica automáticamente una nueva versión.
