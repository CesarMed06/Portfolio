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
    repo: 'https://github.com/CesarMed06/bikes-for-refugees',
  },
]

export const categoryLabels = {
  ai: { es: 'IA y datos', en: 'AI & data' },
  web: { es: 'Web', en: 'Web' },
  mods: { es: 'Apps y mods', en: 'Apps & mods' },
}

export const brandLabels = {
  modrinth: { es: 'Modrinth', en: 'Modrinth' },
  curseforge: { es: 'CurseForge', en: 'CurseForge' },
  demo: { es: 'Demo', en: 'Demo' },
}
