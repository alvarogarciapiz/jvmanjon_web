// Contenido editable del sitio. Cambia estos textos sin tocar los componentes.

/* Dominio canónico del sitio (usado en SEO: canonical, og:url…).
 * Si cambia, actualizar también los ficheros estáticos de /public
 * (sitemap.xml, robots.txt, llms.txt) y el JSON-LD de index.html. */
export const siteUrl = 'https://jvmanjon.com'

export const newsletterUrl = 'https://jvmanjon.substack.com'
export const linkedinUrl = 'https://www.linkedin.com/in/jvmanjon/'
export const bookUrl =
  'https://www.worldscientific.com/worldscibooks/10.1142/11584'
export const testUrl = 'https://innovation-index.anvil.app'

export const nav = [
  { label: 'Ideas', to: '/#ideas' },
  { label: 'Frameworks', to: '/#frameworks' },
  { label: 'Artículos', to: '/articulos' },
  { label: 'Conferencias', to: '/conferencias' },
  { label: 'Formación', to: '/formacion' },
  { label: 'Recursos', to: '/recursos' },
  { label: 'Sobre mí', to: '/sobre-mi' },
]

export const focusAreas = [
  { icon: 'brain', title: 'Aprendizaje', suffix: 'Aumentado' },
  { icon: 'bulb', title: 'Pensamiento', suffix: 'Aumentado' },
  { icon: 'pencil', title: 'Creatividad', suffix: 'Aumentada' },
  { icon: 'compass', title: 'Decisión', suffix: 'Aumentada' },
  { icon: 'people', title: 'Liderazgo', suffix: 'Aumentado' },
  { icon: 'rocket', title: 'Innovación', suffix: 'Aumentada' },
]

/*
 * Artículos. Los tres primeros aparecen destacados en la portada.
 *
 * - `href` apunta por ahora a la newsletter; sustituir por la URL
 *   de cada artículo cuando estén publicados.
 * - `image` es opcional. Para añadir una ilustración real:
 *     1. Guarda el archivo en src/img/articulos/
 *     2. Impórtalo arriba:  import miImagen from '../img/articulos/mi-imagen.webp'
 *     3. Añade al artículo: image: miImagen
 *   Si no hay `image`, se muestra un placeholder con el tono indicado en `tone`.
 */
export const articles = [
  {
    category: 'Pensamiento',
    tone: 'dark',
    title: 'La externalización de la cognición: ¿estamos delegando demasiado?',
    excerpt:
      'Reflexiones sobre cómo la IA está cambiando nuestra relación con el pensamiento profundo.',
    date: 'Junio 2026',
    readTime: '8 min',
    href: newsletterUrl,
  },
  {
    category: 'Aprendizaje',
    tone: 'tan',
    title: 'Aprender con IA: de la información al conocimiento',
    excerpt:
      'Claves para transformar la IA en un aliado de nuestro aprendizaje profundo y significativo.',
    date: 'Junio 2026',
    readTime: '6 min',
    href: newsletterUrl,
  },
  {
    category: 'Innovación',
    tone: 'dark',
    title: 'De potenciar a aumentar: el nuevo paradigma de la IA',
    excerpt:
      'Por qué el objetivo ya no es hacer lo mismo más rápido, sino lograr capacidades antes imposibles.',
    date: 'Mayo 2026',
    readTime: '7 min',
    href: newsletterUrl,
  },
  {
    category: 'Estrategia',
    tone: 'cream',
    title: 'La estrategia ya no se planifica: se aprende',
    excerpt:
      'En entornos que cambian más rápido que los planes, la ventaja competitiva es la velocidad de aprendizaje.',
    date: 'Mayo 2026',
    readTime: '9 min',
    href: newsletterUrl,
  },
  {
    category: 'Liderazgo',
    tone: 'tan',
    title: 'Liderar equipos aumentados',
    excerpt:
      'Las competencias directivas que marcan la diferencia cuando las personas trabajan con IA.',
    date: 'Abril 2026',
    readTime: '6 min',
    href: newsletterUrl,
  },
  {
    category: 'Decisión',
    tone: 'dark',
    title: 'Criterio humano en la era del algoritmo',
    excerpt:
      'Cómo decidir mejor con IA sin renunciar a la responsabilidad ni al juicio propio.',
    date: 'Abril 2026',
    readTime: '7 min',
    href: newsletterUrl,
  },
  {
    category: 'Creatividad',
    tone: 'cream',
    title: 'Creatividad combinatoria: lo que la IA no puede imaginar por ti',
    excerpt:
      'El valor de las conexiones inesperadas en un mundo de respuestas promedio.',
    date: 'Marzo 2026',
    readTime: '5 min',
    href: newsletterUrl,
  },
  {
    category: 'Aprendizaje',
    tone: 'dark',
    title: 'El aula aumentada: enseñar cuando la IA responde antes que el profesor',
    excerpt:
      'Un nuevo contrato pedagógico para la educación en la era de la inteligencia artificial.',
    date: 'Febrero 2026',
    readTime: '10 min',
    href: newsletterUrl,
  },
  {
    category: 'Pensamiento',
    tone: 'tan',
    title: 'El pensamiento crítico como músculo',
    excerpt:
      'Entrenar el criterio en tiempos de respuestas instantáneas: hábitos y prácticas concretas.',
    date: 'Enero 2026',
    readTime: '6 min',
    href: newsletterUrl,
  },
]

export const framework = {
  category: 'Framework destacado',
  title: 'Modelo de Capacidades Aumentadas',
  excerpt:
    'Un marco para entender cómo la IA amplifica nuestras capacidades cognitivas, creativas y estratégicas.',
  href: newsletterUrl,
}

/* --- Conferencias --- */
export const talks = [
  {
    title: 'La IA está redefiniendo las capacidades humanas y organizativas',
    description:
      'La conferencia insignia. Por qué el reto no es adoptar herramientas, sino desarrollar las capacidades personales y organizativas que este nuevo tiempo exige.',
    audience: 'Dirección general · Eventos corporativos',
  },
  {
    title: 'Innovación: cómo está transformando las organizaciones',
    description:
      'El papel de la tecnología en la estrategia empresarial, el emprendimiento y los nuevos modelos de negocio: qué hacen distinto las organizaciones que innovan de verdad.',
    audience: 'Dirección general · Estrategia · Emprendimiento',
  },
  {
    title: 'IA práctica para acelerar el proceso innovador',
    description:
      'Cómo incorporar la inteligencia artificial de forma práctica en cada fase de la innovación: de la detección de oportunidades al caso de uso real.',
    audience: 'Equipos de innovación · Producto · Tecnología',
  },
  {
    title: 'Enseñar y aprender en la era de la IA',
    description:
      'El impacto de la inteligencia artificial en la educación: los retos del docente y del alumno ante el nuevo paradigma, con la ética y la responsabilidad como brújula.',
    audience: 'Educación · Universidades · Formación de docentes',
  },
]

/* Cómo trabajo: enfoque y credenciales que avalan las intervenciones */
export const talksApproach = {
  quote:
    'Mi objetivo es que cada intervención sea concreta, muy práctica, orientada a casos de uso reales y que genere transformación en quienes participan.',
  credentials: [
    'Doctor (PhD) y profesor universitario',
    'LinkedIn Top Voice en innovación',
    'Autor de «Technological Innovation: Strategy and Management» (World Scientific)',
    'Consultor de organizaciones públicas y privadas',
  ],
}

export const talkFormats = [
  {
    icon: 'mic',
    title: 'Keynote',
    detail: '45–60 minutos',
    text: 'Una conferencia inspiradora para abrir o cerrar un evento con ideas que se quedan.',
  },
  {
    icon: 'bulb',
    title: 'Masterclass',
    detail: '2–3 horas',
    text: 'Sesión en profundidad que combina ideas, casos y conversación con la audiencia.',
  },
  {
    icon: 'people',
    title: 'Jornada de trabajo',
    detail: 'Medio día · In company',
    text: 'Conferencia y taller práctico para aterrizar las ideas en los retos de tu organización.',
  },
]

/* --- Formación --- */
export const programs = [
  {
    title: 'Capacidades aumentadas',
    tag: 'Programa insignia',
    audience: 'Profesionales y equipos que quieren trabajar de otra manera con IA.',
    format: 'Programa en directo · Sesiones prácticas + materiales',
    points: [
      'Un mapa personal de capacidades: dónde puede aumentarte la IA y dónde no',
      'Un método para integrar la IA en el trabajo diario con criterio',
      'Práctica guiada con casos reales de tu ámbito profesional',
    ],
  },
  {
    title: 'IA para la dirección',
    tag: 'Ejecutivo',
    audience: 'Comités de dirección y responsables de área.',
    format: 'Taller ejecutivo · Medio día o jornada completa',
    points: [
      'Una visión estratégica de la IA sin humo ni tecnicismos',
      'Decisiones, riesgos y gobernanza de la IA en la organización',
      'Una hoja de ruta de adopción realista para tu contexto',
    ],
  },
  {
    title: 'Enseñar y aprender con IA',
    tag: 'Educación',
    audience: 'Docentes, equipos directivos y responsables de formación.',
    format: 'Taller práctico · 4–8 horas',
    points: [
      'Rediseño de actividades y evaluación en la era de la IA',
      'Uso responsable y con propósito pedagógico en el aula',
      'Herramientas seleccionadas y criterios para elegirlas',
    ],
  },
  {
    title: 'Formación a medida',
    tag: 'In company',
    audience: 'Organizaciones con retos específicos.',
    format: 'Diseño a medida · Duración según objetivos',
    points: [
      'Diagnóstico previo de necesidades y nivel de partida',
      'Contenidos y casos adaptados a tu sector y a tus equipos',
      'Acompañamiento posterior para consolidar el cambio',
    ],
  },
]

/* --- Recursos ---
 * Si un recurso tiene `href` y `cta`, la tarjeta muestra un enlace directo.
 * Si no, se entiende que se publica a través de la newsletter.
 */
export const resources = [
  {
    icon: 'compass',
    type: 'Test',
    title: 'Test de mentalidad innovadora',
    text: 'Evalúa tu perfil innovador en unos minutos y descubre en qué capacidades puedes crecer.',
    href: testUrl,
    cta: 'Hacer el test',
  },
  {
    icon: 'book',
    type: 'Guía',
    title: 'Primeros pasos: integra la IA en tu flujo de trabajo',
    text: 'Una guía práctica para pasar de probar herramientas a trabajar, de verdad, de otra manera.',
  },
  {
    icon: 'chat',
    type: 'Prompts',
    title: 'Biblioteca de prompts para pensar mejor',
    text: 'Colección de prompts para aprender, escribir, decidir y crear con más profundidad.',
  },
  {
    icon: 'layout',
    type: 'Plantilla',
    title: 'Canvas de capacidades aumentadas',
    text: 'La plantilla del modelo, lista para usar en talleres y sesiones de equipo.',
  },
]

/* --- Sobre mí --- */
export const bio = {
  title: 'Profesor, investigador y divulgador.',
  highlights: [
    'Doctor (PhD)',
    'LinkedIn Top Voice en innovación',
    'Autor en World Scientific',
  ],
  paragraphs: [
    'Soy Juan Vicente García Manjón, doctor (PhD), profesor universitario, investigador y divulgador. Mi trabajo se mueve desde hace años en la intersección entre la innovación, el aprendizaje y la tecnología, con una misión clara: ayudar a personas y organizaciones a innovar, aprender y decidir mejor en la era de la IA.',
    'Compagino la docencia y la investigación con la consultoría para organizaciones públicas y privadas y con la divulgación. Soy autor del libro «Technological Innovation: Strategy and Management» (World Scientific) y de artículos y proyectos sobre innovación, educación y tecnología, y he sido reconocido como LinkedIn Top Voice en innovación.',
    'Creo en una tecnología con propósito. No se trata de usar la IA: se trata de desarrollar nuevas capacidades para pensar con más profundidad, aprender con más sentido, crear con más ambición y decidir con más criterio.',
    'En esta web encontrarás mis ideas, frameworks y artículos, además de las conferencias y los programas de formación que imparto. Si quieres acompañarme en el camino, la mejor forma es la newsletter.',
  ],
  scopes: [
    {
      icon: 'cap',
      title: 'Docencia e investigación',
      text: 'Universidad, publicaciones y proyectos de investigación aplicada.',
    },
    {
      icon: 'mic',
      title: 'Conferencias y divulgación',
      text: 'Keynotes, masterclasses y la newsletter donde comparto mis ideas.',
    },
    {
      icon: 'rocket',
      title: 'Consultoría y formación',
      text: 'Programas y acompañamiento a organizaciones que quieren transformarse.',
    },
  ],
  research: {
    intro:
      'Mis líneas de investigación giran en torno a la innovación y a la relación entre tecnología, aprendizaje y organizaciones.',
    lines: [
      'Innovación corporativa y personal',
      'Inteligencia artificial y digitalización',
      'Educación y aprendizaje continuo',
      'Tecnología en los sistemas educativos',
      'Impacto organizacional de la IA',
      'Design thinking, liderazgo y cambio estratégico',
    ],
    book: {
      label: 'Libro',
      title: 'Technological Innovation: Strategy and Management',
      publisher: 'World Scientific',
      text: 'Un manual sobre estrategia y gestión de la innovación tecnológica: del análisis de oportunidades a la construcción de una capacidad innovadora sostenible.',
      href: bookUrl,
      cta: 'Ver el libro',
    },
  },
}

/* --- Footer --- */
export const footerLinks = [
  {
    icon: 'mic',
    to: '/conferencias',
    title: 'Conferencias',
    text: 'Ideas que inspiran y transforman organizaciones y personas.',
    cta: 'Ver conferencias',
  },
  {
    icon: 'cap',
    to: '/formacion',
    title: 'Formación',
    text: 'Programas y talleres para desarrollar capacidades en la era de la IA.',
    cta: 'Ver formación',
  },
  {
    icon: 'book',
    to: '/recursos',
    title: 'Recursos',
    text: 'Guías, prompts, plantillas y mapas para aplicar la IA con propósito.',
    cta: 'Explorar recursos',
  },
  {
    icon: 'person',
    to: '/sobre-mi',
    title: 'Sobre mí',
    text: 'Profesor, investigador y divulgador apasionado por el aprendizaje y la innovación.',
    cta: 'Conocer más',
  },
]
