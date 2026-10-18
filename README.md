# IdeasDeUnas.com — blog de uñas en español

Sitio estático HTML/CSS/JS, sin dependencias de build ni base de datos. Preparado para GitHub Pages y para conectarlo después a Cloudflare Pages.

## Publicar en GitHub Pages
**Opción más sencilla para que funcionen todas las rutas sin ajustes:** crea un repositorio llamado exactamente `TU-USUARIO.github.io` (sustituye TU-USUARIO por tu nombre de usuario de GitHub). Sube todos los archivos del proyecto a la rama `main`, incluidos `.github/workflows/pages.yml` y `.nojekyll`.

1. En GitHub abre **Settings → Pages**.
2. Selecciona **GitHub Actions** como fuente de publicación.
3. Abre la pestaña **Actions** y espera a que finalice `Deploy static website to GitHub Pages`.
4. Tu web aparecerá en `https://TU-USUARIO.github.io/`.

El workflow prepara y publica solo los archivos del sitio, no el README ni la configuración de GitHub. No necesita `npm install`, un build command, ni secretos.

Si usas un repositorio de proyecto con una URL del tipo `usuario.github.io/nombre-repositorio/`, las rutas absolutas del sitio requieren ajustar el prefijo de ruta o configurar un dominio personalizado. Para un primer despliegue sin complicaciones, utiliza el repositorio `TU-USUARIO.github.io`.

## Conectar más adelante con Cloudflare Pages
1. En Cloudflare abre **Workers & Pages → Create → Pages → Connect to Git**.
2. Conecta el mismo repositorio.
3. Como este sitio ya contiene HTML estático, deja el comando de compilación vacío y utiliza la raíz del repositorio como directorio de salida si el panel ofrece ese modo. Si Cloudflare requiere una carpeta de salida, prepara una carpeta `dist` con los archivos públicos o usa un comando de copia.
4. Añade `ideasdeunas.com` como dominio personalizado en Cloudflare y sigue las instrucciones DNS.

GitHub Pages y Cloudflare Pages pueden servir el mismo sitio desde el repositorio. El dominio personalizado requiere configuración DNS aparte.

## Añadir un artículo nuevo
1. Duplica una carpeta existente en `blog/10-estilos-unas-otono/` y renómbrala, por ejemplo `blog/unas-rojas-navidad/`.
2. Edita el `index.html` duplicado: cambia el título, descripción, contenido, canonical y el enlace de Pinterest.
3. Añade una tarjeta del artículo en `blog/index.html` y en `index.html` si quieres destacarlo en la portada.
4. Actualiza `sitemap.xml` con la nueva URL.
5. Haz commit y push. GitHub Pages publicará los cambios automáticamente.

## Antes de publicar
- Las imágenes actuales son marcadores de demostración con texto, no fotografías reales de manicuras. Sustitúyelas por fotos propias o con licencia que permita el uso previsto.
- Actualiza las URL canónicas y `sitemap.xml` si el dominio final no es `ideasdeunas.com`.
- Revisa las páginas de privacidad, cookies y aviso legal; no constituyen asesoría jurídica.
- No se incluye un formulario de newsletter funcional ni analítica configurada.
- El tráfico y el posicionamiento SEO no están garantizados.

## Pinterest
Crea pines verticales, por ejemplo 1000 × 1500 px, con títulos legibles en móvil. Haz varias composiciones genuinamente diferentes y enlaza cada pin al artículo exacto. Usa fotografías propias o recursos con licencia adecuada.
