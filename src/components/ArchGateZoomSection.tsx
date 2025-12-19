// ArchGateZoomSection.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ArchGateZoomSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="h-[150vh] bg-black relative flex items-center justify-center"
    >
      <motion.img
        src="/arch-gate.png"
        alt="게이트 확대"
        style={{ scale, opacity }}
        className="w-[1198px] origin-center sticky top-[30vh] z-20"
      />
    </section>
  );
}
