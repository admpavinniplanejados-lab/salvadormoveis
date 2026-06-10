'use client';

import { useEffect, useRef, useState } from 'react';

export default function Carousel(): null {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const slidesRef = useRef<NodeListOf<Element> | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    slidesRef.current = slides;

    const handleDragStart = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      startXRef.current = (e as any).type.includes('mouse')
        ? (e as MouseEvent).clientX
        : (e as TouchEvent).touches[0].clientX;
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      const endX = (e as any).type.includes('mouse')
        ? (e as MouseEvent).clientX
        : (e as TouchEvent).changedTouches[0].clientX;
      const diff = startXRef.current - endX;

      if (Math.abs(diff) > 50) {
        setCurrentSlide((prev) => {
          return diff > 0
            ? (prev + 1) % slides.length
            : (prev - 1 + slides.length) % slides.length;
        });
      }
    };

    const startAutoplay = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    track.addEventListener('mousedown', handleDragStart);
    track.addEventListener('touchstart', handleDragStart, { passive: true });
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      track.removeEventListener('mousedown', handleDragStart);
      track.removeEventListener('touchstart', handleDragStart);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides) return;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
  }, [currentSlide]);

  return null;
}
