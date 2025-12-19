'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IntroVideoSection() {
  const ref = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.2], ['0px', '12px']);

  return (
    <section ref={ref} className="w-screen h-screen relative z-0 bg-black overflow-hidden">
      {/* 🛑 로딩 중일 때 보여줄 검은 배경 */}
      {!isVideoReady && (
        <div className="absolute inset-0 bg-black z-0" />
      )}

      <motion.div
        style={{ opacity, filter: blur }}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <video
          src="/portfolio entrance.mp4"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setIsVideoReady(true)} // ✅ 영상 준비되면 보여줌
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-3xl md:text-5xl font-maru font-semibold animate-blur-fade-in">
            기획의 숲에 오신 것을 환영합니다.
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
