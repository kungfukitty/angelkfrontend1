import React from 'react';
import { MEDIA } from '../lib/config.ts';
export default function Vlog(){
  const playlistId = MEDIA.YT_PLAYLIST_ID;
  return (
    <section className="space-y-6">
      <h1 className="text-3xl">Vlog</h1>
      {!playlistId ? (
        <p className="text-[#b8b8b8]">Add a YouTube playlist ID via <code>VITE_YT_PLAYLIST_ID</code> to embed your vlog here.</p>
      ) : (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            title="YouTube playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}