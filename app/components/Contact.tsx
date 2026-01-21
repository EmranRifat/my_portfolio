import GetinTouch from "./GetinTouch";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Let&apos;s <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Work Together</span>
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
              href="mailto:emranrifat.dev@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              emranrifat.dev@gmail.com
            </a>
          </div>
          <div>
            <div className="text-4xl mb-2">💼</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/emran-rifat/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/emran-rifat
            </a>
          </div>
          <div>
            <div className="text-4xl mb-2">🐙</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
              GitHub
            </h3>
            <a
              href="https://github.com/EmranRifat"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/EmranRifat
            </a>
          </div>
        </div>
        <a
          href="mailto:emranrifat.dev@gmail.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium text-lg"
        >
          Send Me an Email
        </a>
      </div>

      {/* <GetinTouch/> */}
    </section>
  );
}
