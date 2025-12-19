import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import CursorEffect from './CursorEffect';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title = '기획의 숲', children }: LayoutProps) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // 현재 스크롤이 이전보다 크고(내려감) 50px 이상일 때 숨김
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="기획의 숲 - 기리의 포트폴리오와 블로그 공간" />
      </Head>

      {/* 숲 테마 커서 효과 */}
      <CursorEffect />

      <div className="min-h-screen bg-forest-base text-forest-text font-sans relative">
        {/* ✅ 헤더 (스크롤 감지로 숨김/노출) */}
        <header
          className={`fixed top-0 left-0 w-full py-4 px-12 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <nav className="flex justify-end gap-8 text-lg font-yeogiottae items-center">
            <Link href="/" className="hover:text-forest-highlight transition flex items-center gap-1">
              <span>🏡</span> Home
            </Link>
            <Link href="/about" className="hover:text-forest-highlight transition flex items-center gap-1">
              <span>👩‍🌾</span> The Gardener
            </Link>
            <Link href="/project" className="hover:text-forest-highlight transition flex items-center gap-1">
              <span>🌲</span> My Forest
            </Link>
            <Link href="/blog" className="hover:text-forest-highlight transition flex items-center gap-1">
              <span>📝</span> Forest Log
            </Link>
          </nav>
        </header>

        {/* ✅ 헤더 높이만큼 패딩 유지 */}
        <main className="max-w-5xl mx-auto pt-20 px-4">{children}</main>

        <footer className="text-center text-sm text-gray-500 py-10">
          © {new Date().getFullYear()} 기획의 숲. All rights reserved.
        </footer>
      </div>
    </>
  );
}
