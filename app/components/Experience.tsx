export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      company: "Freelance & Contract Work",
      period: "2023 - Present",
      responsibilities: [
        "Developed full-stack web applications using ReactJS, NextJS, NodeJS, and Go",
        "Implemented authentication systems with JWT and secure API development",
        "Built scalable backend services with ExpressJS and Fiber (Go)",
        "Managed databases including MySQL, MongoDB, and PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "Ambassador",
      company: "Creative IT Institute",
      period: "2022 - 2023",
      responsibilities: [
        "Represented the institute in various tech events and workshops",
        "Mentored junior students in web development",
        "Organized coding workshops and tech talks",
      ],
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "Various Projects",
      period: "2021 - 2023",
      responsibilities: [
        "Built responsive and interactive user interfaces with React and Tailwind CSS",
        "Integrated REST APIs and state management with Redux and Context API",
        "Collaborated with designers to implement pixel-perfect designs",
        "Optimized application performance and user experience",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>• {resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
