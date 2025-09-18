import React, { useEffect, useState } from "react";
import MouseLight from "./MouseLight.jsx";
import { CONFIG } from "./lib/config.ts";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Brands from "./pages/Brands.jsx";
import Media from "./pages/Media.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Membership from "./pages/Membership.jsx";

function useRoute() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : "/");
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const nav = (to) => { if (to !== window.location.pathname) { window.history.pushState({}, "", to); setPath(to); } };
  return { path, nav };
}

function NavLink({ to, children }){
  const active = (typeof window !== 'undefined' && (window.location.pathname === to || (to !== '/' && window.location.pathname.startsWith(to))));
  return (
    <a href={to} onClick={(e)=>{e.preventDefault(); window.history.pushState({}, "", to); window.dispatchEvent(new PopStateEvent('popstate'));}}
       className={`px-3 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 ${active ? 'text-[#d4af37]' : ''}`}>
      {children}
    </a>
  );
}

export default function App(){
  const { path } = useRoute();
  useEffect(() => { if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 100 }); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
      <MouseLight />

      <header className="border-b border-white/10 sticky top-0 z-50 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" onClick={(e)=>{e.preventDefault(); history.pushState({}, "", "/"); dispatchEvent(new PopStateEvent('popstate'));}} className="flex items-center gap-2 text-xl font-semibold">
            <span className="w-3 h-3 rounded-full bg-[#d4af37] inline-block" />
            Angel Kellogg
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/brands">Brands</NavLink>
            <NavLink to="/membership">Membership</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {path === "/" && <Home />}
          {path === "/about" && <About />}
          {path === "/brands" && <Brands />}
          {path === "/membership" && <Membership />}
          {path === "/media" && <Media />}
          {path === "/contact" && <Contact />}
          {path === "/privacy" && <Privacy />}
          {path === "/terms" && <Terms />}
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 md:grid-cols-3">
          <div>
            <div className="font-semibold mb-2">Angel Kellogg</div>
            <p className="text-sm text-[#b8b8b8]">Builder • Creator • Strategist</p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com/angelkellogg" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4af37] hover:bg-white/5 transition-all" aria-label="Instagram">IG</a>
              <a href="https://linkedin.com/in/angelkellogg" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4af37] hover:bg-white/5 transition-all" aria-label="LinkedIn">IN</a>
              {CONFIG.FTBTB_YOUTUBE_URL && <a href={CONFIG.FTBTB_YOUTUBE_URL} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4af37] hover:bg-white/5 transition-all" aria-label="FTBTB YouTube">YT</a>}
            </div>
          </div>
          <div className="grid gap-2">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/brands">Brands</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/membership">Membership</NavLink>
          </div>
          <div className="grid gap-2">
            <a className="text-[#d4af37] underline underline-offset-4" href={`mailto:${CONFIG.CONTACT_EMAIL}`}>{CONFIG.CONTACT_EMAIL}</a>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
          </div>
        </div>
        <div className="text-center text-xs text-[#b8b8b8] pb-8">© {new Date().getFullYear()} Angel Kellogg</div>
      </footer>
    </div>
  );
}
