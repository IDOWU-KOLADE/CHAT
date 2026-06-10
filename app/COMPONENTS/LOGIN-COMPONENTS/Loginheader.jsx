export function LoginHeader() {
  return (
    <header className="px-6 pt-12 pb-6 bg-white flex justify-center">
      <a href="/" className="flex items-center gap-2.5">
        <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-xl">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M15 9c0 3.314-2.686 6-6 6S3 12.314 3 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2"/>
            <circle cx="9" cy="9" r="1.5" fill="white"/>
          </svg>
        </span>
        <span className="text-slate-900 font-bold text-[17px] tracking-tight">
          BrainBridge
        </span>
      </a>
    </header>
  );
}