
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = scrollRef.current;
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (sections && container && overlay) {
      const totalPanels = sections.childElementCount;

      const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          id: 'horizontal-scroll',
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${sections.scrollWidth}`,
          anticipatePin: 1,
        },
      });

      const panels = sections.querySelectorAll('.fade-panel');
      panels.forEach((panel) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalTween,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        });

        tl.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl.to(panel, { opacity: 0, duration: 0.5 });
      });

      const lastPanel = sections.lastElementChild;
      if (lastPanel) {
        gsap.to(overlay, {
          opacity: 1,
          scrollTrigger: {
            trigger: lastPanel,
            containerAnimation: horizontalTween,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        });
      }

      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black overflow-hidden">
      {/* 🎥 배경 영상 */}
      <video
        src="/bg-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[1080px] object-cover z-0"
      />

      {/* 🔲 완전한 검정 오버레이 */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-[1080px] bg-black z-10 pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* 🦝 가로 콘텐츠 */}
      <div
        ref={scrollRef}
        className="relative flex h-screen z-10"
        style={{ width: '120vw' }}
      >
        <div className="w-screen h-screen flex items-center justify-center flex-shrink-0">
          <p className="text-white text-[48px] font-yeogiottae text-left leading-tight font-bold">
            저는<br />
            이런 걸 잘해요.
          </p>
        </div>

        {[
          { src: '/raccoon-dig.mp4', label: '처음하는 사업 맨땅에 뛰어들기' },
          { src: '/raccoon-trim.mp4', label: '복잡한 문제 정리하기' },
          { src: '/raccoon-water.mp4', label: '지속적인 관리하기' },
          { src: '/raccoon-brush.mp4', label: '버그 및 불필요한 요소는 제거하기' },
          { src: '/raccoon-code.mp4', label: '화면 기획 및 디자인하기' },
          { src: '/raccoon-efficiency.mp4', label: '업무 자동/효율화하기' },
        ].map(({ src, label }, idx) => (
          <div
            key={idx}
            className="w-screen h-screen flex flex-col items-center justify-center flex-shrink-0 fade-panel opacity-0"
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-[500px] rounded-xl shadow-lg"
            />
            <p className="text-white mt-4 text-2xl font-yeogiottae">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
