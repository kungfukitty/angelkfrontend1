import React from 'react';
import { CONFIG } from '../lib/config.ts';
export default function Media(){
  return (
    <section className="space-y-6">
      <h1 className="text-3xl">Media</h1>
      {CONFIG.FTBTB_YOUTUBE_URL ? (
        <a className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold bg-[#d4af37] text-black hover:opacity-90" href={CONFIG.FTBTB_YOUTUBE_URL} target="_blank" rel="noreferrer">
          Watch FTBTB on YouTube ↗
        </a>
      ) : <p className="text-[#b8b8b8]">Add <code>VITE_FTBTB_YOUTUBE_URL</code> to link your YouTube channel.</p>}
    </section>
  );
}
