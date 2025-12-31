'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    category: 'IT Planning',
    items: [
      { label: 'NITSOFT', target: 'nitsoft' },
      { label: 'CELLOOK', target: 'cellook' },
      { label: 'DX Platform', target: 'showa-edu' },
      { label: 'Artch', target: 'artch' },
      { label: 'Re:vind', target: 'revind' },
      { label: 'Asset Mgmt', target: 'sam-invest' },
    ],
  },
  {
    category: 'Operations',
    items: [
      { label: 'Wine Pickup', target: 'wine-pickup' },
      { label: 'QR Pickup', target: 'qr-pickup' },
      { label: 'Delivery Quality', target: 'lotte-shipping' },
      { label: 'Training Video', target: 'pickup-edu' },
    ],
  },
  {
    category: 'Business',
    items: [
      { label: 'Luxury Cosmetics', target: 'lux-cosmetics' },
      { label: 'Business Plan', target: 'biz-plan' },
      { label: 'IR Deck', target: 'ir-deck' },
    ],
  },
  {
    category: 'Etc',
    items: [
      { label: 'Workshop', target: 'workshop' },
      { label: 'Internal Ed', target: 'edu-system' },
      { label: 'Theater stage', target: 'play' },
      { label: 'Mentoring', target: 'univ-talk' },
      { label: 'Life Plan', target: 'my-life' },
    ],
  },
];

export default function ProjectNavigation() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block w-48">
      <div className="space-y-10">
        {navItems.map((group, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-forest-main/30 ml-4">
              {group.category}
            </h4>
            <ul className="space-y-2 border-l border-forest-main/10">
              {group.items.map((item, i) => {
                const isActive = activeId === item.target;
                return (
                  <li key={i}>
                    <a
                      href={`#${item.target}`}
                      className={`block pl-4 py-1 text-xs transition-all duration-300 relative group ${isActive
                          ? 'text-forest-main font-bold border-l-2 border-forest-main -ml-[1px]'
                          : 'text-forest-text/40 hover:text-forest-text hover:pl-5'
                        }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

