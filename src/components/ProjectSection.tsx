import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectSectionProps {
  id: string;
  image: string;
  images?: string[];
  title: string;
  description: string;
  role: string;
  year: string;
  heading: string;
  link?: string;
  linkText?: string;
}

export default function ProjectSection({
  id,
  image,
  images,
  title,
  description,
  role,
  year,
  heading,
  link,
  linkText,
}: ProjectSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayImages = images && images.length > 0 ? images : [image];

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev: number) => (prev + 1) % displayImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <section id={id} className="w-full py-32 border-b border-forest-main/10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-forest-main/5 pb-6">
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-forest-main/40">{heading}</h2>
          {year && <span className="text-xs font-light text-forest-text/30">{year}</span>}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video lg:aspect-square glass-card rounded-[40px] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-main/5 to-transparent z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={displayImages[currentImageIndex]}
                  alt={`${title} - image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            {displayImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {displayImages.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-4 bg-forest-main' : 'bg-forest-main/20'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-yeogiottae text-forest-text leading-tight">{title}</h3>

            <p className="text-lg text-forest-text/60 font-light leading-relaxed whitespace-pre-line">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-forest-main/40">Role</span>
                <p className="text-sm font-medium text-forest-text/80">{role}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-forest-main/40">Period</span>
                <p className="text-sm font-medium text-forest-text/80">{year}</p>
              </div>
            </div>

            {(link || linkText) && (
              <div className="pt-6">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-main text-white text-sm font-medium hover:bg-forest-main/90 transition-all shadow-lg shadow-forest-main/10"
                  >
                    {linkText || "Visit Project"}
                    <span className="text-lg">›</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-main/5 text-forest-main/50 text-sm font-medium border border-forest-main/10 cursor-default">
                    {linkText}
                    <span className="opacity-30">🔐</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

