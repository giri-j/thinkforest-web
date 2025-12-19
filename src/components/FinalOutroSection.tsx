'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'; // 아이콘

gsap.registerPlugin(ScrollTrigger);

export default function FinalOutroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const raccoonRef = useRef<HTMLDivElement>(null); // 🦝 세계수 내부에 배치

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
        },
      });

      // 🌳 세계수 등장 (블러 → 선명)
      tl.fromTo(
        treeRef.current,
        { opacity: 0, filter: 'blur(12px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 }
      );

      // 🦝 너구리 등장 (위에서 아래로)
      tl.fromTo(
        raccoonRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
        '+=0.5'
      );

      // ✨ 텍스트 등장 (블러 → 선명)
      tl.fromTo(
        textRef.current,
        { opacity: 0, filter: 'blur(12px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
        '+=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      {/* 🌌 배경 영상 */}
      <div className="absolute inset-0 h-[150vh] w-full z-0">
        <video
          src="/bg-stars.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌳 세계수 이미지 + 🦝 너구리 포함 */}
      <div
        ref={treeRef}
        className="absolute top-[5%] left-1/2 -translate-x-1/2 z-10 w-screen"
      >
        <div className="relative w-full">
          <Image
            src="/worldtree.png"
            alt="세계수"
            width={1920}
            height={1080}
            className="object-contain w-full h-auto"
            priority
          />

          {/* 🦝 너구리: 세계수 기준 상대 위치로 고정 */}
          <div
            ref={raccoonRef}
            className="absolute top-[56%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <Image
              src="/raccoon-sit.png"
              alt="나무 위에 앉은 너구리"
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>

      {/* ✨ 텍스트 */}
      <div
        ref={textRef}
        className="absolute top-[8%] left-[6%] text-white text-left font-maru z-30"
      >
        <p className="text-[28px] leading-relaxed mb-8">기획자 기리</p>
        <div className="flex space-x-4 text-[24px]">
            <a href="https://www.instagram.com/gianteunkil/" target="_blank" rel="noopener noreferrer">
             <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@iamgil_Official" target="_blank" rel="noopener noreferrer">
             <FaYoutube />
            </a>
            <a href="mailto:jek5797@naver.com">
             <FaEnvelope />
    </a>
  </div>
      </div>
    </section>
  );
}
