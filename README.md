# net-lab

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_t5J4uGz7NjzwXgqETFA0hlF1zLL7)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

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
