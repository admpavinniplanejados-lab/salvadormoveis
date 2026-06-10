'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type PromoItem = {
  icon: ReactNode;
  text: string;
};

type PromoBarProps = {
  items: PromoItem[];
};

export default function PromoBar({ items }: PromoBarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || items.length === 0) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isMobile, items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className="top-promo-bar">
      <div className={`container top-promo-bar-inner${isMobile ? ' top-promo-bar-inner-mobile' : ''}`}>
        {isMobile ? (
          <div className="promo-item promo-item-mobile" key={activeIndex}>
            {activeItem.icon}
            <span>{activeItem.text}</span>
          </div>
        ) : (
          items.map((item) => (
            <div className="promo-item" key={item.text}>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
