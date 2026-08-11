# Cómo actualizar Color Festival 2.0

Todo el contenido variable está centralizado en `app/festival-config.ts`.

## Próxima edición

Dentro de `edition`:

- Cambiar `confirmed` a `true` cuando la edición esté confirmada.
- Completar `dateISO` en formato ISO, por ejemplo `2027-01-16T18:00:00-03:00`.
- Escribir la fecha visible en `dateDisplay`.
- Confirmar `venue` y `city`.
- Actualizar `ticketStatus` y `ticketStage`.
- Pegar el enlace oficial de compra en `ticketUrl`.

Mientras `ticketUrl` esté vacío, el sitio mostrará “Entradas próximamente” y no enviará a un vendedor externo.

## Fotografías

1. Optimizar la imagen en WebP, preferentemente hasta 1600 px y menos de 300 KB.
2. Guardarla en `public/media/optimized/`.
3. Agregarla al arreglo `gallery` con edición y texto alternativo.

## Videos

- Cambiar `video.mainId` por el identificador del video principal de YouTube.
- Agregar o quitar ediciones dentro de `video.editions`.

## Enlaces y contacto

Actualizar Instagram, YouTube, WhatsApp, correo, Google Drive y Maps dentro de `contact`.

## Preguntas frecuentes

Las respuestas editables están en el arreglo `faqs` de `app/page.tsx`. Reemplazar cada texto pendiente solamente con información confirmada.
