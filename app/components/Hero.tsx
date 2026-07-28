"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "Full Stack Developer",
          "Software Engineer",
          "React.js & Next.js Specialist",
          "Go (Fiber) Backend Developer",
          "Scalable Web Application Developer",
          "SaaS Platform Engineer",
          "Modern Web Solution Builder",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="
    pt-32 pb-20 px-4 sm:px-6 lg:px-8 
    relative overflow-hidden
    bg-gradient-to-br 
    from-slate-100 
    via-white 
    to-slate-200
    dark:from-black
    dark:via-black
    dark:to-slate-900
    transition-colors
    duration-500
  "
    >
      {/* Background Image with Opacity */}
      <div
        className=" absolute inset-0 bg-no-repeat bg-contain bg-left opacity-20 dark:opacity-1 transition-opacity duration-500 "
        style={{
          backgroundImage: "url('/assets/images/formal-black.png')",
        }}
      />

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 items-center justify-center">
          {" "}
          {/* Content on the top for mobile, left for desktop */}
          <div className="relative md:translate-x-48 lg:translate-x-72">
            {" "}
            <div className="text-center md:text-left order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
              <div className="mb-4">
                <span className="font-mono text-sm md:text-base text-blue-600 dark:text-blue-400">
                  &lt;Hello World /&gt;
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="text-2xl sm:text-3xl"> Hi, I&apos;m </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Emran Hasan Rifat
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-slate-600 dark:text-slate-300 mb-2">
                <span
                  ref={typedElement}
                  className="typing text-[#aa1244] dark:text-red-500 font-semibold"
                ></span>
              </p>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 text-sm">
                  📍
                </span>{" "}
                Dhaka, Bangladesh
              </p>
              <p className="mt-2 w-full max-w-4xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">
                I specialize in designing, developing, and maintaining scalable
                web applications using{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  modern frontend and backend technologies
                </span>{" "}
                with AI-assisted workflows to build efficient, high-quality
                software.
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2 max-w-xs sm:max-w-none mx-auto md:mx-0">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Go",
                  "Node.js",
                  "Django",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-medium hover:bg-blue-600 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="relative overflow-visible px-12 py-3 shadow-sm bg-gradient-to-r from-blue-600 to-purple-600 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:duration-700 hover:after:scale-150 hover:after:opacity-0 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="relative overflow-visible px-12 py-3 shadow-sm bg-slate-200 dark:bg-slate-800 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:duration-700 hover:after:scale-150 hover:after:opacity-0 text-slate-900 dark:text-white rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition font-medium"
              >
                View Projects
              </a>
            </div> */}
              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
                >
                  Hire Me
                </a>

                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full border border-slate-400 dark:border-slate-600 font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          {/* Download Resume Circle - Top on mobile, right on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center order-1 md:order-2">
            {" "}
            <a
              href="/assets/Resume.Imran0.2.pdf"
              download
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 relative flex items-center justify-center cursor-pointer rounded-full transition-all hover:scale-110 hover:-translate-y-2 duration-300 group"
            >
              <div className="relative w-36 h-36 sm:w-42 sm:h-42 lg:w-48 lg:h-48">
                {/* Spinning Text */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin group-hover:animate-none transition-all"
                  style={{ animationDuration: "15s" }}
                  viewBox="0 0 224 224"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 112, 112 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    />
                  </defs>
                  <text className="text-base sm:text-lg lg:text-xl font-semibold dark:fill-white fill-black tracking-widest drop-shadow-lg">
                    <textPath href="#circlePath" startOffset="0%">
                      ➡️ DOWNLOAD RESUME FROM HERE ➡️DOWNLOAD RESUME FROM HERE
                    </textPath>
                  </text>
                </svg>

                {/* Center Arrow Icon */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 animate-pulse group-hover:bg-blue-600 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-black dark:text-white group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            {/* Social Media Icons - Vertical on right side */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3 items-center justify-center mt-2 md:mt-0">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/emran-rifat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center  rounded-full border dark:border-white border-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white hover:border-transparent transition-all hover:scale-110 hover:rotate-6 shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.5)] md:ml-[-20px]"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/EmranRifat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center  rounded-full border border-gray-700 dark:border-white text-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 dark:hover:from-white dark:hover:to-gray-100 hover:text-white dark:hover:text-slate-900 hover:border-transparent transition-all hover:scale-110 hover:rotate-6 shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(75,85,99,0.5)] md:ml-12"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/emranhasan.rifat.7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center  rounded-full border border-gray-700 dark:border-white text-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:border-transparent transition-all hover:scale-110 hover:rotate-6 shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.5)] md:ml-20"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/emran_hasan_rifat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center  rounded-full border border-gray-700 dark:border-white text-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:border-transparent transition-all hover:scale-110 hover:rotate-6 shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(219,39,119,0.5)] md:ml-12"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:emranrifat.dev@gmail.com"
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center  rounded-full border border-gray-700 dark:border-white text-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all hover:scale-110 hover:rotate-6 shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(147,51,234,0.5)] md:ml-[-20px] cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Statistics - Below Resume Circle */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <div className="text-center px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              3+
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Years Experience
            </p>
          </div>

          <div className="text-center px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              40+
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Projects
            </p>
          </div>

          <div className="text-center px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              15+
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
