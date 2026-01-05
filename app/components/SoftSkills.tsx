export default function SoftSkills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Soft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Effective Communication
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Team Collaboration
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🧩</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Problem-Solving
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Time Management
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
