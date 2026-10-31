# Portfolio — Marcus Tshijika Yav

Static site (HTML/CSS/JS, no build step).

## Files
- `index.html` — the portfolio page
- `cv.html` — printable CV (EN/FR), "Download PDF" uses the browser's Save as PDF
- `data.js` — **all editable content**: links, projects, skills, education, languages
- `profile.jpg` — profile photo used in the About section and CV (portrait, ~800x1000)

## Services
The portfolio presents client-facing services in plain language: professional websites, custom management tools for schools/clinics/businesses, web applications, data organisation, maintenance, essential security and AI-powered features. Technical tools remain visible as supporting details.

## Edit
- Contact: fill `SITE.email`, `SITE.phone`, `SITE.linkedin` in `data.js` (empty = hidden).
- Add a project: copy an object in `PROJECTS`.
- Add screenshots: put them in `images/` and add entries to `GALLERY` (gallery appears automatically).
- Education / languages: fill `EDUCATION` and `LANGUAGES`.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). No build command, output directory = root.
