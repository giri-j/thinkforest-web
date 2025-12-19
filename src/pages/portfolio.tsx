import { useState, useEffect } from 'react';
import Splash from '@/components/Splash';
import Layout from '@/components/Layout';
import IntroVideoSection from '@/components/IntroVideoSection';
import FadeToBlackSection from '@/components/FadeToBlackSection';
import ArchGateAppearSection from '@/components/ArchGateAppearSection';
import ArchGateZoomSection from '@/components/ArchGateZoomSection';

type Project = {
  title: string;
  description: string;
  role: string;
  year: string;
};

const projects: Project[] = [
  {
    title: '기획의 숲 사이트 구축',
    description: '기획자 개인 브랜드를 정립하고, 정보 구조와 콘텐츠 흐름을 직접 설계함.',
    role: '기획 · 설계 · 디자인 디렉션',
    year: '2025',
  },
  {
    title: 'UX 강의 자료 리디자인',
    description: '기존 슬라이드를 브랜드 톤에 맞게 개선하고 전달력을 높인 UX 기획자료 제작.',
    role: '콘텐츠 기획 · 디자인 가이드',
    year: '2024',
  },
];

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <>
          {/* 🎥 메인 영상 */}
          <IntroVideoSection />

          {/* 🌑 암전 */}
          <FadeToBlackSection />

          {/* 🧱 게이트 등장 */}
          <ArchGateAppearSection />

          {/* 🔍 게이트 확대 */}
          <ArchGateZoomSection />

          {/* 📦 콘텐츠 섹션 */}
          <Layout title="포트폴리오 - 기획의 숲">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3E3F]">기획의 숲에 심어온 나무들</h2>
              <p className="text-gray-700">
                내가 직접 설계하고 기획한 프로젝트들을 이곳에 기록합니다.
              </p>
              <ul className="space-y-6">
                {projects.map((project, idx) => (
                  <li
                    key={idx}
                    className="border border-[#D8D8D8] rounded-xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-[#2D3E3F]">{project.title}</h3>
                    <p className="text-gray-600 mt-1">{project.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      🛠 {project.role} · 📅 {project.year}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Layout>
        </>
      )}
    </>
  );
}
