
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BookModal from './BookModal';

gsap.registerPlugin(ScrollTrigger);

import { Book } from '../types';
import { BOOKS } from '../constants/data';


export default function AchievementScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bookListRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);


  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const totalBooks = BOOKS.length;
  const angleStep = 360 / totalBooks;
  const radius = 250;

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !bookListRef.current || !carouselRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=600',
          scrub: true,
        },
      })
        .fromTo(
          textRef.current,
          { opacity: 0, filter: 'blur(8px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 1 }
        )
        .to(textRef.current, {
          y: -100,
          duration: 1,
          ease: 'none',
        });

      gsap.fromTo(
        bookListRef.current,
        { opacity: 0, filter: 'blur(8px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top center',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const rotateLeft = () => {

    setRotationAngle((prev) => prev + angleStep);
  };

  const rotateRight = () => {

    setRotationAngle((prev) => prev - angleStep);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${rotationAngle}deg)`;
    }
  }, [rotationAngle]);

  return (
    <section ref={containerRef} className="relative h-[500vh] text-white font-yeogiottae">
      <div className="fixed inset-0 z-[-10]">
        <Image
          src="/treelibrary.webp"
          alt="도서관 배경"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        ref={textRef}
        className="sticky top-[30%] text-center text-[32px] font-bold opacity-0 z-10"
      >
        제가 했던 프로젝트들이에요
      </div>

      <div className="h-[100vh]" />

      <div
        ref={bookListRef}
        className="sticky top-[35%] flex justify-center items-center flex-col gap-8 opacity-0"
        style={{ filter: 'blur(10px)', perspective: '1200px' }}
      >
        <div
          ref={carouselRef}
          className="relative w-[280px] h-[380px] transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {BOOKS.map((book: Book, index: number) => {
            const angle = angleStep * index;
            return (
              <div
                key={book.id}
                className="absolute w-[280px] h-[380px] left-1/2 top-0"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  marginLeft: '-140px',
                }}
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  width={220}
                  height={380}
                  className="rounded-xl shadow-lg object-cover cursor-pointer"
                  onClick={() => setSelectedBook(book)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-24 mt-4">
          <button
            onClick={rotateLeft}
            className="bg-white text-black px-4 py-2 rounded shadow"
            aria-label="Previous Project"
          >
            ◀
          </button>
          <button
            onClick={rotateRight}
            className="bg-white text-black px-4 py-2 rounded shadow"
            aria-label="Next Project"
          >
            ▶
          </button>
        </div>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </section>
  );
}
