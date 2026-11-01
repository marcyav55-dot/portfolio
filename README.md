# Portfolio — Marcus Tshijika Yav

Static site (HTML/CSS/JS, no build step).

## Files
- `index.html` — the portfolio page
- `cv.html` — printable CV (EN/FR), "Download PDF" uses the browser's Save as PDF
- `data.js` — **all editable content**: links, projects, skills, education, languages
- `profile.jpg` — profile photo used in the About section and CV (portrait, ~800x1000)

## Agency positioning
The site presents **TYM Services**, a digital studio founded by Marcus Tshijika Yav. Services are explained in client-friendly language and illustrated with photographic cards:
- Professional websites and online visibility
- School, clinic and business management applications
- Custom web applications
- Database review, cleanup, migration, reporting and backup workflows
- Online shops and e-commerce
- Website maintenance, essential security and IT/network support
- AI integrations and workflow automation

Service photographs are loaded from Unsplash. Replace them with client-approved photos or original project screenshots when available.

## Selected work
- Grace Divine Multiservices — [source repository](https://github.com/marcyav55-dot/Grace_Divine)
- Grace Divine Vercel deployment: https://grace-divine-rust.vercel.app (SSO protection is enabled on the current Vercel project; confirm public access before promoting this as a public demo).

## Edit
- Contact: fill `SITE.email`, `SITE.phone`, `SITE.linkedin` in `data.js` (empty = hidden).
- Add a project: copy an object in `PROJECTS`.
- Add screenshots: put them in `images/` and add entries to `GALLERY` (gallery appears automatically).
- Education / languages: fill `EDUCATION` and `LANGUAGES`.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). No build command, output directory = root.
