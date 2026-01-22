export default function Experience() {
  const experiences = [
    {
      id: 2,
      title: "Ambassador",
      company: "Creative IT Institute",
      responsibilities: [
        "Represented the institute in various tech events and workshops",
        "Mentored junior students in web development",
        "Organized coding workshops and tech talks",
      ],
    },

    {
      id: 4,
      title: "Active Member & Organization Team",
      company: "CPC (Computer Programming Club) - DIU",
      responsibilities: [
        "Active member of Computer Programming Club at Daffodil International University",
        "Participated in problem-solving groups and competitive programming",
        "Involved with ICPC organization team for Dhaka Regional",
        "Mentored junior students in algorithmic problem-solving",
      ],
    },
    {
      id: 1,
      title: "MERN Stack Developer Course",
      company: "Programming Hero - Batch 5",
      responsibilities: [
        "Completed comprehensive MERN Stack development course",
        "Built full-stack web applications using ReactJS, NextJS, NodeJS, and MongoDB",
        "Implemented JWT authentication and secure API development",
        "Completed hands-on projects and real-world applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Experience & Achievements
          </span>
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 hidden md:block z-10"></div>

                <div className="md:ml-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-l-4 border-blue-600 hover:border-l-8 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-base text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        <svg
                          className="w-4 h-4 group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y- text-sm text-slate-700 dark:text-slate-300 relative z-10">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">
                          ✓
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Publications Section */}
        <div className="mt-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>

            {/* Timeline Dot */}
            <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-slate-900 hidden md:block z-10"></div>

            <div className="md:ml-20 relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-l-4 border-purple-600 hover:border-l-8 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/10 before:to-pink-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Research & Publications
                </span>
              </h2>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:gap-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all relative z-10">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Realtime Social Distance Monitoring System COVID-19
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed relative z-10">
                Published research paper presenting a comprehensive solution for
                real-time social distance monitoring using surveillance videos
                with computer vision, AI, and deep learning methodologies. The
                framework utilizes the YOLOv3 model for person detection and
                Deep SORT approach for tracking individuals using bounding
                boxes. Trained on COCO dataset with both front-facing and
                side-view perspectives, the system employs overhead camera views
                to accurately detect and monitor social distancing violations in
                mass crowds.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                  YOLOv3
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-xs font-medium">
                  Deep Learning
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                  Computer Vision
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                  Deep SORT
                </span>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                <a
                  href="https://drive.google.com/file/d/1QAyWkTYSo0UZ4ZTPzgbwA77igl-o82qf/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  View Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
