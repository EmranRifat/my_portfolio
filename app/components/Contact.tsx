export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-8">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Work Together
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-12">
          <div className="p-4 sm:p-5 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
            <div className="text-3xl sm:text-4xl mb-2">📧</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              Email
            </h3>
            <a
              href="mailto:emranrifat.dev@gmail.com"
              className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline break-all sm:break-words"
            >
              emranrifat.dev@gmail.com
            </a>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
            <div className="text-3xl sm:text-4xl mb-2">💼</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/emran-rifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline break-all sm:break-words"
            >
              linkedin.com/in/emran-rifat
            </a>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
            <div className="text-3xl sm:text-4xl mb-2">🐙</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              GitHub
            </h3>
            <a
              href="https://github.com/EmranRifat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline break-all sm:break-words"
            >
              github.com/EmranRifat
            </a>
          </div>
        </div>

        <a
          href="mailto:emranrifat.dev@gmail.com"
          className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium text-base sm:text-lg shadow-lg"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
