# Tarun Portfolio (React + Vite + Tailwind)

Multi-page developer portfolio with React Router, Tailwind CSS, and Framer Motion.

## 💻 Quick Start
```bash
npm install
npm run dev
```

## 🧱 Pages
- `/` Home
- `/about`
- `/projects`
- `/resume` (downloads and embeds `public/resume.pdf`)
- `/contact`

## 🚀 Build
```bash
npm run build
npm run preview
```

## 🌐 Deploy Options

### Vercel (easiest)
- Push to GitHub
- Import repo at https://vercel.com/new -> Framework: **Vite**
- Deploy

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
- If deploying to `https://<user>.github.io/<repo>/`, set `base` in `vite.config.js` to `'/<repo>/'` (uncomment and edit).
- Build with `npm run build`
- Serve the `dist` folder using Pages:
  - Create branch `gh-pages`, or enable Pages to deploy from `dist` with an Action.
  - Or use an action like `peaceiris/actions-gh-pages` to publish `dist` to `gh-pages`.

## 📝 Personalize
- Replace links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Update `src/projects.data.js` with your projects
- Replace `public/resume.pdf` with your real resume
- Update colors in `tailwind.config.js` if needed
