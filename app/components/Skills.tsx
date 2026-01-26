export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Technologies
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            My technical expertise and tools I work with
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="group dark:bg-[#0E1629] bg-gray-200  shadow-lg shadow-[#7ba3bb] p-6 rounded-md hover:shadow-xl hover:shadow-[#7ba3bb] transition-all duration-300 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  &lt;/&gt;
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Languages
              </h3>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-blue-500">▸</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-blue-500">▸</span> TypeScript
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-blue-500">▸</span> Go (Golang)
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-blue-500">▸</span> C
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="group dark:bg-[#0E1629] bg-gray-200 shadow-lg shadow-[#7ba3bb] p-6 rounded-md hover:shadow-xl hover:shadow-[#7ba3bb] transition-all duration-300 border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-400 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ◨
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Frontend
              </h3>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> ReactJS / NextJS
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> Tailwind CSS
              </li>
              <li className="flex items-center g  ap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸ </span> Redux / Context API
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> TanStack Query
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> Bootstrap
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> Payment Gateway
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-500">▸</span> Framer Motion |
                NextUI | Ant Design
              </li>
            </ul>
          </div>

          {/* Backend & Database */}
          <div className="group dark:bg-[#0E1629] bg-gray-200 shadow-lg shadow-[#7ba3bb] p-6 rounded-md hover:shadow-xl hover:shadow-[#7ba3bb] transition-all duration-300 border-2 border-slate-300 dark:border-slate-600 hover:border-green-500 dark:hover:border-green-400 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ⚙
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Backend & Database
              </h3>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-500">▸</span> NodeJS | ExpressJS |
                Fiber (Go)
              </li>
              <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-500">▸</span> REST API | WebSocket |
                Socket.IO
              </li>
              <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-500">▸</span> JWT Authentication |
                OAuth 2.0
              </li>

              <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-500">▸</span> MySQL | PostgreSQL |
                MongoDB
              </li>
              <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-500">▸</span> Mongoose ORM | GORM
              </li>
            </ul>
          </div>

          {/* Tools & Deployment */}
          <div className="group dark:bg-[#0E1629] bg-gray-200  shadow-lg shadow-[#7ba3bb] p-6 rounded-md hover:shadow-xl hover:shadow-[#7ba3bb] transition-all duration-300 border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                  ◎
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Tools & Deployment
              </h3>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500">▸</span> Git & GitHub | Postman
                API
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500">▸</span> Figma | Firebase |
                Chrome DevTools
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500">▸</span> Vercel | Netlify |
                Heroku
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500">▸</span> GraphQL | Docker |
                Nginx
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Logos */}
        <div className="mt-12 overflow-hidden">
          <div className="relative flex items-center">
            <div className="flex gap-6 animate-scroll">
              {[
                {
                  name: "HTML5",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                },
                {
                  name: "CSS3",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                },
                {
                  name: "JavaScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  name: "TypeScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "React",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Next.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Express",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                },
                {
                  name: "MongoDB",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                {
                  name: "Go",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
                },
                {
                  name: "Tailwind",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "Bootstrap",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                },
                {
                  name: "Git",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                },
              ]
                .concat([
                  {
                    name: "HTML5",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                  },
                  {
                    name: "CSS3",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                  },
                  {
                    name: "JavaScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                  },
                  {
                    name: "TypeScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  },
                  {
                    name: "React",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  },
                  {
                    name: "Next.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  },
                  {
                    name: "Node.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    name: "Express",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                  },
                  {
                    name: "MongoDB",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  },
                  {
                    name: "Go",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
                  },
                  {
                    name: "Tailwind",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                  },
                  {
                    name: "Bootstrap",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                  },
                  {
                    name: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  },
                ])
                .map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 p-3 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-default group hover:scale-125 hover:-rotate-6 relative overflow-hidden"
                    title={tech.name}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain relative z-10 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.9)] transition-all duration-500"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
