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

    return (
        <Layout title={`${study.title} - Case Study`}>
            <div className="max-w-4xl mx-auto py-24 px-6">
                <Link href="/case-study" className="inline-flex items-center gap-2 text-forest-main/60 hover:text-forest-main transition-colors mb-12 group">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to List</span>
                </Link>

                <header className="mb-20 space-y-8">
                    <div className="space-y-4">
                        <span className="text-sm font-maru font-medium text-forest-main tracking-widest px-3 py-1 rounded-full bg-forest-main/5 uppercase">
                            {study.period}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-yeogiottae text-forest-text leading-tight">
                            {study.title}
                        </h1>
                    </div>
                    <p className="text-2xl text-forest-text/60 font-maru font-light leading-relaxed italic border-l-4 border-forest-main/20 pl-6">
                        &ldquo;{study.summary}&rdquo;
                    </p>
                </header>

                <div className="space-y-24">
                    {study.details && (
                        <>
                            <section className="space-y-8">
                                <h2 className="text-2xl font-yeogiottae text-forest-text flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-forest-main/10 text-forest-main flex items-center justify-center text-sm font-bold font-maru">01</span>
                                    프로젝트 목적
                                </h2>
                                <div className="glass-card p-8 rounded-3xl border-white/10 text-forest-text/80 text-lg leading-relaxed font-maru">
                                    {study.details.purpose}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-2xl font-yeogiottae text-forest-text flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-forest-main/10 text-forest-main flex items-center justify-center text-sm font-bold font-maru">02</span>
                                    문제 정의
                                </h2>
                                <div className="glass-card p-8 rounded-3xl border-white/10 text-forest-text/80 text-lg leading-relaxed font-maru">
                                    {study.details.problem}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-2xl font-yeogiottae text-forest-text flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-forest-main/10 text-forest-main flex items-center justify-center text-sm font-bold font-maru">03</span>
                                    나의 역할과 접근방식
                                </h2>
                                <div className="glass-card p-8 rounded-3xl border-white/10 text-forest-text/80 text-lg leading-relaxed font-maru">
                                    {study.details.role}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-2xl font-yeogiottae text-forest-text flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-forest-main/10 text-forest-main flex items-center justify-center text-sm font-bold font-maru">04</span>
                                    핵심 개선 포인트
                                </h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {study.details.points.map((point, idx) => (
                                        <div key={idx} className="glass-card p-8 rounded-3xl border-white/10 group hover:border-forest-main/30 transition-colors">
                                            <h3 className="text-xl font-yeogiottae text-forest-main mb-3">{point.title}</h3>
                                            <p className="text-forest-text/70 leading-relaxed font-maru">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-2xl font-yeogiottae text-forest-text flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-forest-main/10 text-forest-main flex items-center justify-center text-sm font-bold font-maru">05</span>
                                    성과 및 결과
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {study.details.results.map((result, idx) => (
                                        <div key={idx} className="glass-card p-6 rounded-2xl border-white/10 text-center">
                                            <p className="text-forest-text/80 font-maru text-sm leading-relaxed">{result}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="relative overflow-hidden glass-card p-12 rounded-[40px] border-forest-main/20 bg-forest-main/[0.02]">
                                <div className="relative z-10 space-y-8">
                                    <h2 className="text-3xl font-yeogiottae text-forest-main">INSIGHTS</h2>
                                    <div className="space-y-6">
                                        {study.details.insights.map((insight, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <span className="text-forest-main font-bold mt-1">✓</span>
                                                <p className="text-xl text-forest-text/90 font-maru font-light leading-relaxed">{insight}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-forest-main/5 blur-[100px] -z-0" />
                            </section>
                        </>
                    )}
                </div>

                <div className="mt-32 pb-20 text-center">
                    <Link href="/case-study">
                        <button className="px-10 py-5 bg-forest-main text-white rounded-2xl font-bold shadow-xl hover:bg-forest-main/90 transition-all border border-white/10">
                            목록으로 돌아가기
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
