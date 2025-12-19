'use client';

import { useEffect, useState } from 'react';

const navItems = [
  {
    category: '1. IT기획',
    items: [
      { label: 'NITSOFT', target: 'nitsoft', bg: 'light' },
      { label: 'CELLOOK', target: 'cellook', bg: 'dark' },
      { label: "'S'그룹 DX 교육 플랫폼", target: 's-dx', bg: 'light' },
      { label: 'Artch - 예술X기업 연결 서비스', target: 'artch', bg: 'dark' },
      { label: 'Re:vind - 멀티 링크 서비스', target: 'revind', bg: 'light' },
      { label: "'S' 자산운용사 기업 홈페이지", target: 's-asset', bg: 'dark' },
    ],
  },
  {
    category: '2. 운영기획',
    items: [
      { label: '와인 픽업 서비스', target: 'wine-pickup', bg: 'light' },
      { label: 'QR 픽업 서비스', target: 'qr-pickup', bg: 'dark' },
      { label: '스마트픽 서비스', target: 'smartpick', bg: 'light' },
      { label: '롯데닷컴 배송 품질 개선', target: 'lotte-delivery', bg: 'dark' },
      { label: '스마트픽 교육 영상 배포', target: 'smartpick-edu', bg: 'light' },
    ],
  },
  {
    category: '3. 사업기획',
    items: [
      { label: '명품 화장품 직구 사업', target: 'luxury-cosmetics', bg: 'dark' },
      { label: '사업 기획안 작성', target: 'biz-plan', bg: 'light' },
      { label: 'IR자료 작성', target: 'ir-pitch', bg: 'dark' },
    ],
  },
  {
    category: '4. 기타',
    items: [
      { label: '1박 2일 워크샵 기획', target: 'workshop', bg: 'light' },
      { label: '회사 시스템 교육', target: 'internal-training', bg: 'dark' },
      { label: "직장인 극단 '우리들의 시간' 주연", target: 'theater', bg: 'light' },
      { label: '대학생 대상 강연 및 상담', target: 'student-outreach', bg: 'dark' },
      { label: '유튜브 크루 활동', target: 'youtube-crew', bg: 'light' },
      { label: '내 인생 기획', target: 'life-planning', bg: 'dark' },
      { label: '체력 단련 상황', target: 'training', bg: 'light' },
    ],
  },
  // 필요 시 계속 추가
];

export default function ProjectNavigation() {
  const [activeBg, setActiveBg] = useState<'light' | 'dark'>('light');
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    const checkDimmed = () => {
      const hasDim = document.body.classList.contains('dimmed');
      setIsDimmed(hasDim);
    };

    checkDimmed(); // 초기 체크
    window.addEventListener('scroll', checkDimmed);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const bg = navItems
              .flatMap(group => group.items)
              .find(item => item.target === id)?.bg;
            if (bg === 'dark' || bg === 'light') {
              setActiveBg(bg);
            }
            break;
          }
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', checkDimmed);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // 최종 색상 판단
  const textColor = isDimmed
    ? 'text-white'
    : activeBg === 'dark'
    ? 'text-white'
    : 'text-black';

  return (
    <nav className={`fixed top-12 left-6 z-50 space-y-6 text-sm transition-colors duration-300 ${textColor}`}>
      {navItems.map((group, idx) => (
        <div key={idx}>
          <div className="font-bold mb-1">{group.category}</div>
          <ul className="space-y-1 pl-2 border-l border-gray-300">
            {group.items.map((item, i) => (
              <li key={i}>
                <a href={`#${item.target}`} className="hover:underline transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
