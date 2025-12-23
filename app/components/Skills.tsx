export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Languages
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Go (Golang)</li>
              <li>C</li>
            </ul>
          </div>
          {/* Frontend */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>ReactJS / NextJS</li>
              <li>Tailwind CSS</li>
              <li>Redux / Context API</li>
              <li>TanStack Query</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Backend
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>NodeJS / ExpressJS</li>
              <li>Fiber (Go)</li>
              <li>REST API</li>
              <li>JWT Auth</li>
              <li>GORM</li>
              <li>WebSocket / Socket.IO</li>
            </ul>
          </div>
          {/* Database & Tools */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Database & Tools
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>MySQL / PostgreSQL</li>
              <li>MongoDB</li>
              <li>Docker / Nginx</li>
              <li>Git & GitHub</li>
              <li>VS Code / Postman</li>
              <li>GraphQL (Familiar)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
