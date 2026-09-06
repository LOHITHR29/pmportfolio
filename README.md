# Lohith Regalla Product Portfolio

Recruiter-facing product management portfolio for [lohith.me](https://lohith.me). It presents verified experience, selected product work, independent case studies, and a direct-download resume.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content model

- `data/portfolio.ts` contains experience, education, capabilities, and contact data.
- `data/case-studies.ts` contains case study summaries and detail-page content.
- `public/Lohith-Regalla-Resume.pdf` is the resume used by every download link.

The site uses Next.js App Router and plain responsive CSS. It has no client-side animation dependency or blocking loader.
