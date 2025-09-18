import React from 'react';
import { CONFIG } from '../lib/config.ts';
export default function Membership(){
  const tiers = [
    { name: "Explorer", price: "$47", period: "/month", blurb: "Perfect for getting started", features: ["ForeverDocs Starter", "FTBTB community", "Monthly newsletter"], cta: "Start Exploring" },
    { name: "Elite", price: "$197", period: "/month", blurb: "Full access + premium benefits", features: ["ForeverDocs Professional", "FTBTB VIP", "Priority access to events"], cta: "Go Elite", popular: true },
    { name: "Sovereign", price: "$997", period: "/month", blurb: "Ultimate access", features: ["Everything in Elite", "Enterprise features", "Private strategy calls"], cta: "Become Sovereign" }
  ];
  return (
    <section className="space-y-10">
      <header className="text-center space-y-3">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-300 to-purple-300 bg-clip-text text-transparent">Ecosystem Membership</h1>
        <p className="text-[#dcdcdc] text-lg">One membership. Three brands. Unlimited potential.</p>
        {CONFIG.GOOGLE_DOC_MEMBERSHIP_URL && (
          <a href={CONFIG.GOOGLE_DOC_MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold bg-[#d4af37] text-black hover:opacity-90">Apply / Join</a>
        )}
      </header>
      <div className="grid lg:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className={`border rounded-3xl p-8 bg-black/30 border-white/10 ${t.popular ? 'border-yellow-500 shadow-2xl' : ''}`}>
            <div className="text-center space-y-2 mb-4">
              <h3 className="text-2xl font-bold">{t.name}</h3>
              <div><span className="text-4xl font-extrabold">{t.price}</span><span className="text-[#b8b8b8]">{t.period}</span></div>
              <p className="text-[#b8b8b8]">{t.blurb}</p>
            </div>
            <ul className="space-y-3 mb-6">{t.features.map((f,i)=><li key={i} className="flex gap-2"><span>✔</span><span className="text-[#dcdcdc]">{f}</span></li>)}</ul>
            <a href={CONFIG.GOOGLE_DOC_MEMBERSHIP_URL || '#'} target={CONFIG.GOOGLE_DOC_MEMBERSHIP_URL ? '_blank' : '_self'} className="w-full inline-flex items-center justify-center py-3 rounded-2xl font-bold bg-[#d4af37] text-black hover:opacity-90">{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}