/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'forest-base': '#F0F4EF', // 신선한 숲의 공기 (연한 민트 베이지)
        'forest-main': '#1D432E', // 깊은 숲의 색 (진한 초록)
        'forest-light': '#4A7C59', // 풍성한 잎사귀 (중간 초록)
        'forest-highlight': '#8FCB81', // 햇살을 머금은 새싹 (연초록)
        'forest-accent': '#FFD700', // 숲 사이로 비치는 햇볕 (골드/옐로우)
        'forest-text': '#12261B', // 짙은 솔잎 색 (텍스트)
        'forest-shadow': '#0A1A11', // 숲속 깊은 그늘
      },
      animationDelay: {
        '0': '0ms',
        '300': '300ms',
        '600': '600ms',
        '900': '900ms',
      },
      animation: {
        'fade-slide': 'fadeSlide 6s ease-in-out forwards',
        'title-fade': 'titleFade 1s ease-in-out 1s forwards',
        'fade-letter': 'fadeLetter 0.5s ease-in-out forwards',
        'blur-fade-in': 'blurFadeIn 2s ease-out forwards',
        'fade-in': 'fadeIn 2s ease-out forwards',
        'opacity-pulse': 'opacityPulse 3s ease-in-out infinite',
        'sun-ray': 'sunRay 10s ease-in-out infinite',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateX(1.5%)' },
          '10%': { opacity: '1', transform: 'translateX(1.5%)' },
          '90%': { opacity: '1', transform: 'translateX(-1.5%)' },
          '100%': { opacity: '0', transform: 'translateX(-1.5%)' },
        },
        titleFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeLetter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blurFadeIn: {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        opacityPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        sunRay: {
          '0%, 100%': { transform: 'rotate(-5deg) scale(1)', opacity: '0.3' },
          '50%': { transform: 'rotate(5deg) scale(1.1)', opacity: '0.6' },
        }
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        yeogiottae: ['YeogiEottaeJallan', 'sans-serif'],
        maru: ['MaruBuri', 'serif'],
        gmarket: ['GmarketSansBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
