

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
    const [sprouts, setSprouts] = useState<Sprout[]>([]);

    useEffect(() => {
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

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
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
