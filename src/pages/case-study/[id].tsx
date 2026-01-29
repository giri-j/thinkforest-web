import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '@/constants/data';
import Link from 'next/link';

export default function CaseStudyDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const study = CASE_STUDIES.find(s => s.id === id);

    if (!study) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as any }
        }
    };

    return (
        <Layout title={`${study.title} - Case Study`}>
            <div className="relative overflow-hidden min-h-screen bg-forest-base">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-forest-main/10 to-transparent -z-10" />
                <div className="absolute top-[20%] -right-20 w-80 h-80 bg-forest-highlight/5 blur-[120px] rounded-full -z-10" />

                <div className="max-w-5xl mx-auto py-24 px-6 relative z-10">
                    <Link href="/case-study" className="inline-flex items-center gap-3 text-forest-main/60 hover:text-forest-main transition-all mb-16 group font-maru font-bold text-sm tracking-widest">
                        <div className="w-10 h-10 rounded-full border border-forest-main/20 flex items-center justify-center group-hover:border-forest-main/40 transition-colors">
                            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <span>LIST VIEW</span>
                    </Link>

                    <header className="mb-32 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-forest-main tracking-[0.3em] px-4 py-1.5 rounded-full bg-forest-main/10 uppercase">
                                    {study.period}
                                </span>
                                <div className="h-[1px] w-12 bg-forest-main/30" />
                                <span className="text-xs font-maru font-medium text-forest-text/40 tracking-widest uppercase">
                                    {study.category}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-yeogiottae text-forest-text leading-[1.1] tracking-tight">
                                {study.title}
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <p className="text-2xl md:text-3xl text-forest-text/70 font-maru font-light leading-relaxed italic border-l-[6px] border-forest-main/40 pl-8 md:pl-12">
                                &ldquo;{study.summary}&rdquo;
                            </p>
                        </motion.div>
                    </header>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-40"
                    >
                        {study.details && (
                            <>
                                <motion.section variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-4 gap-12">
                                    <h2 className="text-xl font-yeogiottae text-forest-main/40 tracking-widest uppercase md:pt-2">01. Goal</h2>
                                    <div className="md:col-span-3">
                                        <div className="glass-card p-10 rounded-[40px] border-white/5 text-forest-text/90 text-2xl leading-relaxed font-maru font-light">
                                            {study.details.purpose}
                                        </div>
                                    </div>
                                </motion.section>

                                <motion.section variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-4 gap-12">
                                    <h2 className="text-xl font-yeogiottae text-forest-main/40 tracking-widest uppercase md:pt-2">02. Problem</h2>
                                    <div className="md:col-span-3">
                                        <div className="glass-card p-10 rounded-[40px] border-white/5 text-forest-text/80 text-xl leading-relaxed font-maru font-light">
                                            {study.details.problem}
                                        </div>
                                    </div>
                                </motion.section>

                                <motion.section variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-4 gap-12">
                                    <h2 className="text-xl font-yeogiottae text-forest-main/40 tracking-widest uppercase md:pt-2">03. My Role</h2>
                                    <div className="md:col-span-3">
                                        <div className="glass-card p-10 rounded-[40px] border-white/5 text-forest-text/80 text-xl leading-relaxed font-maru font-light">
                                            {study.details.role}
                                        </div>
                                    </div>
                                </motion.section>

                                <motion.section variants={sectionVariants} className="space-y-16">
                                    <div className="flex items-center gap-6">
                                        <h2 className="text-xl font-yeogiottae text-forest-main/40 tracking-widest uppercase">04. Key Actions</h2>
                                        <div className="h-[1px] flex-grow bg-forest-main/10" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-10">
                                        {study.details.points.map((point, idx) => (
                                            <div key={idx} className="group relative">
                                                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-forest-main/10 group-hover:bg-forest-main/40 transition-colors" />
                                                <div className="pl-6 space-y-4">
                                                    <h3 className="text-2xl font-yeogiottae text-forest-text group-hover:text-forest-main transition-colors">{point.title}</h3>
                                                    <p className="text-forest-text/60 text-lg leading-relaxed font-maru font-light max-w-3xl">{point.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.section>

                                <motion.section variants={sectionVariants} className="space-y-16">
                                    <div className="flex items-center gap-6">
                                        <h2 className="text-xl font-yeogiottae text-forest-main/40 tracking-widest uppercase">05. Outcome</h2>
                                        <div className="h-[1px] flex-grow bg-forest-main/10" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {study.details.results.map((result, idx) => (
                                            <div key={idx} className="glass-card p-8 rounded-[30px] border-white/5 bg-forest-main/[0.02] flex flex-col justify-center text-center">
                                                <p className="text-forest-text/80 font-maru text-lg leading-snug">{result}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.section>

                                <motion.section
                                    variants={sectionVariants}
                                    className="relative overflow-hidden glass-card p-16 md:p-24 rounded-[60px] border-forest-main/20 bg-forest-main/[0.03] shadow-inner"
                                >
                                    <div className="relative z-10 space-y-12">
                                        <div className="space-y-2">
                                            <span className="text-forest-main font-bold tracking-[0.4em] text-xs uppercase">Core Learnings</span>
                                            <h2 className="text-4xl md:text-5xl font-yeogiottae text-forest-text">INSIGHTS</h2>
                                        </div>
                                        <div className="space-y-10">
                                            {study.details.insights.map((insight, idx) => (
                                                <div key={idx} className="flex gap-6 items-start">
                                                    <div className="w-10 h-10 rounded-full bg-forest-main/10 flex items-center justify-center shrink-0 mt-1">
                                                        <span className="text-forest-main text-sm font-bold">{idx + 1}</span>
                                                    </div>
                                                    <p className="text-xl md:text-2xl text-forest-text/90 font-maru font-light leading-relaxed">
                                                        {insight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Abstract background graphics */}
                                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-forest-main/5 blur-[120px] rounded-full" />
                                </motion.section>
                            </>
                        )}
                    </motion.div>

                    <div className="mt-48 pb-32 text-center">
                        <Link href="/case-study">
                            <button className="group relative px-12 py-6 bg-forest-main text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-forest-main/20">
                                <span className="relative z-10">Back to Projects</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
