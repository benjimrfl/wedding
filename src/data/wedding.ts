// Todo el contenido editable de la web está aquí.

export const couple = {
  initials: ['B', 'N'] as const,
};

export const event = {
  // Hora peninsular de verano (CEST, UTC+2): la cuenta atrás es correcta desde cualquier zona horaria.
  dateISO: '2027-04-30T19:00:00+02:00',
  dateLong: 'Viernes, 30 de abril de 2027',
  dateShort: '30 · 04 · 2027',
  time: '19:00 h',
};

export const venue = {
  name: 'Vega de Montalvo',
  city: 'Camas, Sevilla',
  // Coordenadas de la entrada (en Google Maps: mantén pulsado el punto y copia los números).
  coords: { lat: 37.4009598917332, lng: -6.0202223 },
  description:
    'Ceremonia, cóctel, cena y fiesta: todo será en el mismo lugar, así que solo tendréis que llegar una vez y disfrutar.',
};

// Textos del carrusel. Las fotos van en src/assets/carousel/ (se ordenan por nombre de archivo: 01.jpg, 02.jpg...).
export const carouselSlides = [
  { eyebrow: 'Nos casamos', title: 'B & N', text: 'Y nos encantaría que estuvieras con nosotros.' },
  { eyebrow: 'La fecha', title: '30 de abril de 2027', text: 'Viernes · Ceremonia a las 19:00 h' },
  { eyebrow: 'El lugar', title: 'Vega de Montalvo', text: 'Camas, Sevilla' },
  { eyebrow: 'Hasta entonces', title: 'Guarda la fecha', text: 'Desliza para descubrir todos los detalles.' },
];

// icon: nombre de Iconify (ph = Phosphor) o un SVG propio de src/icons/ (p. ej. "rings").
export const itinerary = [
  { time: '19:00', title: 'Ceremonia', detail: 'Exterior', icon: 'rings' },
  { time: '20:30', title: 'Cóctel', detail: 'Exterior', icon: 'ph:champagne-light' },
  { time: '23:00', title: 'Cena', detail: 'Interior', icon: 'ph:fork-knife-light' },
  { time: '00:00', title: 'Baile nupcial', detail: '', icon: 'ph:music-notes-light' },
  { time: '00:15', title: 'Fiesta', detail: 'y baile', icon: 'ph:martini-light' },
  { time: '01:30', title: 'Recena', detail: '', icon: 'ph:call-bell-light' },
  { time: '03:00', title: 'Final', detail: '', icon: 'ph:confetti-light' },
];

export const faq = [
  {
    q: '¿A qué hora debo llegar?',
    a: 'La ceremonia empieza puntual a las 19:00 h. Os recomendamos llegar sobre las 18:30 h para aparcar con calma y acomodaros.',
  },
  {
    q: '¿Pueden venir niños?',
    a: 'Por confirmar.',
  },
  {
    q: '¿Cuál es el código de vestimenta?',
    a: 'Formal. Los colores de la boda son el verde oscuro, el negro, el blanco y el dorado. Las damas de honor irán de [color por definir]. Os pedimos, por favor, que el blanco se lo dejéis a la novia.',
  },
  {
    q: '¿Hay aparcamiento? ¿Habrá autobús?',
    a: 'No habrá servicio de autobús. Todo el evento se celebra en el mismo sitio, que cuenta con aparcamiento. Si vas a conducir, alcohol cero: organizaos con conductor o taxi para la vuelta.',
  },
  {
    q: '¿Hará frío?',
    a: 'A finales de abril las noches en el campo refrescan bastante. Os recomendamos traer un abrigo, chal o chaqueta para la noche.',
  },
  {
    q: '¿Hay alguna norma especial?',
    a: 'Solo una: disfrutar. Tenéis más detalles sobre fotos, mensajes en vídeo y alergias en la sección de avisos.',
  },
];

export const gifts = {
  // Ojo: lo que pongas aquí será público en el repositorio y en la web.
  iban: 'ES00 0000 0000 0000 0000 0000',
  holder: 'B & N',
  amazonUrl: 'https://www.amazon.es/',
};
