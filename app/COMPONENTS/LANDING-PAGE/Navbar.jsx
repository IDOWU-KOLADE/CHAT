"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-xl">
                {/* Simple brain-bridge icon mark */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M15 9c0 3.314-2.686 6-6 6S3 12.314 3 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2"/>
                  <circle cx="9" cy="9" r="1.5" fill="white"/>
                </svg>
              </span>
              <span className="text-slate-900 font-bold text-[17px] tracking-tight">
                BrainBridge
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/login"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-150"
              >
                Sign in
              </a>
              <a
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors duration-150"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-xl hover:bg-slate-100 transition-colors"
            >
              <span
                className={`block h-[1.5px] bg-slate-800 transition-all duration-200 ${
                  mobileOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-slate-800 transition-all duration-200 ${
                  mobileOpen ? "opacity-0 w-4" : "w-4"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-slate-800 transition-all duration-200 ${
                  mobileOpen ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-200 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-sm transition-transform duration-200 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Repeat header row inside panel so logo stays visible */}
          <div className="flex items-center justify-between h-16 px-4">
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-xl">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M15 9c0 3.314-2.686 6-6 6S3 12.314 3 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2"/>
                  <circle cx="9" cy="9" r="1.5" fill="white"/>
                </svg>
              </span>
              <span className="text-slate-900 font-bold text-[17px] tracking-tight">BrainBridge</span>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-4 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="px-4 pb-6 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href="/login"
              className="w-full py-2.5 text-sm font-medium text-center text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors duration-150"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="w-full py-2.5 text-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors duration-150"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}