// src/components/GreetingSection.tsx
export default function GreetingSection() {
  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center space-y-6">
      {/* 👋 너구리 인사 GIF - 크기 3배로 확대 */}
      <img
        src="/raccoon-bow.gif"
        alt="너구리 인사"
        className="w-[540px] h-auto" // ← 여기 크기 키움
      />

      {/* 💬 인사 텍스트 */}
      <h2 className="text-white text-3xl md:text-5xl font-yeogiottae text-center">
        <p>안녕하세요. 저는 기획자 기리입니다.</p>
        <p></p>
        <p>반가워요.</p>
      </h2>
    </section>
  );
}
