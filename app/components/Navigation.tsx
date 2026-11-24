"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted ? theme === "dark" : true;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Mobile menu button - Left side */}
          <div className="md:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-slate-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-slate-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              &lt; RIFAT /&gt;
            </a>
          </div>

          {/* Mobile right side controls */}
          <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            {currentTime && (
              <div className="hidden min-[420px]:block text-[11px] sm:text-xs font-mono whitespace-nowrap text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200/70 dark:border-slate-700/70">
                {currentTime}
              </div>
            )}
            <button
              onClick={toggleTheme}
              disabled={!mounted}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop & Tablet menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm lg:text-base font-medium whitespace-nowrap text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              disabled={!mounted}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shrink-0"
              aria-label="Toggle theme"
              type="button"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {currentTime && (
              <div className="text-xs lg:text-sm font-mono whitespace-nowrap text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 lg:px-3 py-1.5 rounded-lg border border-slate-200/70 dark:border-slate-700/70 shrink-0">
                {currentTime}
              </div>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/70 dark:border-slate-800/70 py-3">
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              {currentTime && (
                <div className="min-[420px]:hidden pt-2 mt-1 border-t border-slate-200/60 dark:border-slate-800/60 px-3">
                  <span className="inline-block text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    {currentTime}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
