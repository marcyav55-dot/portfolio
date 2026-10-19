# Portfolio — Marcus Tshijika Yav

Static site (HTML/CSS/JS, no build step).

## Files
- `index.html` — the portfolio page
- `cv.html` — printable CV (EN/FR), "Download PDF" uses the browser's Save as PDF
- `data.js` — **all editable content**: links, projects, skills, education, languages
- `images/profile.jpg` — profile photo (portrait, ~800x1000)

## Edit
- Contact: fill `SITE.email`, `SITE.phone`, `SITE.linkedin` in `data.js` (empty = hidden).
- Add a project: copy an object in `PROJECTS`.
- Add screenshots: put them in `images/` and add entries to `GALLERY` (gallery appears automatically).
- Education / languages: fill `EDUCATION` and `LANGUAGES`.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). No build command, output directory = root.
