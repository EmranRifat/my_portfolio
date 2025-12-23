export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-4xl mb-2">📧</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              Email
            </h3>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              your.email@example.com
            </a>
          </div>
          <div>
            <div className="text-4xl mb-2">💼</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              LinkedIn
            </h3>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div>
            <div className="text-4xl mb-2">🐙</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              GitHub
            </h3>
            <a
              href="https://github.com/yourusername"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium text-lg"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
