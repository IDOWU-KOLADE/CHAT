export function LoginFooter() {
  return (
    <p className="text-center text-xs text-slate-400 mt-8">
      By continuing, you agree to our{" "}
      <a href="/terms" className="text-indigo-600 hover:text-indigo-700 transition-colors">
        Terms
      </a>{" "}
      and{" "}
      <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 transition-colors">
        Privacy Policy
      </a>
      .
    </p>
  );
}