import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="기획의 숲 - 가꾸고 기획하며 성장하는 공간">
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-highlight/10 rounded-full blur-[120px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-forest-main/20 text-xs font-medium tracking-[0.2em] uppercase text-forest-main/60 bg-white/50 mb-4">
            Planning & Strategy
          </div>

          <h1 className="text-5xl md:text-7xl font-yeogiottae leading-[1.1] text-forest-text">
            복잡한 생각을 정리해<br />
            <span className="text-forest-main underline decoration-forest-highlight underline-offset-8">나만의 숲</span>을 가꿉니다
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-forest-text/70 leading-relaxed font-light">
            저는 기획의 숲을 가꾸는 '기리'입니다. <br className="hidden md:block" />
            이곳은 저의 기획적 통찰과 일상의 기록이 조화롭게 자라나는 아카이브입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/project">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-forest-main text-white rounded-xl font-medium shadow-lg shadow-forest-main/20 hover:bg-forest-main/90 transition-all min-w-[200px]"
              >
                포트폴리오 보기
              </motion.button>
            </Link>
            <Link href="/insight">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-forest-main/10 text-forest-main rounded-xl font-medium transition-all min-w-[200px]"
              >
                인사이트 읽어보기
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Featured Section placeholder */}
      <section className="mt-32 grid md:grid-cols-3 gap-8">
        {[
          { title: "Insight", desc: "기획과 비즈니스에 대한 통찰", link: "/insight", icon: "💡" },
          { title: "Journal", desc: "여행과 맛집, 일상의 기록", link: "/journal", icon: "📓" },
          { title: "History", desc: "그동안 걸어온 발자취", link: "/project", icon: "🌲" }
        ].map((item, i) => (
          <Link key={item.title} href={item.link}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/50 border border-white border-opacity-60 shadow-sm hover:shadow-xl transition-all h-full"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-yeogiottae text-forest-main mb-3">{item.title}</h3>
              <p className="text-sm text-forest-text/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

