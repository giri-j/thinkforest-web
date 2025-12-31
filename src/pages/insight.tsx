import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Post = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
};

const insightPosts: Post[] = [
    {
        title: '성공하는 사업의 공통점: 본질에 집중하기',
        slug: 'business-success-pattern',
        excerpt: '수많은 비즈니스 모델을 분석하며 발견한 핵심 성공 요인은 결국 기술이 아닌 사람의 문제였습니다.',
        date: '2024.03.15',
        category: 'Business',
    },
    {
        title: '효율적인 기획 프로세스 설계 가이드',
        slug: 'planning-process',
        excerpt: '아이디어에서 실행까지, 시간 낭비를 줄이고 결과물의 퀄리티를 높이는 기획의 정석을 소개합니다.',
        date: '2024.02.28',
        category: 'Planning',
    },
];

export default function InsightPage() {
    return (
        <Layout title="Insight - 기획의 숲">
            <div className="max-w-4xl mx-auto">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-yeogiottae text-forest-text mb-6"
                    >
                        Insight
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-forest-text/60 font-light"
                    >
                        기획, 사업, 그리고 업무에 대한 깊은 기록
                    </motion.p>
                </header>

                <div className="grid gap-12">
                    {insightPosts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <Link href={`/insight/${post.slug}`} className="block space-y-4">
                                <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-forest-main/60">
                                    <span>{post.category}</span>
                                    <span className="w-8 h-[1px] bg-forest-main/20" />
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-3xl font-yeogiottae text-forest-text group-hover:text-forest-main transition-colors duration-300 leading-snug">
                                    {post.title}
                                </h2>

                                <p className="text-forest-text/60 leading-relaxed max-w-2xl font-light">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <span className="text-sm font-medium text-forest-main opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 inline-block duration-300">
                                        Read Story →
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

