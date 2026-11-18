# The Shroud of Turin — Empirical Evidence Compendium

A compendium of 33 lines of evidence drawn from published scientific studies and historical sources, spanning optics, forensic pathology, laser physics, genomics, archaeology, and historical custody.

## Features

- **33 Evidence Points** organized into 6 thematic categories
- **Search & Filter** across all evidence, forensics, sources, and scripture
- **Source Attribution** links to original papers or primary sources, plus related studies on each card
- **Scholarly Context notes** on contested findings, including challenges to and defenses of the 1988 radiocarbon dating
- **Scripture References** integrated throughout
- **Responsive Design** working on mobile, tablet, and desktop
- **Sophisticated Hover States** with refined micro-interactions

## Tech Stack

- React 19 + TypeScript
- Vite build tool
- Tailwind CSS
- React Router (hash routing for static hosting)
- Radix UI components (shadcn/ui)

## Getting Started

```bash
pnpm install
pnpm dev        # Start development server
pnpm build      # Build for production (outputs to dist/)
pnpm preview    # Preview the production build locally
```

## Deployment (GitHub Pages)

1. Push this project to a GitHub repository's `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

The site will be live at `https://<username>.github.io/<repo-name>/`.

The build uses relative asset paths and hash-based routing, so it works under any repository name or a custom domain without extra configuration.

## License

This project is dedicated to defending the authentic historical, forensic, and physical evidence documenting the Passion, Death, and bodily Resurrection of Jesus Christ.
