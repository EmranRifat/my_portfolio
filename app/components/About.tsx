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
          About <span className="text-blue-800 dark:text-blue-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              I&apos;m a Web Developer from Dhaka, Bangladesh, with 3+ years of
              Front-End experience and over 1 year as a Full-Stack Developer. I
              completed my Bachelor&apos;s in CSE from Daffodil International
              University with a CGPA of 3.5/4.0.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              I focus on building responsive, scalable, and user-friendly web
              applications. I enjoy turning ideas into clean and efficient
              solutions, writing maintainable code, and continuously improving
              my skills through real-world projects and learning.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I value honesty, teamwork, and personal growth. Whether working
              independently or in a team, I approach every project with
              dedication and a strong problem-solving mindset, aiming to deliver
              meaningful and impactful software.
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
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  Full Stack Developer
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  March 2024 - Currently Working
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Working as Front-end Team Lead • Maintaining BPO (Bangladesh
                  Post Office) API integration across multiple projects •
                  Developing SSO platform • Creating & maintaining Admin panels
                  • Implementing Docker containerization • Bug fixing and
                  performance optimization • Leading front-end development
                  initiatives and mentoring team members.
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
                  Design & develop web project • Manage the backend • Data base
                  management • Debugging errors • Hosting live server • Client
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
