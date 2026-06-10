import Link from "next/link";
export function HeroSection() {
  return (
    <section className="bg-white pt-23 pb-14 px-6">
      <div className="flex flex-col items-center text-center">
    
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-xl mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          <span className="text-xs font-medium text-slate-600 tracking-wide">
            For Students. By Students.
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
          Smart Conversations For Students
        </h1>

        {/* Subtext */}
        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          BrainBridge helps you connect, collaborate, and learn together in real-time.
        </p>

        {/* Get Started — full width */}
        <Link
          href="/login"
          className="w-full py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl text-center transition-colors duration-150 mb-4"
        >
          Get Started
        </Link>

        {/* Learn More */}
        <a
          href="#how-it-works"
          className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150"
        >
          Learn More
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>
    </section>
  );
}