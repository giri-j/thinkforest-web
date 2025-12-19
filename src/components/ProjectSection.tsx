import Image from 'next/image';

interface ProjectSectionProps {
  id: string;
  image: string;
  title: string;
  description: string;
  role: string;
  year: string;
  heading: string;
  link?: string;
}

export default function ProjectSection({
  id,
  image,
  title,
  description,
  role,
  year,
  heading,
  link,
}: ProjectSectionProps) {
  return (
    <section id={id} className="w-full min-h-screen bg-white text-black border-t border-gray-200">
      {/* 상단 타이틀 + 버튼 */}
      <div className="w-full flex justify-between items-center pl-64 pr-12 py-6 border-b border-gray-300">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs font-medium inline-flex items-center gap-1 hover:underline transition"
          >
            <span className="align-middle">더보기</span>
            <span className="text-sm align-middle">›</span>
          </a>
        )}
      </div>

      {/* 본문 */}
      <div className="flex w-full h-[calc(100vh-80px)]">
        <aside className="w-[220px] border-r border-gray-300 px-6 py-6 hidden lg:block" />
        <div className="flex-1 border-r border-gray-300 relative p-6">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
            className="p-6" // Add padding to image instead of container since container is relative/fill
          />
        </div>
        <div className="w-[500px] h-[500px] m-12 border border-gray-400 p-6 text-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="mb-3">{description}</p>
            <p className="text-gray-600">역할: {role}</p>
            <p className="text-gray-500">연도: {year}</p>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs font-medium inline-flex items-center gap-1 hover:underline transition"
            >
              <span className="align-middle">더보기</span>
              <span className="text-sm align-middle">›</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
