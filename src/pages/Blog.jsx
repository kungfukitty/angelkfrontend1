import React, { useEffect, useState } from 'react';
import { BLOG } from '../lib/config.ts';
export default function Blog(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{ fetch('/blog.json').then(r=>r.json()).then(d=>setPosts(d.posts||[])); },[]);
  return (
    <section className="space-y-6">
      <h1 className="text-3xl">{BLOG.TITLE}</h1>
      <p className="text-[#b8b8b8]">Long-form posts, project updates, and essays.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <a key={p.slug} href={p.url} className="block border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/40 hover:shadow-lg transition">
            <div className="text-xs text-[#b8b8b8]">{p.date}</div>
            <h3 className="text-xl mt-1">{p.title}</h3>
            <p className="text-[#b8b8b8] mt-2 text-sm">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}