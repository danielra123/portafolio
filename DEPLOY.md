# Despliegue en Vercel

Guía paso a paso para publicar este portafolio (Next.js 15) en Vercel a partir del repositorio en GitHub.

## 1. Requisitos previos

1. Ten el repositorio ya subido a GitHub (rama `main`).
2. Crea una cuenta en [vercel.com](https://vercel.com) — puedes registrarte directamente con tu cuenta de GitHub.

## 2. Importar el repositorio

1. Entra a [vercel.com/new](https://vercel.com/new).
2. Autoriza a Vercel a acceder a tu cuenta de GitHub si es la primera vez.
3. En la lista de repositorios, busca **`portafolio`** y haz clic en **Import**.

## 3. Configuración del proyecto (detección automática)

Vercel reconoce automáticamente que es un proyecto Next.js y precompleta:

- **Framework Preset:** Next.js
- **Build Command:** `next build` (equivalente a `npm run build`)
- **Output Directory:** `.next` (gestionado internamente por el adaptador de Next.js)
- **Install Command:** `npm install`

No necesitas cambiar nada de esto. Haz clic en **Deploy** y espera a que termine el build (1-2 minutos).

## 4. Redespliegue automático con cada push

Una vez importado el proyecto, Vercel queda conectado al repositorio:

1. Cada `git push` a la rama `main` dispara automáticamente un nuevo despliegue de **producción** en tu dominio `*.vercel.app`.
2. Cada push a cualquier otra rama, o cada Pull Request abierto contra `main`, genera un **Preview Deployment** con una URL única — útil para revisar cambios antes de fusionarlos a `main`.
3. Puedes ver el estado de cada despliegue (build en curso, éxito, error y logs) en la pestaña **Deployments** del proyecto en el dashboard de Vercel.

No necesitas hacer nada manual: basta con seguir hackeando localmente y haciendo `git push`.

## 5. Cambiar el subdominio `.vercel.app`

Por defecto Vercel asigna algo como `portafolio-xxxx.vercel.app`. Para personalizarlo:

1. Entra al proyecto en el dashboard de Vercel.
2. Ve a **Settings → Domains**.
3. En el dominio `*.vercel.app` que aparece, haz clic en **Edit** (o añade uno nuevo con **Add**).
4. Escribe el subdominio que quieras, por ejemplo `daniel-ramirez.vercel.app`, y confirma. Si ya está tomado, Vercel te avisará y deberás elegir otro.

## 6. Conectar un dominio propio

Si más adelante compras un dominio propio (ej. `danielramirez.dev`):

1. Ve a **Settings → Domains** en el proyecto.
2. Escribe tu dominio completo (ej. `danielramirez.dev` o `www.danielramirez.dev`) en el campo **Add** y confirma.
3. Vercel te mostrará los registros DNS que debes configurar en tu proveedor de dominio (donde lo compraste):
   - Para un dominio raíz (`danielramirez.dev`): un registro **A** apuntando a `76.76.21.21`.
   - Para un subdominio (`www.danielramirez.dev`): un registro **CNAME** apuntando a `cname.vercel-dns.com`.
4. Entra al panel de tu proveedor de dominio, agrega esos registros exactamente como indica Vercel.
5. Espera la propagación DNS (de minutos a un par de horas). Vercel detecta el cambio automáticamente y emite el certificado SSL (HTTPS) sin que tengas que hacer nada más.
6. Verifica el estado en **Settings → Domains**: cuando el dominio muestre un check verde, ya está activo y sirviendo el sitio con HTTPS.

## 7. Variables de entorno (si en el futuro las necesitas)

Este proyecto no usa variables de entorno actualmente. Si en el futuro agregas alguna (por ejemplo, para un formulario de contacto con un servicio externo):

1. Ve a **Settings → Environment Variables** en el proyecto de Vercel.
2. Agrega la clave y el valor, seleccionando en qué entornos aplica (Production, Preview, Development).
3. Vuelve a desplegar (`git push` o **Redeploy** desde el dashboard) para que tomen efecto.
