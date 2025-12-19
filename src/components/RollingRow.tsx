// components/RollingRow.tsx

'use client';

import { useRef, useEffect } from 'react';

interface RollingRowProps {
  title: string;
  images: string[];
  direction?: 'left' | 'right';
}

export default function RollingRow({ title, images, direction = 'right' }: RollingRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    const speed = 0.5;

    const animate = () => {
      x += direction === 'right' ? speed : -speed;
      container.style.transform = `translateX(${x}px)`;

      const resetPoint = container.scrollWidth / 2;
      if (direction === 'right' && x >= resetPoint) x = 0;
      if (direction === 'left' && x <= -resetPoint) x = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, [direction]);

  return (
    <div className="overflow-hidden w-full py-2">
      <div className="relative w-full whitespace-nowrap">
        <div ref={containerRef} className="flex gap-8 w-max items-center">
          {/* 타이틀 텍스트 1번만 넣기 */}
          <div className="min-w-[160px] text-white text-lg font-light">
            {title}
          </div>

          {/* 이미지 2배 반복 */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-40 h-24 object-cover rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
