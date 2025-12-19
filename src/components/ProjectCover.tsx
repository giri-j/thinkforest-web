'use client';

import { useEffect, useRef, useState } from 'react';
import RollingRow from './RollingRow';
import gsap from 'gsap';

export default function ProjectCover() {
  const [dimmed, setDimmed] = useState(false);
  const dimRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDimmed(true);
      document.body.classList.add('dimmed');

      requestAnimationFrame(() => {
        if (dimRef.current) {
          gsap.fromTo(
            dimRef.current,
            { opacity: 0 },
            { opacity: 0.8, duration: 1.5, ease: 'power2.out' }
          );
        }

        if (textRef.current) {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
          );
        }
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('dimmed');
    };
  }, []);

  // ✅ IntersectionObserver로 dimmed 상태 제어
  useEffect(() => {
    const section = document.getElementById('project-cover');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('dimmed');
        } else {
          document.body.classList.remove('dimmed');
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="project-cover"
      className="relative h-screen flex flex-col justify-center gap-4 overflow-hidden bg-zinc-300"
    >
      {/* 5줄 롤링 */}
      <RollingRow title="1. IT기획" images={['/images/it1.png', '/images/it2.png']} direction="right" />
      <RollingRow title="2. 운영기획" images={['/images/op1.png', '/images/op2.png']} direction="left" />
      <RollingRow title="3. 사업기획" images={['/images/biz1.png', '/images/biz2.png']} direction="right" />
      <RollingRow title="4. Education" images={['/images/edu1.png', '/images/edu2.png']} direction="left" />
      <RollingRow title="5. Entertainment" images={['/images/ent1.png', '/images/ent2.png']} direction="right" />

      {/* 딤 + 텍스트 */}
      {dimmed && (
        <div
          ref={dimRef}
          className="absolute inset-0 bg-black z-10 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <div
            ref={textRef}
            className="text-white text-3xl md:text-5xl font-bold opacity-0"
          >
            I&apos;m a Super Generalist!
          </div>
        </div>
      )}
    </section>
  );
}
