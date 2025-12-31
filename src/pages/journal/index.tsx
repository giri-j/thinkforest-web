import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image?: string;
};

const dummyPosts: Post[] = [
  {
    title: '제주도 푸른 숲 여행기',
    slug: 'jeju-forest-trip',
    excerpt: '제주도의 자연 속에서 찾은 여유와 새로운 영감. 숲길을 걸으며 느낀 기획의 본질에 대하여.',
    date: '2024.03.20',
  },
  {
    title: '서울 최고의 파스타 맛집 탐방',
    slug: 'seoul-pasta-tour',
    excerpt: '업무 스트레스를 날려줄 서울 곳곳의 숨은 맛집들. 미각의 즐거움이 주는 기획적 유연함.',
    date: '2024.03.10',
  },
];

export default function JournalIndex() {
  return (
    <Layout title="Journal - 기획의 숲">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-xs font-medium tracking-[0.3em] uppercase text-forest-main/60 mb-4"
          >
            Archive <span className="w-12 h-[1px] bg-forest-main/20" /> 02 Posts
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-yeogiottae text-forest-text"
          >
            Journal
          </motion.h1>
        </header>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {dummyPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={`/journal/${post.slug}`} className="group block space-y-6">
                <div className="aspect-[16/10] bg-white/40 rounded-3xl overflow-hidden border border-white/20 shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-highlight/5 to-forest-main/5" />
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-forest-main/10 text-6xl font-yeogiottae">
                    {post.title.slice(0, 1)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-medium text-forest-main/40">{post.date}</div>
                  <h2 className="text-2xl font-yeogiottae text-forest-text group-hover:text-forest-main transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-forest-text/60 leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

