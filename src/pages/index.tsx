import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="기획의 숲 - 가꾸고 기획하며 성장하는 공간" fullWidth={true} noScroll={true}>
      <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video - Positive z-index to stay above Layout background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bg-homemovie.mp4" type="video/mp4" />
          </video>
          {/* Base Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Bottom Gradient for depth */}
          <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-highlight/5 rounded-full blur-[120px] animate-opacity-pulse z-20" />

        <div className="relative z-30 w-full h-full pt-20 pb-10 flex flex-col justify-between items-center">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-grow flex flex-col items-center justify-center space-y-8 max-w-7xl px-6"
          >
            <div className="relative inline-flex items-center justify-center gap-6 mb-8 group">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 60, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent to-white/40"
              />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-white/80 italic">
                Think Forest
              </span>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 60, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-l from-transparent to-white/40"
              />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-maru font-bold leading-[1.2] text-white tracking-tight">
              <span className="text-gradient">기획의 숲</span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-3xl text-white/80 leading-relaxed font-maru font-light">
              생각이 모여 숲이 되고<br className="hidden md:block" />
              아이디어의 꽃이 피어납니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link href="/project">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29, 67, 46, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-forest-main text-white rounded-2xl font-bold shadow-xl hover:bg-forest-main/90 transition-all min-w-[220px] text-lg border border-white/10"
                >
                  포트폴리오 산책하기
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Featured Cards Row (Single Screen) */}
          <div className="w-full max-w-5xl mx-auto px-6 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Insight",
                  desc: "기획과 발아하는 통찰들",
                  link: "/insight",
                  icon: "🌱",
                  shape: "shape-leaf",
                  color: "rgba(255, 255, 255, 0.05)"
                },
                {
                  title: "Journal",
                  desc: "기록으로 남는 일상",
                  link: "/journal",
                  icon: "🌼",
                  shape: "shape-petal",
                  color: "rgba(255, 255, 255, 0.05)",
                  hasDaisy: true
                },
                {
                  title: "History",
                  desc: "기획의 발자취들",
                  link: "/project",
                  icon: "🌲",
                  shape: "shape-shell",
                  color: "rgba(255, 255, 255, 0.05)",
                  isTree: true
                }
              ].map((item, i) => (
                <Link key={item.title} href={item.link} className="block h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + (i * 0.1) }}
                    whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className={`group relative p-6 glass-card h-full flex items-center gap-5 transition-all duration-500 ${item.shape}`}
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-500 shrink-0">{item.icon}</div>
                    <div className="text-left">
                      <h3 className="text-lg font-yeogiottae text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-white/50 font-maru line-clamp-1">{item.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

