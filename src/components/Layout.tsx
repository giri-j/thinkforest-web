import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { NAV_ITEMS } from '../constants/data';
import CursorEffect from './CursorEffect';

type LayoutProps = {
  title?: string;
  children: ReactNode;
  fullWidth?: boolean;
  noScroll?: boolean;
};

export default function Layout({ title = '기획의 숲', children, fullWidth = false, noScroll = false }: LayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [isVisible, setIsVisible] = useState(true);
  const [footerExpanded, setFooterExpanded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (noScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [noScroll]);

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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <CursorEffect />

      <div className={`min-h-screen bg-forest-base text-forest-text font-sans relative flex flex-col ${noScroll ? 'h-screen overflow-hidden' : ''}`}>
        <header
          className={`fixed top-0 left-0 w-full py-5 px-8 lg:px-12 z-50 transition-all duration-700 ${isVisible
            ? `translate-y-0 opacity-100 backdrop-blur-md ${isHome ? 'bg-white/10' : 'bg-forest-base/80 border-b border-forest-main/5 shadow-sm'}`
            : '-translate-y-full opacity-0'
            }`}
        >
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/think-forest-logo.svg"
                alt="기획의 숲"
                width={160}
                height={60}
                className={`h-10 md:h-12 w-auto ${isHome ? 'invert brightness-0' : ''}`}
                priority
              />
            </Link>
            <div className={`hidden md:flex gap-10 text-[13px] font-bold tracking-[0.15em] items-center uppercase ${isHome ? 'text-white/80' : 'text-forest-text/80'}`}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link flex items-center group"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className={`flex-grow w-full mx-auto ${fullWidth ? '' : 'max-w-7xl px-6 lg:px-12 pt-36'} ${noScroll ? 'h-full flex flex-col' : 'pb-20'}`}>
          {children}
        </main>

        <footer
          className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-700 ease-in-out border-t border-white/10 bg-black/60 backdrop-blur-xl ${footerExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-40px)]'}`}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setFooterExpanded(!footerExpanded)}
            className="w-full h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors group"
          >
            <div className={`transform transition-transform duration-500 ${footerExpanded ? 'rotate-180' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
            <span className="ml-2 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              {footerExpanded ? 'Close Info' : 'Site Info'}
            </span>
          </button>

          <div className="max-w-7xl mx-auto py-7 px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-white/70">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src="/images/think-forest-logo.svg"
                  alt="기획의 숲"
                  width={130}
                  height={45}
                  className="h-9 w-auto invert brightness-0"
                />
              </Link>
              <p className="text-[14px] font-maru leading-relaxed opacity-60 hidden md:block">
                모든 생각은 씨앗이 되고, 기획은 숲을 만듭니다.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <a
                  href="https://www.instagram.com/gianteunkil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iamgil_Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-40">
                © {new Date().getFullYear()} THINK FOREST. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

