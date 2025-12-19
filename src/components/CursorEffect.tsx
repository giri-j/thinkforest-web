

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Sprout = {
    id: number;
    x: number;
    y: number;
    emoji: string;
};

const EMOJIS = ['🌱', '🌿', '☘️', '🍀', '🌸', '🌼', '🍄'];

export default function CursorEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sprouts, setSprouts] = useState<Sprout[]>([]);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleClick = (e: MouseEvent) => {
            const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
            const newSprout = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                emoji: randomEmoji,
            };

            setSprouts((prev) => [...prev, newSprout]);

            // 1초 뒤에 사라지게 함
            setTimeout(() => {
                setSprouts((prev) => prev.filter((s) => s.id !== newSprout.id));
            }, 1000);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            {/* 물뿌리개 커서 팔로워 */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-2xl"
                animate={{
                    x: mousePosition.x + 10,
                    y: mousePosition.y + 10,
                    rotate: [0, -20, 0], // 살짝 기울였다 돌아오는 애니메이션
                }}
                transition={{
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                    rotate: { repeat: Infinity, duration: 2 },
                }}
            >
                🚿
            </motion.div>

            {/* 클릭 시 자라나는 새싹들 */}
            <AnimatePresence>
                {sprouts.map((sprout) => (
                    <motion.div
                        key={sprout.id}
                        initial={{ opacity: 1, scale: 0, y: 0 }}
                        animate={{ opacity: 0, scale: 1.5, y: -20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed pointer-events-none z-[9998] text-2xl"
                        style={{ left: sprout.x, top: sprout.y }}
                    >
                        {sprout.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </>
    );
}
