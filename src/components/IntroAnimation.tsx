import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide after 1.2 seconds (giving time for the video to play a bit)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="intro-video"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden pointer-events-none"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/main_intro.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
