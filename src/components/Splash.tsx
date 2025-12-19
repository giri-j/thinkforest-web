import Image from 'next/image';

export default function Splash() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      {/* ✅ 배경 애니메이션 분리 */}
      <div className="w-full h-screen absolute inset-0 animate-fade-slide">
        <Image
          src="/splash.png"
          alt="기획의 숲"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ✅ 텍스트 애니메이션 별도 분리 */}
      <div
        className="absolute z-10 text-white text-4xl font-bold font-maru flex flex-col leading-[1.2]"
        style={{
          left: '1300px',
          top: '300px',
        }}
      >
        <span className="opacity-0 animate-fade-letter" style={{ animationDelay: '0ms' }}>
          기
        </span>
        <span className="opacity-0 animate-fade-letter" style={{ animationDelay: '300ms' }}>
          획
        </span>
        <span className="opacity-0 animate-fade-letter" style={{ animationDelay: '600ms' }}>
          의
        </span>
        <div className="h-4" />
        <span className="opacity-0 animate-fade-letter" style={{ animationDelay: '900ms' }}>
          숲
        </span>
        <span className="text-xl mt-4 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards] font-light text-forest-highlight">
          🌿 숲을 조성하는 중...
        </span>
      </div>
    </div>
  );
}

