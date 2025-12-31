import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NAV_ITEMS } from '../constants/data';
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

      <CursorEffect />

      <div className="min-h-screen bg-forest-base text-forest-text font-sans relative flex flex-col">
        <header
          className={`fixed top-0 left-0 w-full py-6 px-12 z-50 transition-all duration-500 ${isVisible
              ? 'translate-y-0 opacity-100 bg-white/5 backdrop-blur-[2px]'
              : '-translate-y-full opacity-0'
            }`}
        >
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-yeogiottae text-forest-main hover:opacity-80 transition-opacity">
              기획의 숲
            </Link>
            <div className="flex gap-8 text-sm font-medium tracking-wide items-center uppercase">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link flex items-center gap-2 px-2 py-1"
                >
                  <span className="text-lg opacity-80 group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          {children}
        </main>

        <footer className="border-t border-forest-main/10 bg-white/30 backdrop-blur-sm py-16 px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-yeogiottae text-forest-main mb-2">기획의 숲</h3>
              <p className="text-sm text-forest-text/60">가꾸고 기획하며 성장하는 공간</p>
            </div>

            <div className="flex gap-6">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm hover:text-forest-main transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-forest-text/40 tracking-widest uppercase">
                © {new Date().getFullYear()} THNK FOREST. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

