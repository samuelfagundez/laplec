// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el enlace de Instagram aportado directamente por el cliente
// (ver /data/contacto.json).

export const content = {
  name: "L'Aplec",
  shortName: "L'Aplec",
  tagline: 'Restaurante de tapas y cocina valenciana en Ciutat Vella, Valencia',
  description:
    "L'Aplec es un restaurante de tapas y cocina valenciana en pleno barrio del Carmen, en Ciutat Vella (Valencia), con una carta que apuesta por el producto fresco de mercado: alcachofas y calamares fritos, almejas al perejil, pulpo a la brasa y unas patatas bravas con dos salsas muy comentadas. Un local sencillo, de ambiente informal y cercano, con cocina a la vista y más de mil opiniones en Google. Igual de bien para una comida rápida entre semana que para una cena con amigos el fin de semana.",
  metaDescription:
    "Restaurante de tapas y cocina valenciana en el Carmen, Ciutat Vella (Valencia). Producto fresco de mercado y más de 1.000 opiniones en Google con 4,5 estrellas.",
  keywords: [
    "L'Aplec",
    'Ciutat Vella',
    'El Carmen',
    'Valencia',
    'restaurante de tapas',
    'cocina valenciana',
    'tapas Valencia',
    'restaurante cerca de mí',
  ],
  priceRange: '20 € - 30 €',
  priceRangeDisplay: '20 € – 30 € por persona',
  cuisine: 'Cocina valenciana y tapas',

  rating: { value: 4.5, count: 1073, countDisplay: '1.073 reseñas' },
  highlights: [
    'Cocina tradicional valenciana con producto fresco, elaborado al momento en la cocina abierta.',
    'Más de 1.000 opiniones en Google con una valoración media de 4,5 estrellas.',
    'Ambiente informal y cercano, apto para grupos grandes y familias con niños.',
    'En pleno barrio del Carmen, ideal para quien busca una experiencia gastronómica auténticamente valenciana.',
  ],

  address: {
    streetAddress: 'Carrer de Roteros, 9',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46003',
    addressCountry: 'ES',
    full: 'Carrer de Roteros, 9, Ciutat Vella, 46003 València, Valencia',
  },
  geo: { lat: 39.478936999999995, lng: -0.37695419999999996 },

  phone: '+34 696 11 99 86',
  phoneDisplay: '696 11 99 86',
  whatsappNumber: '34696119986',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/laplec/',

  social: {
    instagram: 'https://www.instagram.com/laplec_valencia/',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '14:00 – 16:00, 21:00 – 23:00' },
    { day: 'Miércoles', hours: '14:00 – 16:00, 21:00 – 23:00' },
    { day: 'Jueves', hours: '14:00 – 16:00, 21:00 – 23:00' },
    { day: 'Viernes', hours: '14:00 – 16:00, 21:00 – 23:00' },
    { day: 'Sábado', hours: '14:00 – 16:00, 21:00 – 23:00' },
    { day: 'Domingo', hours: '14:00 – 17:00' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '14:00',
      closes: '16:00',
    },
    {
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '21:00',
      closes: '23:00',
    },
    { dayOfWeek: ['Sunday'], opens: '14:00', closes: '17:00' },
  ],

  gallery: [
    {
      src: '/gallery/laplec-pulpo-brasa.jpg',
      alt: "Pulpo a la brasa con puré de patata de L'Aplec",
    },
    {
      src: '/gallery/laplec-fachada-carrer-roteros.jpg',
      alt: "Fachada de L'Aplec en la Carrer de Roteros, Ciutat Vella, Valencia",
    },
    {
      src: '/gallery/laplec-patatas-bravas.jpg',
      alt: "Patatas bravas con alioli y salsa brava de L'Aplec",
    },
    {
      src: '/gallery/laplec-almejas-perejil.jpg',
      alt: "Almejas al perejil servidas en L'Aplec",
    },
    {
      src: '/gallery/laplec-alcachofas-fritas.jpg',
      alt: "Alcachofas fritas de la carta de L'Aplec",
    },
    {
      src: '/gallery/laplec-chipirones-fritos.jpg',
      alt: "Chipirones fritos con limón en L'Aplec",
    },
    {
      src: '/gallery/laplec-boquerones-fritos.jpg',
      alt: "Boquerones fritos con limón de L'Aplec",
    },
    {
      src: '/gallery/laplec-sepia-plancha.jpg',
      alt: "Sepia a la plancha con salsa verde en L'Aplec",
    },
    {
      src: '/gallery/laplec-calamares-fritos.jpg',
      alt: "Calamares fritos con limón de L'Aplec",
    },
    {
      src: '/gallery/laplec-tarta-postre.jpg',
      alt: "Tarta de queso y tarta de la casa de postre en L'Aplec",
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent("L'Aplec, Carrer de Roteros 9, 46003 València") +
    '&hl=es&z=16&output=embed',
  mapLinkUrl: 'https://maps.app.goo.gl/D2H8gkSATmtQMiDY6',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de L'Aplec y tengo una consulta."
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de L'Aplec y me gustaría hacer una reserva."

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
