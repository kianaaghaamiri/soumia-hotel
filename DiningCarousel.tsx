"use client";

import { useRef, useState } from "react";

type Slide = { src: string; alt: string };

const defaultSlides: Slide[] = [
  { src: "/soumia-dining-1.jpg", alt: "برگر رستوران سومیا" },
  { src: "/soumia-dining-2.jpg", alt: "صبحانه رستوران سومیا" },
  { src: "/soumia-dining-3.jpg", alt: "خوراک ویژه رستوران سومیا" },
  { src: "/soumia-dining-4.jpg", alt: "کباب و پنیر گریل‌شده رستوران سومیا" },
];

export default function DiningCarousel({ slides }: { slides?: Slide[] }) {
  const slidesToUse = slides && slides.length > 0 ? slides : defaultSlides;
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const changeSlide = (direction: 1 | -1) =>
    setActive((current) => (current + direction + slidesToUse.length) % slidesToUse.length);

  return (
    <div
      className="dining-carousel"
      role="region"
      aria-label="گالری رستوران و کافه"
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 40) changeSlide(distance < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      {slidesToUse.map((slide, index) => (
        <img
          className={index === active ? "is-active" : ""}
          src={slide.src}
          alt={slide.alt}
          key={slide.src}
        />
      ))}
      <div className="dining-carousel-controls" dir="ltr" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => changeSlide(-1)} aria-label="عکس قبلی">←</button>
        <span>{String(active + 1).padStart(2, "0")} / {String(slidesToUse.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => changeSlide(1)} aria-label="عکس بعدی">→</button>
      </div>
    </div>
  );
}
