'use client';

import { useRef, useMemo, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Raccoon, { RaccoonAction } from './Raccoon';

// Parallax Layer Component
function ParallaxLayer({
    children,
    depth,
    progress
}: {
    children: React.ReactNode;
    depth: number; // 0 (far) to 1 (near)
    progress: MotionValue<number>;
}) {
    // depth가 클수록(가까울수록) 더 많이 움직임 (-100% ~ 100% logic)
    // 멀리 있는 산(depth 0.1)은 조금만 움직임
    // 가까이 있는 덤불(depth 1.0)은 많이 움직임
    const x = useTransform(progress, [0, 1], ['0%', `-${depth * 100}%`]);

    return (
        <motion.div style={{ x }} className="absolute inset-0 w-[400vw] h-full flex">
            {children}
        </motion.div>
    );
}

export default function ForestStoryStage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Scene Index Calculation
    const sceneIndex = useTransform(scrollYProgress,
        [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
        [0, 1, 2, 3, 4, 5, 6]
    );

    const [currentScene, setCurrentScene] = useState(0);
    useMemo(() => sceneIndex.on('change', (latest) => {
        const rounded = Math.floor(latest);
        if (rounded !== currentScene) setCurrentScene(rounded);
    }), [sceneIndex, currentScene]);

    const scenes = [
        { id: 1, action: 'dig', text: "처음하는 사업,\n맨땅에 삽질하기!" },
        { id: 2, action: 'prune', text: "복잡한 문제\n가지치기" },
        { id: 3, action: 'water', text: "지속적인\n관리와 애정" },
        { id: 4, action: 'sweep', text: "버그와\n군더더기 청소" },
        { id: 5, action: 'type', text: "기획과 디자인\n설계" },
        { id: 6, action: 'tea', text: "여유와\n회고의 시간" },
    ];

    return (
        <div ref={containerRef} className="relative h-[800vh] bg-[#87CEEB] overflow-hidden">
            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden relative">

                {/* Sky / Sun (Fixed or very slow) */}
                <div className="absolute top-10 right-20 w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-80" />

                {/* Layer 1: Far Mountains (Slow) */}
                <ParallaxLayer depth={0.2} progress={scrollYProgress}>
                    <div className="w-full h-full relative">
                        <div className="absolute bottom-40 left-0 w-full flex space-x-0 items-end opacity-60">
                            {/* 산맥 Placeholder */}
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} className="w-[80vw] h-[60vh] bg-forest-main rounded-tr-[50%] transform -ml-32 skew-x-12" />
                            ))}
                        </div>
                    </div>
                </ParallaxLayer>

                {/* Layer 2: Mid Trees (Medium) */}
                <ParallaxLayer depth={0.5} progress={scrollYProgress}>
                    <div className="w-full h-full relative flex items-end bottom-32">
                        {/* 나무 Placeholder */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className="w-[30vw] h-[70vh] flex flex-col items-center mx-[10vw]">
                                <div className="w-32 h-32 bg-forest-light rounded-full transform -mb-10" />
                                <div className="w-40 h-40 bg-forest-light rounded-full transform -mb-16 z-10" />
                                <div className="w-4 h-full bg-[#5D4037]" />
                            </div>
                        ))}
                    </div>
                </ParallaxLayer>

                {/* Layer 3: Ground (Main Walk) */}
                <ParallaxLayer depth={1.0} progress={scrollYProgress}>
                    <div className="absolute bottom-0 w-[400vw] h-32 bg-[#5D4037] border-t-8 border-[#8D6E63]" />
                </ParallaxLayer>

                {/* Character Layer (Moves slightly different to keep center focus but feeling of travel) */}
                <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-30">
                    <Raccoon
                        action={(currentScene < 6 ? scenes[currentScene]?.action : 'tea') as RaccoonAction}
                    />
                </div>

                {/* Text Layer (Fixed in center, changes by state) */}
                <div className="absolute top-[20vh] w-full text-center z-40">
                    <motion.div
                        key={currentScene}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl font-yeogiottae text-white drop-shadow-md text-stroke-2">
                            {scenes[currentScene]?.text}
                        </h2>
                    </motion.div>
                </div>

                {/* Layer 4: Foreground Bushes (Very Fast) */}
                <ParallaxLayer depth={1.5} progress={scrollYProgress}>
                    <div className="w-full h-full relative flex items-end">
                        {/* 덤불 Placeholder */}
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="w-64 h-64 bg-forest-highlight rounded-full blur-sm opacity-90 mx-[25vw] transform translate-y-20" />
                        ))}
                    </div>
                </ParallaxLayer>

            </div>
        </div>
    );
}
