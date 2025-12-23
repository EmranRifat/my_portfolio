export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4">🎓</div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Bachelor of Science in CSE
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Daffodil International University
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  CGPA: 3.5/4.0
                </p>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Certifications & Achievements
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>HackerRank JavaScript (Basic)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Programming Hero Course (Batch-5)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>ICPC Dhaka Regional Participant</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
