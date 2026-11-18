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

## Editing the Content

All evidence entries live in `src/data/evidence.ts`. Each entry can include a `sourceUrl` (the main source link), optional `relatedLinks`, and an optional `contestedNote` that appears as a "Scholarly context" box on the card. The category counts and the entry numbers on the page update automatically.

## Publishing to GitHub Pages (simple steps)

Your site address will be: **https://sowninteractive.github.io/ShroudofTurin/**

1. **Create the repository.** On GitHub (signed in as `SownInteractive`), click **New repository**. Name it exactly `ShroudofTurin`, keep it **Public**, and do not add a README. Click **Create repository**.
2. **Upload the files.** Unzip this project. The easiest way is [GitHub Desktop](https://desktop.github.com/): choose *Add local repository* (or *Create new repository*) pointing at the unzipped folder, then **Commit to main** and **Publish repository**. This includes the hidden `.github` folder that does the deploying. If you use the website's *Upload files* button instead, make sure the `.github/workflows/deploy.yml` file ends up in the repo.
3. **Turn on Pages.** In the repo, go to **Settings → Pages**, and under **Build and deployment**, set **Source** to **GitHub Actions**.
4. **Wait about two minutes.** Open the **Actions** tab and watch the *Deploy to GitHub Pages* run turn green. Your site is then live at the address above. If step 3 was done after the first run, click the run and choose **Re-run all jobs**.

After that, every time you push changes to `main`, the site updates itself.

To preview locally first: `pnpm install` then `pnpm dev`.

## License

This project is dedicated to defending the authentic historical, forensic, and physical evidence documenting the Passion, Death, and bodily Resurrection of Jesus Christ.
