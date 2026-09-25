# DumbCode Website

This is the repository for the new DumbCode Website. This is where all the information that you could ever need about our mods, the DumbCode Studio, and our team will be posted.

The site is built with [Next.js](https://nextjs.org/) (App Router) and [React](https://react.dev/), written in TypeScript, and styled with [Tailwind CSS](https://tailwindcss.com/). Contributions are welcome — if you find any issues please create an issue outlining the problem and steps to reproduce it.

## Contribution Guide

First, clone the repository.

Second, install deps in the local repository:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

From there you can find your result at [http://localhost:3000](http://localhost:3000). Changes made to the codebase are automatically updated there.

## Project structure

```
app/          # routes (App Router)
components/   # shared UI
data/         # typed content (team, mods, studio info)
lib/          # blog + SEO helpers
_posts/       # blog posts (Markdown with front matter)
styles/       # global styles & syntax highlighting theme
public/       # static assets
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Team Sponsorship

This team is proudly Sponsored by Vercel's [OSS Sponsorship Campaign](https://vercel.com/?utm_source=dumbcode&utm_campaign=oss).

[![powered-by-vercel](https://user-images.githubusercontent.com/14950489/146464394-1f1131ec-7f31-4f92-bbea-4d56fd555f3a.png)](https://vercel.com/?utm_source=dumbcode&utm_campaign=oss)
