import React from 'react';
export default function Brands(){
  const items = [
    { name: 'ForeverDocs', url: 'https://foreverdocs.io', blurb: 'Digital vault for family docs & legacy.' },
    { name: 'From the Block to the Blockchain', url: '#', blurb: 'Education media & podcast, FTBTB.' },
    { name: 'BRGR Collective', url: 'https://brgrcollective.com', blurb: 'Community & resources for women.' }
  ];
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(i => (
        <div key={i.name} className="border border-white/10 bg-black/20 p-6 rounded-2xl hover:border-[#d4af37]/40 hover:shadow-lg transition-all">
          <h3 className="text-xl font-light mb-2">{i.name}</h3>
          <p className="text-[#b8b8b8] text-sm">{i.blurb}</p>
          <div className="mt-4">
            <a className="text-[#b8b8b8] text-xs tracking-widest hover:text-[#d4af37]" href={i.url} target="_blank" rel="noreferrer">VISIT SITE ↗</a>
          </div>
        </div>
      ))}
    </section>
  );
}