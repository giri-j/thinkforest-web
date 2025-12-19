import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Book = {
  title: string;
  description: string;
  slug: string;
};

type Props = {
  book: Book;
  onClose: () => void;
};

export default function BookModal({ book, onClose }: Props) {
  const router = useRouter();

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* 내용 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-6">{book.description}</p>

        {/* 자세히 보기 */}
        <button
          onClick={() => router.push(`/project/${book.slug}`)}
          className="text-blue-600 hover:underline font-medium"
        >
          자세히 보기 →
        </button>
      </div>
    </div>
  );
}
