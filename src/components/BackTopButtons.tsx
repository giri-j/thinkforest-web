export default function BackTopButtons() {
  const handleBack = () => {
    if (typeof window === 'undefined') return;
    if (window.history.length > 1) window.history.back();
    else window.location.href = '/';
  };

  const handleTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="
        fixed left-4 bottom-4 z-50
        flex flex-col gap-2
        [@supports(padding:env(safe-area-inset-bottom))]:mb-[env(safe-area-inset-bottom)]
      "
    >
      {/* 뒤로가기 */}
      <button
        onClick={handleBack}
        className="
          flex items-center justify-center
          w-[36px] h-[36px] min-w-[36px] min-h-[36px]
          !rounded-full p-0 leading-none
          border border-black/10 bg-white/80 backdrop-blur
          shadow-md hover:bg-white active:scale-95 transition
        "
        aria-label="뒤로가기"
        title="뒤로가기"
      >
        <svg
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* TOP */}
      <button
        onClick={handleTop}
        className="
          flex items-center justify-center
          w-[36px] h-[36px] min-w-[36px] min-h-[36px]
          !rounded-full p-0 leading-none
          border border-black/10 bg-white/80 backdrop-blur
          shadow-md hover:bg-white active:scale-95 transition
        "
        aria-label="TOP"
        title="TOP"
      >
        <svg
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M12 5l-7 7h5v7h4v-7h5l-7-7z" />
        </svg>
      </button>
    </div>
  );
}
