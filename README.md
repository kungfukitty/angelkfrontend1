# AngelKellogg SPA (Vite + React + Tailwind)

Production-ready SPA matching Home / About / Brands / Media / Contact + Privacy & Terms + Membership.
- Aesthetic: luxury black & gold, clean serif/sans, subtle animations
- Mouse "light" cursor effect enabled

## Quick Start
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Environment
- `VITE_API_BASE` (backend base URL)
- `VITE_CONTACT_EMAIL` (default: hello@angelkellogg.com)
- `VITE_FTBTB_YOUTUBE_URL`
- `VITE_GOOGLE_DOC_CONTACT_URL`
- `VITE_GOOGLE_DOC_WAITLIST_URL`
- `VITE_GOOGLE_DOC_MEMBERSHIP_URL`

### Optional runtime overrides (no redeploy)
```html
<script>
  window.__CONTACT_EMAIL = "hello@angelkellogg.com";
  window.__FTBTB_YOUTUBE_URL = "https://youtube.com/@ftbtb";
  window.__GOOGLE_DOC_CONTACT_URL = "https://docs.google.com/forms/d/...";
  window.__GOOGLE_DOC_WAITLIST_URL = "https://docs.google.com/forms/d/...";
  window.__GOOGLE_DOC_MEMBERSHIP_URL = "https://docs.google.com/forms/d/...";
</script>
```

## Deploy
- **Vercel**: Framework = Vite; Build = `npm run build`; Output = `dist/`
- **Render (Static)**: Build = `npm run build`; Publish Dir = `dist`
