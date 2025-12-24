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
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              I&apos;m a passionate Web Developer from Dhaka, Bangladesh, with
              over 3 years of Front-End experience and 1+ year as a Full-Stack
              Developer. I hold a Bachelor&apos;s degree in CSE from Daffodil
              International University with a CGPA of 3.5/4.0.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              With a strong foundation in computer science and problem-solving,
              I enjoy building scalable, efficient, and user-centric
              applications using modern web technologies.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I have strengthened my skills through real-world projects,
              continuous learning, and community involvement. I&apos;m always
              eager to learn new technologies, collaborate on exciting projects,
              and contribute to impactful software solutions.
            </p>
          </div>
          <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                <span className="text-slate-700 dark:text-slate-300">
                  3+ years Front-End, 1+ year Full-Stack
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                <span className="text-slate-700 dark:text-slate-300">
                  HackerRank JavaScript Certified
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                <span className="text-slate-700 dark:text-slate-300">
                  Programming Hero Course (Batch-5)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                <span className="text-slate-700 dark:text-slate-300">
                  ICPC Dhaka Regional Participant
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                <span className="text-slate-700 dark:text-slate-300">
                  Creative IT Ambassador
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
