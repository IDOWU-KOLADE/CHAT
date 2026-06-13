"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
  setLoading(true);
  setError("");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });

  if (error) {
    setError(error.message);
    setLoading(false);
    return;
  }

  // Save the user to profiles table
const { error: profileError } = await supabase
  .from("profiles")
  .insert({
    id: data.user.id,
    full_name: fullName,
  });

if (profileError) {
  setError(profileError.message);
  setLoading(false);
  return;
}

  window.location.href = "/login";
};
  return (
    <div className="flex flex-col gap-5">

      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">Full Name</label>
        <input
          type="text"
          placeholder="Your full name" value={fullName} onChange={(e)=> setFullName(e.target.value)}
          className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password" onChange={(e)=> setPassword(e.target.value)}
            className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-11"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {/* Sign Up button */}
      <button onClick={handleSignUp} disabled={loading} className="w-full py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors duration-150">
        {loading ? "Creating account..." : "Sign Up"} 
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400">or</span>
        <span className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Already have an account */}
      <a
        href="/login"
        className="w-full py-3 text-sm font-semibold text-slate-700 text-center border border-slate-200 bg-white hover:bg-slate-50 rounded-xl transition-colors duration-150"
      >
        Already have an account? Login
      </a>

    </div>
  );
}