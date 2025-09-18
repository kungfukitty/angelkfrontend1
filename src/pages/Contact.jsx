import React from 'react';
import { CONFIG } from '../lib/config.ts';
export default function Contact(){
  return (
    <section className="space-y-6 max-w-xl">
      <h1 className="text-3xl">Contact</h1>
      <p className="text-[#b8b8b8]">Email: <a className="text-[#d4af37] underline underline-offset-4" href={`mailto:${CONFIG.CONTACT_EMAIL}`}>{CONFIG.CONTACT_EMAIL}</a></p>
      {CONFIG.GOOGLE_DOC_CONTACT_URL && (
        <a className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold bg-[#d4af37] text-black hover:opacity-90" href={CONFIG.GOOGLE_DOC_CONTACT_URL} target="_blank" rel="noreferrer">
          Open Contact Form ↗
        </a>
      )}
      {CONFIG.GOOGLE_DOC_WAITLIST_URL && (
        <a className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold border border-white/15 hover:bg-white/5" href={CONFIG.GOOGLE_DOC_WAITLIST_URL} target="_blank" rel="noreferrer">
          Join Waiting List ↗
        </a>
      )}
    </section>
  );
}
