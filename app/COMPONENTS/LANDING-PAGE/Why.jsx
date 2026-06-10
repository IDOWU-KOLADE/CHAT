export function WhyChooseSection() {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 10a4 4 0 1 0-6 0M3 17c0-2.761 3.134-5 7-5s7 2.239 7 5" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
      title: "Instant Messaging",
      description: "Real-time messaging with live updates and seamless sync across all your devices.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="14" height="14" rx="3" stroke="#4F46E5" strokeWidth="1.6"/>
          <path d="M7 10h6M7 13h4" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
      title: "Secure & Private",
      description: "Your conversations are protected with enterprise-grade security you can trust.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="7" cy="8" r="3" stroke="#4F46E5" strokeWidth="1.6"/>
          <circle cx="13" cy="8" r="3" stroke="#4F46E5" strokeWidth="1.6"/>
          <path d="M1 17c0-2 2.686-3.5 6-3.5M19 17c0-2-2.686-3.5-6-3.5M10 17c0-2-1.5-3.5-3-3.5" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
      title: "Connect Easily",
      description: "Find and connect with other students and collaborate effortlessly.",
    },
  ];

  return (
    <section className="pb-10  px-6">

      {/* Section heading */}
      <h2 className="text-xl font-bold text-slate-900 text-center mb-8">
        Why Choose BrainBridge?
      </h2>

      {/* Feature cards */}
      <div className="flex flex-col gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
          >
            {/* Icon */}
            <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-xl">
              {f.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-1">{f.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}