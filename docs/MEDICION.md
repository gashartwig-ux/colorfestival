# Eventos de medición preparados

El sitio envía eventos a `window.dataLayer` y, si existe Meta Pixel, también mediante `fbq`.

| Evento | Acción medida |
| --- | --- |
| `ticket_click` | Clic en entradas desde header, menú o módulo de edición |
| `edition_interest` | Interés desde el CTA principal del hero |
| `video_play` | Apertura del aftermovie principal |
| `video_click` | Acceso a videos de otras ediciones |
| `youtube_click` | Acceso al canal oficial |
| `gallery_open` | Apertura de una fotografía |
| `location_click` | Clic en “Cómo llegar” |
| `instagram_click` | Clic hacia Instagram |
| `whatsapp_click` | Clic hacia WhatsApp |
| `navigation_click` | Navegación entre secciones principales |

## Activación pendiente

1. Incorporar el identificador real de Google Analytics 4 en `app/layout.tsx`.
2. Incorporar el identificador real de Meta Pixel en `app/layout.tsx`.
3. Verificar el dominio en Google Search Console.
4. Definir consentimiento y política de privacidad definitiva.
5. Marcar `ticket_click`, `edition_interest` y `whatsapp_click` como conversiones según la estrategia de campaña.

No se incluyeron identificadores inventados ni se activó remarketing sin consentimiento.
