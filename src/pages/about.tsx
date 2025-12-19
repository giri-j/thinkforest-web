

import { useState, useEffect } from 'react';

import Splash from '../components/Splash';
import IntroVideoSection from '../components/IntroVideoSection';
import ArchGateZoomSection from '../components/ArchGateZoomSection';
import GreetingSection from '../components/GreetingSection';
import HorizontalScrollSection from '../components/HorizontalScrollSection';
import AchievementScroll from '../components/AchievementScroll';
import FinalOutroSection from '../components/FinalOutroSection';

import BackTopButtons from '../components/BackTopButtons';



export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-yeogiottae">
      {/* ← 항상 떠 있게 스플래시 조건 밖에 둡니다 */}
      <BackTopButtons />

      {showSplash ? (
        <Splash />
      ) : (
        <>
          {/* 🎥 1. 인트로 영상 */}
          <IntroVideoSection />

          {/* 🔍 2. Arch Gate 확대 및 사라짐 */}
          <ArchGateZoomSection />

          {/* 🙋‍♂️ 3. 텍스트 인사 */}
          <GreetingSection />

          {/* 🚶‍♂️ 4. 가로 스크롤 섹션 */}
          <HorizontalScrollSection />

          {/* 📚 5. 업적 책커버 목록 */}
          <AchievementScroll />

          {/* 📚 6. 마지막 소개 페이지 */}
          <FinalOutroSection />
        </>
      )}
    </div>
  );
}
