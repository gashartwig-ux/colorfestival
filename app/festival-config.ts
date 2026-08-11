export const festivalConfig = {
  edition: {
    confirmed: false,
    label: "Próxima edición",
    dateISO: "",
    dateDisplay: "Fecha a confirmar",
    venue: "Solar del Este",
    city: "Gualeguaychú, Entre Ríos",
    ticketStatus: "Próximamente",
    ticketUrl: "",
    ticketStage: "Lotes aún no publicados",
  },
  contact: {
    email: "colorfestival.arg@gmail.com",
    whatsapp: "https://wa.me/5493446652483",
    instagram: "https://www.instagram.com/colorfestival.arg/",
    youtube: "https://www.youtube.com/@ColorFestivalArgentina",
    galleryDrive: "https://drive.google.com/drive/folders/15Qs-b7B79BTDn6UulqdqrBzwJsXMrGzC?usp=drive_link",
    maps: "https://www.google.com/maps/search/?api=1&query=Solar%20del%20Este%20Gualeguaych%C3%BA",
  },
  video: {
    mainId: "V4N3hHILeBI",
    editions: [
      { label: "Edición 2026", url: "https://youtube.com/shorts/5d3HxcrUp2w" },
      { label: "Edición 2025", url: "https://youtube.com/shorts/XYGEyIRDV5g" },
      { label: "Edición 2024", url: "https://youtube.com/shorts/ge9NrkVc6D8" },
    ],
  },
  gallery: [
    { src: "/media/optimized/foto4.webp", alt: "Vista aérea del público de Color Festival" },
    { src: "/media/optimized/foto3.webp", alt: "Artistas y público durante Color Festival" },
    { src: "/media/optimized/foto8.webp", alt: "Escenario de Color Festival frente a la multitud" },
    { src: "/media/optimized/foto2.webp", alt: "Show en vivo durante Color Festival" },
    { src: "/media/optimized/foto5.webp", alt: "Amigas disfrutando Color Festival" },
    { src: "/media/optimized/foto15.webp", alt: "Grupo de amigos en Color Festival" },
    { src: "/media/optimized/foto6.webp", alt: "Música y performance en Color Festival" },
    { src: "/media/optimized/foto7.webp", alt: "Bailarina durante el sunset de Color Festival" },
    { src: "/media/optimized/foto13.webp", alt: "Comunidad de Color Festival posando con el logo" },
  ],
};

export type GalleryItem = (typeof festivalConfig.gallery)[number];
