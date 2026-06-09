'use client';

import { useEffect, useState } from 'react';

export default function Carousel(): null {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    // Auto-rotate interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Mouse/Touch drag events
    const handleDragStart = (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      setStartX((e as any).type.includes('mouse') ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX);
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      
      const endX = (e as any).type.includes('mouse') ? (e as MouseEvent).clientX : (e as TouchEvent).changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Dragged left, go to next slide
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
          // Dragged right, go to previous slide
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
      }
    };

    // Update active slide
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    track.addEventListener('mousedown', handleDragStart);
    track.addEventListener('touchstart', handleDragStart);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);

    return () => {
      clearInterval(interval);
      track.removeEventListener('mousedown', handleDragStart);
      track.removeEventListener('touchstart', handleDragStart);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [currentSlide, startX, isDragging]);

  return null;
}
