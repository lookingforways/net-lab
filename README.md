# net-lab

Proyecto de [Next.js](https://nextjs.org) creado con [v0](https://v0.app).

## Creado con v0

Este repositorio está vinculado a un proyecto de [v0](https://v0.app). El proyecto original se puede seguir desarrollando desde el enlace de abajo: v0 publica los cambios directamente en el repositorio.

[Continuar en v0 →](https://v0.app/chat/projects/prj_t5J4uGz7NjzwXgqETFA0hlF1zLL7)

## Primeros pasos

Ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. Puedes editar la página principal en `app/page.tsx`; se actualiza automáticamente.

## Más información

- [Documentación de Next.js](https://nextjs.org/docs)
- [Aprende Next.js](https://nextjs.org/learn)
- [Documentación de v0](https://v0.app/docs)

## Despliegue en Enhance

Sitio **100 % estático** (Next.js con `output: 'export'` y `trailingSlash: true`), publicado en `netlab.aulaciber.top` mediante *Desplegar desde GitHub*. No necesita ningún proceso Node en ejecución.

| Ajuste | Valor |
| --- | --- |
| Script de compilación | `npx --yes pnpm@12.3.4 install --frozen-lockfile && npx pnpm@12.3.4 build` |
| Directorio de publicación | `out` |
| Runtime | Ninguno |
| Variables de entorno | ninguna |

Requisitos del entorno de compilación: Node.js 20.9 o superior (Next.js 16). Cada ruta se genera como `<ruta>/index.html` dentro de `out/`.

## Autor

**Jesús Sanabria** — Estudiante de ciberseguridad en FUSALMO. Autor original de net-lab.

- GitHub: [github.com/jess300605](https://github.com/jess300605)
- Proyecto original: [github.com/jess300605/net-lab](https://github.com/jess300605/net-lab)

Esta copia se adapta como sitio estático para el curso de Ciberseguridad de FUSALMO (aulaciber.top). Si reutilizas o modificas el proyecto, mantén la atribución al autor original.
