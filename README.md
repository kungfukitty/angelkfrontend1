# AngelKellogg SPA (Vite + React + Tailwind)

- Euphoria removed everywhere.
- Secure Document Preview section added on Home with Family Crest image.
- New routes: `/blog` and `/media/vlog`.
- Mouse "light" effect retained.
- Config via env or runtime window overrides.

## Env
VITE_API_BASE=
VITE_CONTACT_EMAIL=hello@angelkellogg.com
VITE_FTBTB_YOUTUBE_URL=
VITE_GOOGLE_DOC_CONTACT_URL=
VITE_GOOGLE_DOC_WAITLIST_URL=
VITE_GOOGLE_DOC_MEMBERSHIP_URL=
VITE_YT_PLAYLIST_ID=
VITE_SECURE_PREVIEW_CREST_URL=/crest.svg
VITE_BLOG_TITLE=Angel Notes

## Deploy
Vercel: Vite preset; build `npm run build`; output `dist/`.
Render (Static): build `npm run build`; publish `dist`.
