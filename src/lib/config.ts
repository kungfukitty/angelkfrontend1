export const CONFIG = {
  API_BASE: (typeof window!=='undefined' && (window as any).__API_BASE) || import.meta.env.VITE_API_BASE || "",
  CONTACT_EMAIL: (typeof window!=='undefined' && (window as any).__CONTACT_EMAIL) || import.meta.env.VITE_CONTACT_EMAIL || "hello@angelkellogg.com",
  FTBTB_YOUTUBE_URL: (typeof window!=='undefined' && (window as any).__FTBTB_YOUTUBE_URL) || import.meta.env.VITE_FTBTB_YOUTUBE_URL || "",
  GOOGLE_DOC_CONTACT_URL: (typeof window!=='undefined' && (window as any).__GOOGLE_DOC_CONTACT_URL) || import.meta.env.VITE_GOOGLE_DOC_CONTACT_URL || "",
  GOOGLE_DOC_WAITLIST_URL: (typeof window!=='undefined' && (window as any).__GOOGLE_DOC_WAITLIST_URL) || import.meta.env.VITE_GOOGLE_DOC_WAITLIST_URL || "",
  GOOGLE_DOC_MEMBERSHIP_URL: (typeof window!=='undefined' && (window as any).__GOOGLE_DOC_MEMBERSHIP_URL) || import.meta.env.VITE_GOOGLE_DOC_MEMBERSHIP_URL || ""
};
export const BLOG = {
  TITLE: (typeof window!=='undefined' && (window as any).__BLOG_TITLE) || import.meta.env.VITE_BLOG_TITLE || "Angel Notes",
};
export const MEDIA = {
  YT_PLAYLIST_ID: (typeof window!=='undefined' && (window as any).__YT_PLAYLIST_ID) || import.meta.env.VITE_YT_PLAYLIST_ID || "",
};
export const ASSETS = {
  SECURE_PREVIEW_CREST_URL: (typeof window!=='undefined' && (window as any).__SECURE_PREVIEW_CREST_URL) || import.meta.env.VITE_SECURE_PREVIEW_CREST_URL || "/crest.svg",
};