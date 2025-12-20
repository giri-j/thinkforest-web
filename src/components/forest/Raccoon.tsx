'use client';

import { motion } from 'framer-motion';

export type RaccoonAction = 'idle' | 'walk' | 'dig' | 'prune' | 'water' | 'sweep' | 'type' | 'tea';

interface RaccoonProps {
    action: RaccoonAction;
    progress?: number;
}

export default function Raccoon({ action }: RaccoonProps) {
    // 🦝 임시: 이미지 생성 전까지 귀여운 이모지로 대체합니다!
    const getContent = () => {
        switch (action) {
            case 'dig': return { emoji: '⛏️', bounce: true };
            case 'prune': return { emoji: '✂️', bounce: true };
            case 'water': return { emoji: '🚿', bounce: true };
            case 'sweep': return { emoji: '🧹', bounce: true };
            case 'type': return { emoji: '💻', bounce: false };
            case 'tea': return { emoji: '🍵', bounce: false };
            default: return { emoji: '🎒', bounce: true }; // idle/walk
        }
    };

    const { emoji, bounce } = getContent();

    return (
        <div className="relative w-32 h-32 flex items-center justify-center pointer-events-none">
            <motion.div
                className="text-[80px] leading-none absolute z-10 filter drop-shadow-md select-none"
                animate={{
                    y: action === 'walk' || bounce ? [0, -10, 0] : 0,
                    rotate: action === 'walk' ? [0, -5, 5, 0] : 0,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
                🦝
            </motion.div>

            {/* Action Item (Tool) */}
            <motion.div
                className="absolute text-[40px] z-20 -right-2 top-0 select-none"
                animate={{
                    rotate: bounce ? [0, 15, -15, 0] : 0,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: 0.1
                }}
            >
                {emoji}
            </motion.div>
        </div>
    );
}
