export default function SoftSkills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Soft{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Skills
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Effective Communication
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Team Collaboration
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center border-2 border-transparent hover:border-green-500 dark:hover:border-green-400 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-3">🧩</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Problem-Solving
            </h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center border-2 border-transparent hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
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
