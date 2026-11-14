const t = (es, en) => ({ es, en })

export const projects = [
  {
    slug: 'scoutvision',
    title: 'ScoutVision',
    category: 'ai',
    featured: true,
    image: '/projects/scoutvision.webp',
    alt: {
      es: 'Listado de jugadores de ScoutVision con buscador y filtros',
      en: 'ScoutVision player list with search and filters',
    },
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Llama 3'],
    desc: {
      es: 'Plataforma de scouting de fútbol sobre datos de StatsBomb: métricas avanzadas, mapas de calor, comparación de jugadores e informes generados con Llama 3.',
      en: 'Football scouting platform built on StatsBomb data: advanced metrics, heatmaps, player comparison and reports generated with Llama 3.',
    },
    metric: { es: 'Proyecto de fin de grado', en: 'Final degree project' },
    links: [],
    caseStudy: {
      problem: t(
        'Los datos de scouting de fútbol de nivel profesional son de pago y cerrados. Un aficionado o un club pequeño no tiene forma de comparar jugadores con métricas reales.',
        'Professional-level football scouting data is paid and closed. A fan or a small club has no way to compare players using real metrics.',
      ),
      work: t(
        [
          'Preparé los datos abiertos de StatsBomb en Python: limpieza de eventos y cálculo de métricas por jugador y por partido.',
          'Expuse los datos con una API en FastAPI, para que el navegador no tuviera que calcular nada.',
          'Construí la interfaz en React y TypeScript: buscador, filtros, mapas de calor y comparador de dos jugadores.',
          'Añadí informes en texto generados con Llama 3 a partir de las métricas de cada jugador.',
        ],
        [
          'Processed the StatsBomb open data in Python: event cleaning and per-player, per-match metric calculation.',
          'Exposed the data through a FastAPI backend so the browser never runs the heavy calculations.',
          'Built the interface in React and TypeScript: search, filters, heatmaps and a two-player comparison view.',
          'Added written reports generated with Llama 3 from each player metrics.',
        ],
      ),
      decisions: t(
        [
          'StatsBomb open data: es gratis y viene a nivel de evento, que es lo que permite sacar pases, tiros y zonas.',
          'Separar API y cliente: los cálculos se hacen una vez en el servidor y la web solo los pinta.',
        ],
        [
          'StatsBomb open data: it is free and event-level, which is what makes passes, shots and zones computable.',
          'Separating API and client: calculations run once on the server and the web app only renders them.',
        ],
      ),
      result: t(
        'Proyecto de fin de grado del ciclo de DAW. No hay demo pública porque habría que dejar levantados la API y el modelo; el código completo está en GitHub.',
        'Final degree project for the web development course. There is no public demo because the API and the model would have to stay online; the full code is on GitHub.',
      ),
    },
    repo: 'https://github.com/CesarMed06/ScoutVision',
  },
  {
    slug: 'village-diplomacy',
    title: 'Village Diplomacy',
    category: 'mods',
    featured: true,
    image: '/projects/village-diplomacy.webp',
    alt: {
      es: 'Captura del mod Village Diplomacy mostrando el panel de reputación en Minecraft',
      en: 'Village Diplomacy screenshot showing the reputation panel in Minecraft',
    },
    tags: ['Java', 'Forge', 'Fabric', 'NeoForge', 'Quilt'],
    desc: {
      es: 'Mod de Minecraft de diplomacia con aldeanos: reputación, tratados y eventos. Publicado en CurseForge y Modrinth para 1.20.1 y 1.21.1 con cuatro loaders.',
      en: 'Minecraft mod about villager diplomacy: reputation, treaties and events. Published on CurseForge and Modrinth for 1.20.1 and 1.21.1 across four loaders.',
    },
    metric: { es: '5.000+ descargas', en: '5,000+ downloads' },
    links: [
      { brand: 'modrinth', href: 'https://modrinth.com/mod/village-diplomacy' },
      { brand: 'curseforge', href: 'https://www.curseforge.com/minecraft/mc-mods/village-diplomacy' },
    ],
    caseStudy: {
      problem: t(
        'En Minecraft los aldeanos son decorado: se puede comerciar con ellos, pero no hay ninguna relación detrás. Da igual cómo los trates.',
        'In Minecraft villagers are scenery: you can trade with them, but there is no relationship behind it. It makes no difference how you treat them.',
      ),
      work: t(
        [
          'Sistema de reputación por aldea que sube o baja según lo que haces y cambia precios y diálogos.',
          'Tratados y eventos que desbloquean ventajas si mantienes buena relación.',
          'Versiones para 1.20.1 y 1.21.1 en Forge, Fabric, NeoForge y Quilt sobre una capa de código común.',
          'Publicación en CurseForge y Modrinth, con changelog por versión y respuesta en los comentarios.',
        ],
        [
          'Per-village reputation that moves up or down with your actions and changes prices and dialogue.',
          'Treaties and events that unlock perks when the relationship is good.',
          'Builds for 1.20.1 and 1.21.1 across Forge, Fabric, NeoForge and Quilt on a shared code layer.',
          'Released on CurseForge and Modrinth, with a changelog per version and replies in the comments.',
        ],
      ),
      decisions: t(
        [
          'Cuatro loaders porque el público de mods está repartido entre Forge y Fabric; obligar a cambiar de instancia habría costado la mitad de las descargas.',
          'Dos plataformas de descarga porque cada comunidad busca en la suya.',
        ],
        [
          'Four loaders because the mod audience is split between Forge and Fabric; forcing people to change instance would have cost half the downloads.',
          'Two download platforms because each community searches on its own.',
        ],
      ),
      result: t(
        '5.075 descargas entre CurseForge y Modrinth, 22 seguidores y 57 comentarios. La versión 1.5.0 salió en noviembre de 2026.',
        '5,075 downloads across CurseForge and Modrinth, 22 followers and 57 comments. Version 1.5.0 shipped in November 2026.',
      ),
    },
    repo: 'https://github.com/CesarMed06/Village-Diplomacy',
  },
  {
    slug: 'sailtrim',
    title: 'SailTrim',
    category: 'ai',
    featured: true,
    image: '/projects/sailtrim.webp',
    alt: {
      es: 'Portada de SailTrim con el titular Domina el trimado',
      en: 'SailTrim landing page with the headline Domina el trimado',
    },
    tags: ['React', 'TypeScript', 'Tailwind', 'PWA'],
    desc: {
      es: 'Asistente de trimado de velas: recomienda ajustes según viento y rumbo y explica el porqué de cada cambio. Instalable como PWA.',
      en: 'Sail trimming assistant: recommends settings from wind and course and explains the reason behind each change. Installable as a PWA.',
    },
    metric: { es: 'Demo en vivo', en: 'Live demo' },
    links: [{ brand: 'demo', label: { es: 'Demo', en: 'Demo' }, href: 'https://sail-trim.vercel.app/' }],
    caseStudy: {
      problem: t(
        'Trimado es ajustar las velas al viento y al rumbo. Los manuales sueltan reglas sin decir por qué, y el que empieza no sabe qué cambia cada cabo.',
        'Sail trim means setting the sails to the wind and course. Manuals list rules without saying why, and a beginner cannot tell what each line changes.',
      ),
      work: t(
        [
          'Formulario de viento y rumbo que devuelve el ajuste recomendado de cada vela y cabo.',
          'Cada recomendación va con su explicación: qué cambia y por qué.',
          'PWA instalable: una sola base de código para móvil y escritorio, sin pasar por una tienda.',
        ],
        [
          'Wind and course form that returns the recommended setting for each sail and line.',
          'Every recommendation comes with its explanation: what changes and why.',
          'Installable PWA: one codebase for mobile and desktop, no app store in between.',
        ],
      ),
      decisions: t(
        [
          'PWA en vez de app nativa: instalación desde el navegador y una sola base de código.',
          'Tailwind para maquetar rápido una interfaz que es casi toda formularios y tarjetas.',
        ],
        [
          'PWA instead of a native app: install from the browser and keep one codebase.',
          'Tailwind to move fast on an interface that is mostly forms and cards.',
        ],
      ),
      result: t(
        'Demo abierta en sail-trim.vercel.app y código con licencia MIT en GitHub.',
        'Live demo at sail-trim.vercel.app and MIT-licensed code on GitHub.',
      ),
    },
    repo: 'https://github.com/CesarMed06/SailTrim',
  },
  {
    slug: 'nervelink',
    title: 'NerveLink',
    category: 'mods',
    image: '/projects/nervelink.webp',
    alt: { es: 'Logotipo del mod NerveLink', en: 'NerveLink mod logo' },
    tags: ['Java', 'Discord', 'Webhooks'],
    desc: {
      es: 'Mod de Minecraft que envía los eventos del servidor a un canal de Discord por webhook: entradas, salidas, muertes y avisos.',
      en: 'Minecraft mod that pushes server events to a Discord channel through webhooks: joins, leaves, deaths and alerts.',
    },
    metric: { es: 'Publicado en dos plataformas', en: 'Published on two platforms' },
    links: [
      { brand: 'modrinth', href: 'https://modrinth.com/mod/nervelink' },
      { brand: 'curseforge', href: 'https://www.curseforge.com/minecraft/mc-mods/nervelink' },
    ],
    caseStudy: {
      problem: t(
        'Saber quién entra, sale o muere en un servidor de Minecraft obliga a tener la consola delante.',
        'Knowing who joins, leaves or dies on a Minecraft server means keeping the console open.',
      ),
      work: t(
        [
          'Mod que escucha los eventos del servidor y los manda a un canal de Discord por webhook.',
          'Avisos separados para entradas, salidas, muertes y mensajes.',
          'Publicado en CurseForge y Modrinth para las versiones en uso.',
        ],
        [
          'Mod that listens to server events and pushes them to a Discord channel through a webhook.',
          'Separate alerts for joins, leaves, deaths and messages.',
          'Released on CurseForge and Modrinth for the versions in use.',
        ],
      ),
      decisions: t(
        [
          'Webhook en vez de bot: no hay que alojar nada ni mantener un token vivo, el servidor solo hace una petición HTTP.',
        ],
        [
          'Webhook instead of a bot: nothing to host and no token to keep alive, the server just makes one HTTP request.',
        ],
      ),
      result: t(
        '48 descargas en CurseForge y código MIT en GitHub.',
        '48 CurseForge downloads and MIT-licensed code on GitHub.',
      ),
    },
    repo: 'https://github.com/CesarMed06/NerveLink',
  },
  {
    slug: 'shirtfinder',
    title: 'ShirtFinder',
    category: 'web',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673327/SHIRTFINDER_achfw6.png',
    alt: { es: 'Portada de ShirtFinder', en: 'ShirtFinder landing page' },
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini'],
    desc: {
      es: 'Buscador de camisetas de fútbol con catálogo filtrable, valoraciones, favoritos, foro y chatbot con IA.',
      en: 'Football shirt finder with filterable catalogue, ratings, favourites, forum and AI chatbot.',
    },
    links: [],
    caseStudy: {
      problem: t(
        'Buscar una camiseta de fútbol concreta obliga a saltar entre tiendas, anuncios y mil pestañas.',
        'Finding one specific football shirt means jumping between shops, listings and a dozen tabs.',
      ),
      work: t(
        [
          'Catálogo filtrable por equipo, temporada y talla, con valoraciones y favoritos.',
          'Foro para comentar camisetas y chatbot con Gemini que responde dudas del catálogo.',
          'Backend en Node con MongoDB para usuarios, camisetas y valoraciones.',
        ],
        [
          'Catalogue filterable by team, season and size, with ratings and favourites.',
          'Forum to discuss shirts and a Gemini chatbot that answers questions about the catalogue.',
          'Node backend with MongoDB for users, shirts and ratings.',
        ],
      ),
      decisions: t(
        ['Base de datos propia en MongoDB en vez de una API de terceros: el catálogo y las valoraciones son lo que aporta la web.'],
        ['A MongoDB database of its own instead of a third-party API: the catalogue and ratings are the value here.'],
      ),
      result: t(
        'Código en GitHub. Sin demo pública: necesita la base de datos y la clave de Gemini configuradas.',
        'Code on GitHub. No public demo: it needs the database and the Gemini key configured.',
      ),
    },
    repo: 'https://github.com/CesarMed06/ShirtFinder',
  },
  {
    slug: 'goaltasker',
    title: 'GoalTasker',
    category: 'web',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/GOALTASKER_wgkuzk.png',
    alt: { es: 'Panel de tareas de GoalTasker', en: 'GoalTasker task dashboard' },
    tags: ['React', 'CSS', 'LocalStorage'],
    desc: {
      es: 'App de gestión de tareas y objetivos relacionados con el fútbol, con seguimiento visual del progreso.',
      en: 'Football goal and task management app with visual progress tracking.',
    },
    metric: { es: 'Demo en vivo', en: 'Live demo' },
    links: [{ brand: 'demo', label: { es: 'Demo', en: 'Demo' }, href: 'https://goal-tasker.vercel.app/' }],
    caseStudy: {
      problem: t(
        'Las apps de tareas no entienden de fútbol: no puedes llevar el seguimiento de un entrenamiento junto a tus objetivos.',
        'Task apps know nothing about football: you cannot track training next to your goals.',
      ),
      work: t(
        [
          'Objetivos y tareas con progreso visual.',
          'Todo guardado en el navegador con localStorage: sin registro ni servidor.',
        ],
        [
          'Goals and tasks with visual progress.',
          'Everything stored in the browser with localStorage: no sign-up, no server.',
        ],
      ),
      result: t('Demo abierta en goal-tasker.vercel.app.', 'Live demo at goal-tasker.vercel.app.'),
    },
    repo: 'https://github.com/CesarMed06/GoalTasker',
  },
  {
    slug: 'bikes-for-refugees',
    title: 'Bikes for Refugees',
    category: 'web',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/BIKES-FOR-REFUGEES_muskbp.png',
    alt: { es: 'Portada de Bikes for Refugees', en: 'Bikes for Refugees landing page' },
    tags: ['HTML', 'CSS'],
    desc: {
      es: 'Réplica visual de la web de Bikes for Refugees Scotland usando solo HTML y CSS.',
      en: 'Visual replica of the Bikes for Refugees Scotland website using plain HTML and CSS.',
    },
    metric: { es: 'Demo en vivo', en: 'Live demo' },
    links: [{ brand: 'demo', label: { es: 'Demo', en: 'Demo' }, href: 'https://bikes-for-refugees-six.vercel.app/' }],
    caseStudy: {
      problem: t(
        'Ejercicio de maquetación: reproducir una web real sin frameworks, para medir el CSS a mano.',
        'A layout exercise: rebuild a real website without frameworks, to measure hand-written CSS.',
      ),
      work: t(
        [
          'Réplica de la portada y las secciones de Bikes for Refugees Scotland solo con HTML y CSS.',
          'Sin JavaScript: estructura semántica, flexbox y grid.',
        ],
        [
          'Rebuilt the homepage and sections of Bikes for Refugees Scotland with plain HTML and CSS.',
          'No JavaScript: semantic structure, flexbox and grid.',
        ],
      ),
      result: t('Demo abierta en bikes-for-refugees-six.vercel.app.', 'Live demo at bikes-for-refugees-six.vercel.app.'),
    },
    repo: 'https://github.com/CesarMed06/bikes-for-refugees',
  },
]

export const categoryLabels = {
  ai: { es: 'IA y datos', en: 'AI & data' },
  web: { es: 'Web', en: 'Web' },
  mods: { es: 'Apps y mods', en: 'Apps & mods' },
}

export const tagColors = {
  React: '#61dafb', TypeScript: '#3178c6', FastAPI: '#009688', Python: '#3776ab',
  'Llama 3': '#7c5cff', Java: '#e76f00', Forge: '#d9a441', Fabric: '#c9a98a',
  NeoForge: '#f0932b', Quilt: '#c153d0', Discord: '#5865f2', Webhooks: '#7ea6d9',
  'Node.js': '#68a063', MongoDB: '#47a248', Gemini: '#4285f4', Tailwind: '#38bdf8',
  PWA: '#8b5cf6', CSS: '#8fb6e8', HTML: '#e34f26', LocalStorage: '#d6b13d',
}

export const brandLabels = {
  modrinth: { es: 'Modrinth', en: 'Modrinth' },
  curseforge: { es: 'CurseForge', en: 'CurseForge' },
  demo: { es: 'Demo', en: 'Demo' },
}
