// Catálogo de experiencias vigentes. Las specs usan claves de ícono que se
// resuelven en la UI (ver iconMap en la página de Aventura).

export const catalog = [
  {
    id: 1,
    title: "Cabalgata Mini",
    price: 19000,
    priceNote: "por persona",
    image: "/img/foto1.jpg",
    gallery: ["/img/foto1.jpg", "/img/foto8.jpg"],
    description:
      "Paseo de 1 hora por las sierras. Una primera aventura a caballo pensada para todas las edades y niveles de experiencia: ideal para que los más chicos tengan su primer encuentro con los caballos.",
    specs: [
      { icon: "time", title: "Duración", value: "1 hora" },
      { icon: "age", title: "Edad", value: "Todas las edades" },
      { icon: "level", title: "Nivel", value: "Todos los niveles" },
    ],
  },
  {
    id: 2,
    title: "Cabalgata Corta",
    price: 27000,
    priceNote: "por persona",
    image: "/img/foto2.jpg",
    gallery: ["/img/foto2.jpg", "/img/foto6.jpg"],
    description:
      "Paseo de 2 horas a caballo por las sierras, para todos los niveles de experiencia. El tiempo justo para sentir el ritmo del paso, los aromas del monte y las mejores vistas serranas.",
    specs: [
      { icon: "time", title: "Duración", value: "2 horas" },
      { icon: "age", title: "Edad", value: "Niños desde 7 años" },
      { icon: "level", title: "Nivel", value: "Todos los niveles" },
    ],
  },
  {
    id: 3,
    title: "Día de Campo",
    price: 75000,
    priceNote: "por persona",
    image: "/img/foto3.jpg",
    gallery: ["/img/foto3.jpg", "/img/foto4.jpg"],
    description:
      "Paseo de 2 horas a caballo y un Almuerzo de Campo Completo: asado, empanadas, bebida y postre. Luego hay espacio y tiempo libre para disfrutar de caminatas por la estancia o sentarse a tomar unos mates a orillas del arroyo, entre árboles.",
    specs: [
      { icon: "time", title: "Duración", value: "Paseo de 2 horas" },
      {
        icon: "meal",
        title: "Almuerzo completo",
        value: "Asado, empanadas, bebida y postre",
      },
      { icon: "level", title: "Plan", value: "Tiempo libre en la estancia" },
    ],
  },
  {
    id: 4,
    title: "Promo Grupal",
    price: 52000,
    priceNote: "por persona",
    image: "/img/foto7.jpg",
    gallery: ["/img/foto7.jpg", "/img/foto5.jpg"],
    description:
      "Paseo de 1 hora a caballo más un Almuerzo de Campo Simple: 2 empanadas criollas, choripán, bebida y postre. La opción ideal para disfrutar en grupo de un día de campo a buen precio.",
    specs: [
      { icon: "time", title: "Duración", value: "Paseo de 1 hora" },
      {
        icon: "meal",
        title: "Almuerzo simple",
        value: "2 empanadas, choripán, bebida y postre",
      },
      { icon: "group", title: "Modalidad", value: "Pensada para grupos" },
    ],
  },
  {
    id: 5,
    title: "Travesía al Río",
    price: 75000,
    priceNote: "por persona",
    image: "/img/foto4.jpg",
    gallery: ["/img/foto4.jpg", "/img/foto5.jpg"],
    description:
      "Salida travesía: cabalgamos 3 horas hasta el río, donde descansamos y nos divertimos en el agua, y luego emprendemos 3 horas de regreso. Consultá por las opciones con almuerzo incluido.",
    specs: [
      { icon: "time", title: "Duración", value: "3 h ida + 3 h vuelta" },
      { icon: "river", title: "Travesía", value: "Descanso y agua en el río" },
      { icon: "meal", title: "Almuerzo", value: "Opcional · consultanos" },
    ],
  },
];

export const getAdventure = (id) =>
  catalog.find((item) => item.id === parseInt(id, 10));

// Formatea un precio en pesos argentinos: 19000 -> "$19.000".
export const formatPrice = (n) => `$${n.toLocaleString("es-AR")}`;
