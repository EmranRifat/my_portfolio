export default function Education() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-center">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Certifications
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg text-center mb-10 sm:mb-16">
          My academic journey and professional achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Education */}
          <div className="dark:bg-[#0E1629] bg-gray-200 shadow-lg shadow-[#7ba3bb]/60 p-5 sm:p-8 rounded-md border-2 border-slate-300 dark:border-slate-600 hover:shadow-xl hover:shadow-[#7ba3bb] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">🎓</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="group hover:bg-slate-300/60 dark:hover:bg-slate-700/50 p-3 sm:p-4 rounded-lg transition-colors">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Bachelor of Science in CSE (2018-2022)
                </h4>
                <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Daffodil International University
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  CGPA: 3.5/4.0
                </p>
              </div>
              <div className="group hover:bg-slate-300/60 dark:hover:bg-slate-700/50 p-3 sm:p-4 rounded-lg transition-colors">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  HSC (2014-2016)
                </h4>
                <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Fulbaria University Collage
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  GPA: 5 out of 5
                </p>
              </div>
              <div className="group hover:bg-slate-300/60 dark:hover:bg-slate-700/50 p-3 sm:p-4 rounded-lg transition-colors">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  SSC (2014)
                </h4>
                <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Fulbaria Pilot High School
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  GPA: 5 out of 5
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="dark:bg-[#0E1629] bg-gray-200 shadow-lg shadow-[#7ba3bb]/60 p-5 sm:p-8 rounded-md border-2 border-slate-300 dark:border-slate-600 hover:shadow-xl hover:shadow-[#7ba3bb] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">🏆</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Certifications &amp; Achievements
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-300/60 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">
                    ✓
                  </span>
                </div>
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  HackerRank JavaScript (Basic)
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-300/60 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">
                    ✓
                  </span>
                </div>
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Programming Hero Course (Batch-5)
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-300/60 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">
                    ✓
                  </span>
                </div>
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  ICPC Dhaka Regional Participant
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-300/60 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">
                    ✓
                  </span>
                </div>
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Creative IT Institute Ambassador
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
