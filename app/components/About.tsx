import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/notegpt2.png"
          alt="Background"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
    About{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      Me
    </span>
  </h2>

  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
        I&apos;m a Software Engineer and Full Stack Developer from Dhaka,
        Bangladesh, with 3+ years of experience building modern web applications.
        I specialize in developing scalable frontend and backend solutions using
        Next.js, TypeScript, Go Fiber, Django, and PostgreSQL.
      </p>

      <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
        I have built and deployed multiple production-ready full-stack
        applications, designed secure JWT authentication and role-based access
        control (RBAC) systems, and developed scalable REST APIs with optimized
        database architectures.
      </p>

      <p className="text-lg text-slate-600 dark:text-slate-300">
        My experience includes delivering enterprise software solutions such as
        the Bangladesh Post Office Booking Management System. I also leverage
        AI-assisted development tools to improve productivity, enhance code
        quality, and streamline software delivery while continuously improving
        my technical skills.
      </p>
    </div>

          <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Work Experience
            </h3>

            <div className="space-y-6">
              {/* Smart Think */}
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-400">
                      Smart Think
                    </h4>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-1.5 py-1 rounded-full">
                    Active
                  </span>
                </div>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
  Software Engineer
</p>

<p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
   March 2024 - Present
</p>

<div className="flex flex-wrap gap-1.5 mb-2">
  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-1 py-0.5 rounded">
    Next.js
  </span>
  <span className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs px-1 py-0.5 rounded">
    TypeScript
  </span>
  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-1 py-0.5 rounded">
    Go (Fiber)
  </span>
  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-1 py-0.5 rounded">
    Django
  </span>
  <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-1 py-0.5 rounded">
    PostgreSQL
  </span>
  <span className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs px-1 py-0.5 rounded">
    Docker
  </span>
</div>

<p className="text-sm text-slate-700 dark:text-slate-300">
  Developed and maintained scalable enterprise web applications using Next.js,
  Go Fiber, Django, and PostgreSQL • Designed secure JWT-based authentication
  and role-based access control (RBAC) systems • Built RESTful APIs and
  optimized database queries to improve application performance and
  maintainability • Delivered enterprise solutions including a Booking
  Management System for Bangladesh Post Office • Collaborated with
  cross-functional teams in Agile environments to build and deploy
  production-ready software solutions.
</p>
              </div>

              {/* Achieve It Ltd */}
              <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-4">
                <h4 className="text-xl font-semibold text-purple-800 dark:text-purple-400">
                  Achieve It Ltd
                </h4>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  MERN Stack Developer
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  January 2023 - September 2023
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Creating and maintaining websites and applications • include
                  building user interfaces • developing server-side logic •
                  ensuring web security • conducting testing • optimizing
                  performance • collaborating with teams • staying updated on
                  industry trends and documenting code • specialize in
                  front-end, back-end, or full-stack development and work with
                  various technologies to meet project requirements.
                </p>
              </div>

              {/* Monster Claw LLC */}
              <div className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
                <h4 className="text-xl font-semibold text-indigo-800 dark:text-indigo-400">
                  Monster Claw LLC
                </h4>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  Software Developer Intern
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  April 2022 - October 2022
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Designed and developed full-stack web applications using MERN
                  stack (MongoDB, Express.js, React.js, Node.js) • Managed
                  backend architecture and RESTful API development • Implemented
                  database design and management with MongoDB • Performed
                  debugging and error resolution • Deployed and maintained
                  applications on live servers • Collaborated with clients to
                  gather requirements and deliver solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
