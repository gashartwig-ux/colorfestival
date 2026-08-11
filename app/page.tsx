"use client";

import { useEffect, useState } from "react";
import { festivalConfig, type GalleryItem } from "./festival-config";

const experience = [
  { word: "Música", detail: "El pulso que une todo", image: "/media/optimized/foto8.webp" },
  { word: "Sunset", detail: "La tarde se vuelve fiesta", image: "/media/optimized/foto4.webp" },
  { word: "Amigos", detail: "Momentos que quedan", image: "/media/optimized/foto15.webp" },
  { word: "Color", detail: "Una energía imposible de explicar", image: "/media/optimized/foto3.webp" },
  { word: "Verano", detail: "Gualeguaychú en su mejor versión", image: "/media/optimized/foto5.webp" },
];

const faqs = [
  ["¿Cuándo es la próxima edición?", "La fecha todavía no fue confirmada. La publicaremos en esta web y en las redes oficiales."],
  ["¿Dónde se realiza?", "La experiencia tiene como sede Solar del Este, Gualeguaychú, Entre Ríos. La edición queda sujeta a confirmación oficial."],
  ["¿Cuándo salen las entradas?", "Los lotes, precios y canal de venta se informarán únicamente cuando estén confirmados. No compres por enlaces no oficiales."],
  ["¿Cuáles son los horarios y la edad mínima?", "Información pendiente de confirmación para la próxima edición."],
  ["¿Qué puedo llevar?", "Los objetos permitidos y las recomendaciones prácticas se publicarán junto con la información oficial del evento."],
  ["¿Hay estacionamiento?", "Información pendiente de confirmación para la próxima edición."],
  ["¿Qué sucede si llueve?", "La política climática se comunicará con las condiciones oficiales de la próxima edición."],
  ["¿Cómo hago una consulta?", "Podés escribirnos por WhatsApp, Instagram o correo desde los accesos oficiales del sitio."],
];

function trackEvent(name: string, data: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const measuredWindow = window as typeof window & { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };
  measuredWindow.dataLayer = measuredWindow.dataLayer || [];
  measuredWindow.dataLayer.push({ event: name, ...data });
  if (measuredWindow.fbq) measuredWindow.fbq("trackCustom", name, data);
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setVideoOpen(false); setLightbox(null); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ticketAction = festivalConfig.edition.ticketUrl ? {
    href: festivalConfig.edition.ticketUrl,
    label: "Comprar entradas",
  } : { href: "#proxima-edicion", label: "Entradas próximamente" };

  const eventSchema = festivalConfig.edition.confirmed && festivalConfig.edition.dateISO ? {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "Color Festival",
    startDate: festivalConfig.edition.dateISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: festivalConfig.edition.venue, address: `${festivalConfig.edition.city}, Argentina` },
    image: ["https://www.colorfestival.com.ar/media/optimized/foto4.webp"],
    offers: festivalConfig.edition.ticketUrl ? { "@type": "Offer", url: festivalConfig.edition.ticketUrl, availability: "https://schema.org/InStock" } : undefined,
  } : null;

  return (
    <main>
      {eventSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />}
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Color Festival, inicio"><img src="/media/optimized/logo.png" alt="Color Festival" /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú"><span/><span/></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
          <a href="#proxima-edicion" onClick={() => { setMenuOpen(false); trackEvent("navigation_click", { section: "proxima_edicion" }); }}>Próxima edición</a>
          <a href="#experiencia" onClick={() => { setMenuOpen(false); trackEvent("navigation_click", { section: "experiencia" }); }}>Experiencia</a>
          <a href="#galeria" onClick={() => { setMenuOpen(false); trackEvent("navigation_click", { section: "galeria" }); }}>Galería</a>
          <a href="#ubicacion" onClick={() => { setMenuOpen(false); trackEvent("navigation_click", { section: "ubicacion" }); }}>Ubicación</a>
          <a href="#preguntas" onClick={() => { setMenuOpen(false); trackEvent("navigation_click", { section: "preguntas" }); }}>Preguntas</a>
          <a className="nav-ticket mobile-only" href={ticketAction.href} onClick={() => { setMenuOpen(false); trackEvent("ticket_click", { location: "mobile_menu", status: festivalConfig.edition.ticketStatus }); }}>{ticketAction.label}</a>
        </nav>
        <a className="nav-ticket desktop-ticket" href={ticketAction.href} onClick={() => trackEvent("ticket_click", { location: "header", status: festivalConfig.edition.ticketStatus })}>{ticketAction.label}</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-frames" aria-hidden="true"><span className="frame f1"/><span className="frame f2"/><span className="frame f3"/></div>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <p className="edition-pill"><i/> {festivalConfig.edition.confirmed ? festivalConfig.edition.dateDisplay : "Próxima edición · Muy pronto"}</p>
          <img className="hero-logo" src="/media/optimized/logo.png" alt="Color Festival" />
          <h1>La fiesta color<br/><strong>más grande</strong><br/>de Argentina</h1>
          <p className="hero-location">Gualeguaychú · Entre Ríos</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proxima-edicion" onClick={() => trackEvent("edition_interest", { location: "hero" })}>Quiero vivir Color Festival <Arrow /></a>
            <button className="btn btn-ghost" onClick={() => { setVideoOpen(true); trackEvent("video_play", { video: "aftermovie_principal", location: "hero" }); }}>Ver experiencia <span aria-hidden="true">▶</span></button>
          </div>
        </div>
        <a className="scroll-cue" href="#proxima-edicion" aria-label="Ir a próxima edición"><span/> Descubrí la experiencia</a>
        <div className="hero-social">@colorfestival.arg</div>
      </section>

      <section className="edition-section section-pad" id="proxima-edicion">
        <div className="section-kicker">PRÓXIMA EDICIÓN <span>01</span></div>
        <div className="edition-layout">
          <div className="edition-copy"><h2>La próxima explosión<br/><em>de color está en camino.</em></h2><p>Estamos preparando una nueva edición. La fecha, los lotes y el enlace de compra se publicarán únicamente cuando estén confirmados.</p></div>
          <div className="edition-card">
            <div className="edition-card-top"><span>ESTADO ACTUAL</span><i>{festivalConfig.edition.ticketStatus}</i></div>
            <div className="edition-main"><p>PRÓXIMA EDICIÓN</p><strong>{festivalConfig.edition.dateDisplay}</strong><span>{festivalConfig.edition.venue}<br/>{festivalConfig.edition.city}</span></div>
            <div className="countdown-placeholder" aria-label="Cuenta regresiva pendiente de fecha"><div><b>--</b><small>DÍAS</small></div><div><b>--</b><small>HORAS</small></div><div><b>--</b><small>MIN</small></div></div>
            <div className="edition-footer"><span>{festivalConfig.edition.ticketStage}</span><a href={ticketAction.href} onClick={() => trackEvent("ticket_click", { location: "edition_module", status: festivalConfig.edition.ticketStatus })}>{ticketAction.label} <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="experience-intro section-pad"><div className="section-kicker light">LA EXPERIENCIA <span>02</span></div><h2>Cinco palabras.<br/><em>Una sensación.</em></h2><p>No se explica. Se vive junto al río, cuando cae el sol y todo empieza a tener otro color.</p></div>
        <div className="experience-rail">{experience.map((item, index) => <article className="experience-card" key={item.word} style={{backgroundImage:`url(${item.image})`}}><div className="experience-shade"/><span>0{index + 1}</span><div><h3>{item.word}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section className="aftermovie section-pad" id="aftermovie">
        <div className="section-kicker">AFTERMOVIE <span>03</span></div>
        <div className="aftermovie-head"><h2>Volvé a sentirlo.<br/><em>Dale play.</em></h2><p>Un instante alcanza para entender por qué Color Festival vuelve a encontrarnos cada verano.</p></div>
        <button className="movie-stage" onClick={() => { setVideoOpen(true); trackEvent("video_play", { video: "aftermovie_principal", location: "aftermovie" }); }} aria-label="Reproducir aftermovie de Color Festival"><img src="/media/optimized/aftermovie.webp" alt="Af﻿termovie de Color Festival" loading="lazy"/><span className="movie-play">▶</span><div><small>VIDEO OFICIAL</small><strong>Esto es Color Festival</strong></div></button>
        <div className="edition-videos">{festivalConfig.video.editions.map(video => <a href={video.url} target="_blank" rel="noreferrer" key={video.label} onClick={() => trackEvent("video_click", { video: video.label })}>{video.label} <Arrow /></a>)}<a className="channel-link" href={festivalConfig.contact.youtube} target="_blank" rel="noreferrer" onClick={() => trackEvent("youtube_click", { location: "aftermovie" })}>Canal oficial <Arrow /></a></div>
      </section>

      <section className="history section-pad">
        <div className="history-image"><img src="/media/optimized/foto1.webp" alt="Comunidad de Color Festival" loading="lazy"/><span>DESDE HACE<br/>MÁS DE 8 AÑOS</span></div>
        <div className="history-copy"><div className="section-kicker light">NUESTRA HISTORIA <span>04</span></div><h2>Cambia cada edición.<br/><em>La esencia permanece.</em></h2><p>Lo que comenzó como una idea entre amigos creció edición tras edición. Sumó música, artistas, momentos inolvidables y una comunidad que vuelve a encontrarse.</p><p>Color Festival es ese recuerdo compartido que regresa cada verano: un encuentro frente al río, con la misma pasión del primer día.</p><blockquote>Más que una fiesta.<br/>Una experiencia que queda.</blockquote></div>
      </section>

      <section className="gallery-section section-pad" id="galeria">
        <div className="section-kicker">GALERÍA <span>05</span></div>
        <div className="gallery-head"><h2>Un verano.<br/><em>Mil recuerdos.</em></h2></div>
        <div className="gallery-grid">{festivalConfig.gallery.map((item, index) => <button className={`gallery-item gallery-item-${index % 6}`} key={item.src} onClick={() => { setLightbox(item); trackEvent("gallery_open"); }}><img src={item.src} alt={item.alt} loading="lazy"/><span>Ver foto <i>+</i></span></button>)}</div>
        <a className="gallery-more" href={festivalConfig.contact.galleryDrive} target="_blank" rel="noreferrer">Ver archivo completo en Google Drive <Arrow /></a>
      </section>

      <section className="location section-pad" id="ubicacion">
        <div className="location-copy"><div className="section-kicker light">UBICACIÓN <span>06</span></div><h2>Solar del Este.<br/><em>Donde empieza la magia.</em></h2><p>Un escenario frente al río donde la playa, el sunset, la música y el color se encuentran.</p><div className="location-facts"><span><b>CIUDAD</b>Gualeguaychú</span><span><b>PROVINCIA</b>Entre Ríos</span><span><b>PAÍS</b>Argentina</span></div><a className="btn btn-primary" href={festivalConfig.contact.maps} target="_blank" rel="noreferrer" onClick={() => trackEvent("location_click", { location: "location_section" })}>Cómo llegar <Arrow /></a></div>
        <div className="map-wrap"><iframe title="Mapa de Solar del Este, Gualeguaychú" src="https://www.google.com/maps?q=Solar%20del%20Este%20Gualeguaych%C3%BA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><span>SOLAR DEL ESTE · GUALEGUAYCHÚ</span></div>
      </section>

      <section className="faq section-pad" id="preguntas">
        <div className="faq-title"><div className="section-kicker">INFORMACIÓN ÚTIL <span>07</span></div><h2>Todo lo que<br/><em>necesitás saber.</em></h2><p>La información no confirmada está identificada. Actualizaremos esta sección junto con el anuncio oficial.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2,"0")}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="community section-pad">
        <img src="/media/optimized/foto12.webp" alt="Comunidad de Color Festival" loading="lazy"/>
        <div className="community-shade"/>
        <div className="community-copy"><p>LA PRÓXIMA HISTORIA EMPIEZA ACÁ</p><h2>¿Querés enterarte<br/>antes que nadie?</h2><span>Seguinos o escribinos para recibir las novedades oficiales de la próxima edición.</span><div><a className="btn btn-primary" href={festivalConfig.contact.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("instagram_click", { location: "community" })}>Seguir en Instagram <Arrow /></a><a className="btn btn-light" href={`${festivalConfig.contact.whatsapp}?text=Hola%2C%20quiero%20recibir%20novedades%20de%20la%20pr%C3%B3xima%20edici%C3%B3n%20de%20Color%20Festival.`} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "community", intent: "edition_updates" })}>Avisarme por WhatsApp <Arrow /></a></div></div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/media/optimized/logo.png" alt="Color Festival"/><p>La Fiesta Color<br/>Más Grande de Argentina.</p></div>
        <div><h3>Explorá</h3><a href="#proxima-edicion">Próxima edición</a><a href="#experiencia">Experiencia</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a></div>
        <div><h3>Contacto</h3><a href={`mailto:${festivalConfig.contact.email}`}>{festivalConfig.contact.email}</a><a href={festivalConfig.contact.whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })}>WhatsApp</a><a href={festivalConfig.contact.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("instagram_click", { location: "footer" })}>Instagram</a><a href={festivalConfig.contact.youtube} target="_blank" rel="noreferrer">YouTube</a></div>
        <div><h3>Ubicación</h3><p>Solar del Este<br/>Gualeguaychú, Entre Ríos<br/>Argentina</p></div>
        <div className="footer-bottom"><span>© 2026 Color Festival</span><span>Todos los derechos reservados</span><span>Privacidad · Condiciones</span></div>
      </footer>

      {videoOpen && <div className="modal" role="dialog" aria-modal="true" aria-label="Af﻿termovie Color Festival"><button className="modal-close" onClick={() => setVideoOpen(false)} aria-label="Cerrar video">×</button><div className="video-modal"><iframe src={`https://www.youtube.com/embed/${festivalConfig.video.mainId}?autoplay=1&rel=0`} title="Esto es Color Festival" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/></div></div>}
      {lightbox && <div className="modal" role="dialog" aria-modal="true" aria-label="Fotografía ampliada"><button className="modal-close" onClick={() => setLightbox(null)} aria-label="Cerrar fotografía">×</button><img className="lightbox-image" src={lightbox.src} alt={lightbox.alt}/></div>}
    </main>
  );
}
