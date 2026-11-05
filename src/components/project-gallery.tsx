"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { gallery } from "@/lib/company";

export function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + gallery.length) % gallery.length);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("lightbox-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("lightbox-open");
    };
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <button className={`gallery-item ${item.className}`} key={item.title} onClick={() => setActiveIndex(index)} type="button" aria-label={`View image: ${item.title}`}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            <span className="gallery-caption"><small>{item.category}</small><b>{item.title}</b></span>
            <span className="gallery-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>
      <p className="gallery-note">Illustrative imagery shown. Company project photographs can be added here.</p>
      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[activeIndex].title} onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setActiveIndex(null)}><X size={23} /></button>
          <button className="lightbox-arrow previous" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length); }}><ArrowLeft size={22} /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={gallery[activeIndex].image} alt={gallery[activeIndex].alt} fill sizes="90vw" />
            <p>{gallery[activeIndex].title} <span>· {gallery[activeIndex].category}</span></p>
          </div>
          <button className="lightbox-arrow next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex + 1) % gallery.length); }}><ArrowRight size={22} /></button>
        </div>
      )}
    </>
  );
}
