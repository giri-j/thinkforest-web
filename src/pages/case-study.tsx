import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function CaseStudyPage() {
    return (
        <Layout title="Case Study - 기획의 숲">
            <div className="max-w-4xl mx-auto py-20">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-yeogiottae text-forest-text mb-6"
                    >
                        Case Study
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-forest-text/60 font-light"
                    >
                        문제의 본질을 파고드는 깊이 있는 기획 사례
                    </motion.p>
                </header>

                <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-forest-main/20 rounded-2xl bg-white/5">
                    <div className="w-16 h-16 mb-6 rounded-full bg-forest-main/10 flex items-center justify-center text-forest-main">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-yeogiottae text-forest-text mb-4">현재 준비 중입니다</h2>
                    <p className="text-forest-text/40 font-light max-w-sm">
                        더 나은 통찰을 전달하기 위해 <br />
                        정성스럽게 케이스 스터디를 준비하고 있습니다. <br />
                        조금만 기다려 주세요.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
