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
    // Group projects by category
    const categories = Array.from(new Set(CASE_STUDIES.map(s => s.category)));
    const groupedStudies = categories.map((cat, idx) => ({
        id: `cat-${idx}`,
        name: cat,
        phrase: CASE_STUDIES.find(s => s.category === cat)?.categoryPhrase,
        studies: CASE_STUDIES.filter(s => s.category === cat)
    }));

    return (
        <Layout title="Case Study - 기획의 숲">
            <div className="relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-forest-main/5 blur-[120px] rounded-full -z-10 animate-blob" />
                <div className="absolute top-[40%] -right-20 w-[600px] h-[600px] bg-forest-highlight/5 blur-[150px] rounded-full -z-10 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-forest-main/5 blur-[180px] rounded-full -z-10 animate-blob animation-delay-4000" />

                <div className="max-w-7xl mx-auto py-32 px-6 relative z-10">
                    <header className="mb-32 text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-forest-main text-[10px] font-bold tracking-[0.4em] uppercase"
                        >
                            Excellence in Planning
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-yeogiottae text-forest-text tracking-tight"
                        >
                            Case Study
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-forest-main/40 to-transparent mx-auto"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="text-xl md:text-2xl text-forest-text/60 font-maru font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            치열하게 고민하고 증명해낸 <br />
                            <span className="text-forest-main font-medium">기획의 정수(精髓)</span>
                        </motion.p>
                    </header>

                    <div className="space-y-40">
                        {groupedStudies.map((group, groupIdx) => (
                            <motion.section
                                key={group.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                {/* Category Header with dynamic styling */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-forest-main/5 pb-12">
                                    <div className="flex items-center gap-6">
                                        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                                            <div className="absolute inset-0 bg-forest-main/10 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                                            <span className="relative text-4xl font-yeogiottae text-forest-main">
                                                {String.fromCharCode(65 + groupIdx)}
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-3xl md:text-4xl font-yeogiottae text-forest-text tracking-tight">
                                                {group.name}
                                            </h2>
                                            <div className="h-[2px] w-20 bg-forest-main/30 rounded-full" />
                                        </div>
                                    </div>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="text-2xl md:text-3xl text-forest-text/40 font-maru font-light italic"
                                    >
                                        &ldquo;{group.phrase}&rdquo;
                                    </motion.p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                                    {group.studies.map((study: any, idx) => (
                                        <motion.div
                                            key={study.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                                            whileHover={{ y: -15 }}
                                            className="group relative"
                                        >
                                            {/* Outer Glow */}
                                            <div className="absolute inset-0 bg-forest-main/5 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <div className="relative h-full glass-card p-12 flex flex-col justify-between border-white/10 hover:border-forest-main/40 transition-all duration-700 rounded-[40px] overflow-hidden min-h-[420px] shadow-2xl shadow-black/5">
                                                <div className="space-y-8">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-forest-main animate-pulse" />
                                                            <span className="text-sm font-maru font-bold text-forest-main tracking-widest uppercase opacity-70">
                                                                {study.period}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 justify-end">
                                                            {study.tags.map((tag: string) => (
                                                                <span key={tag} className="text-[10px] text-forest-text/30 border border-forest-text/10 px-2 py-0.5 rounded-full uppercase">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="space-y-5">
                                                        <h3 className="text-3xl md:text-4xl font-yeogiottae text-forest-text leading-tight group-hover:text-forest-main transition-colors duration-500">
                                                            {study.title}
                                                        </h3>
                                                        <p className="text-forest-text/60 font-maru font-light leading-relaxed text-lg line-clamp-3">
                                                            {study.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-12">
                                                    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-forest-main/[0.03] transition-colors duration-500">
                                                        <p className="text-sm font-yeogiottae text-forest-text/80 italic leading-relaxed">
                                                            &ldquo;{study.summary}&rdquo;
                                                        </p>
                                                        <div className="absolute -top-3 left-4 w-6 h-6 bg-forest-main/10 rounded-full flex items-center justify-center text-[10px] text-forest-main">
                                                            "
                                                        </div>
                                                    </div>

                                                    <Link href={`/case-study/${study.id}`}>
                                                        <div className="mt-8 flex items-center gap-3 text-forest-main text-xs font-bold tracking-[0.2em] group/btn cursor-pointer">
                                                            <span className="border-b border-forest-main/0 group-hover/btn:border-forest-main/40 transition-all">VIEW CASE STUDY</span>
                                                            <div className="w-8 h-8 rounded-full border border-forest-main/20 flex items-center justify-center group-hover/btn:bg-forest-main group-hover/btn:text-white transition-all duration-300">
                                                                <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                {/* Sophisticated Accent */}
                                                <div
                                                    className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-all duration-1000 rotate-45"
                                                    style={{ background: `linear-gradient(135deg, ${study.color}, transparent)` }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
