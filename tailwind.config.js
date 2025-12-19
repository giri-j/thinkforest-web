/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'forest-base': '#F5F5E6', // 부드러운 베이지 (종이 질감)
        'forest-main': '#2E5C38', // 깊은 초록 (나무)
        'forest-light': '#8FBC8F', // 옅은 초록 (잎사귀)
        'forest-highlight': '#D4E157', // 라임 그린 (새싹)
        'forest-accent': '#FF7F50', // 포인트 코랄 (열매/꽃)
        'forest-text': '#1F2A22', // 짙은 녹색 먹 (텍스트)
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
        'opacity-pulse': 'opacityPulse 2s ease-in-out infinite',
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
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        yeogiottae: ['YeogiEottaeJallan', 'sans-serif'],
        maru: ['MaruBuri', 'serif'],

      },
    },
  },
  plugins: [],
};
