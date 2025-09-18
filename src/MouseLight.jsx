import React, { useEffect } from "react";
export default function MouseLight() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return <div className="mouse-light-layer" aria-hidden="true" />;
}
