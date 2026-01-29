import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/constants/data';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as any
        }
    }
};

export default function CaseStudyPage() {
    return (
        <Layout title="Case Study - 기획의 숲">
            <div className="max-w-6xl mx-auto py-24 px-6">
                <header className="mb-24 text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-forest-main/10 text-forest-main text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-yeogiottae text-forest-text tracking-tight"
                    >
                        Case Study
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-forest-text/60 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        치열하게 고민하고 증명해낸 <br />
                        기획의 정수(精髓)
                    </motion.p>
                </header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {CASE_STUDIES.map((study: any) => (
                        <motion.div
                            key={study.id}
                            variants={itemVariants}
                            whileHover={{ y: -12 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10 group-hover:from-white/20 transition-colors duration-500" />
                            <div className="glass-card p-10 h-full flex flex-col justify-between border-white/10 hover:border-forest-main/30 transition-all duration-500 rounded-3xl overflow-hidden min-h-[400px]">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-maru font-medium text-forest-main tracking-widest px-3 py-1 rounded-full bg-forest-main/5">
                                            {study.period}
                                        </span>
                                        <div className="flex gap-2">
                                            {study.tags.map((tag: string) => (
                                                <span key={tag} className="text-[10px] text-forest-text/40 uppercase tracking-tighter">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-2xl md:text-3xl font-yeogiottae text-forest-text group-hover:text-forest-main transition-colors duration-300">
                                            {study.title}
                                        </h2>
                                        <p className="text-forest-text/60 font-maru font-light leading-relaxed text-lg">
                                            {study.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-forest-main/10">
                                    <p className="text-sm font-yeogiottae text-forest-text/80 italic">
                                        &ldquo;{study.summary}&rdquo;
                                    </p>
                                    <Link href={`/case-study/${study.id}`}>
                                        <div className="mt-6 flex items-center gap-2 text-forest-main text-xs font-bold group/btn cursor-pointer">
                                            <span>VIEW DETAILS</span>
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>

                                {/* Decorative Background Accent */}
                                <div
                                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                    style={{ backgroundColor: study.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Layout>
    );
}
