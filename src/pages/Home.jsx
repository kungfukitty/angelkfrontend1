import React, { useEffect } from 'react';
import { CONFIG, ASSETS } from '../lib/config.ts';
export default function Home(){
  const products = [
    { name: 'From the Block Podcast', url: (CONFIG.FTBTB_YOUTUBE_URL || 'https://youtube.com'), blurb: 'Crypto, culture, and building your digital empire.' },
    { name: 'ForeverDocs', url: 'https://foreverdocs.io', blurb: 'Blockchain-powered document protection.' },
    { name: 'BRGR Collective', url: 'https://brgrcollective.com', blurb: 'Empowering women via tech education.' }
  ];
  useEffect(()=>{ if (typeof AOS!=='undefined') AOS.refresh(); },[]);
  return (
    <section className="space-y-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.12)]" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 md:px-10 py-14 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Angel Kellogg</h1>
          <p className="mt-4 md:mt-6 text-[#dcdcdc] text-lg md:text-xl max-w-2xl">Attention-first brands with real-world impact—built across media, tech and community.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/brands" className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium bg-[#d4af37] text-black hover:bg-[#d4af37]/90">Explore the Ecosystem</a>
            <a href="/membership" className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium border border-white/15 hover:bg-white/5">Membership</a>
            <a href="/media" className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium border border-white/15 hover:bg.white/5">Media Kit</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.name} className="border border-white/10 bg-black/20 p-6 rounded-2xl hover:border-[#d4af37]/40 hover:shadow-lg transition-all" data-aos="fade-up">
            <h3 className="text-xl font-light mb-2">{p.name}</h3>
            <p className="text-[#b8b8b8] text-sm">{p.blurb}</p>
            <div className="mt-4">
              <a className="text-[#b8b8b8] text-xs tracking-widest hover:text-[#d4af37]" href={p.url} target="_blank" rel="noreferrer">VISIT SITE ↗</a>
            </div>
          </div>
        ))}
      </div>
      {/* Secure Document Preview with Family Crest */}
      <div className="border border-white/10 bg-black/20 p-6 rounded-2xl overflow-hidden" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={ASSETS.SECURE_PREVIEW_CREST_URL} alt="Family Crest" className="w-40 h-40 object-contain rounded-xl border border-white/10 bg-black/40" />
          <div className="flex-1">
            <h3 className="text-xl font-light mb-2">Secure Document Preview</h3>
            <p className="text-[#b8b8b8] text-sm">A visual watermark + cryptographic fingerprinting flow for sensitive family records. Preview with confidence before sharing or notarizing on-chain.</p>
            <div className="mt-4">
              <a className="text-[#b8b8b8] text-xs tracking-widest hover:text-[#d4af37]" href="https://foreverdocs.io" target="_blank" rel="noreferrer">OPEN IN FOREVERDOCS ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}