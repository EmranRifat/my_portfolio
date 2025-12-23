export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration and admin dashboard.",
      emoji: "🚀",
      gradient: "from-blue-500 to-blue-600",
      tags: ["React", "Node.js", "MongoDB"],
      tagColor: "blue",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates and team features.",
      emoji: "📱",
      gradient: "from-purple-500 to-purple-600",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      tagColor: "purple",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description:
        "A drag-and-drop portfolio builder for developers and designers.",
      emoji: "🎨",
      gradient: "from-green-500 to-green-600",
      tags: ["React", "Express", "MySQL"],
      tagColor: "green",
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="text-white text-6xl">{project.emoji}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-${project.tagColor}-100 dark:bg-${project.tagColor}-900 text-${project.tagColor}-800 dark:text-${project.tagColor}-200 rounded-full text-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className={`text-${project.tagColor}-600 dark:text-${project.tagColor}-400 hover:underline`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className={`text-${project.tagColor}-600 dark:text-${project.tagColor}-400 hover:underline`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
