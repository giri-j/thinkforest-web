import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  id: string;
  image: string;
  title: string;
  description: string;
  role: string;
  year: string;
  heading: string;
  link?: string;
}

export default function ProjectSection({
  id,
  image,
  title,
  description,
  role,
  year,
  heading,
  link,
}: ProjectSectionProps) {
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
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-yeogiottae text-forest-text leading-tight">{title}</h3>

            <p className="text-lg text-forest-text/60 font-light leading-relaxed">
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

            {link && (
              <div className="pt-6">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-main text-white text-sm font-medium hover:bg-forest-main/90 transition-all shadow-lg shadow-forest-main/10"
                >
                  Visit Project
                  <span className="text-lg">›</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

