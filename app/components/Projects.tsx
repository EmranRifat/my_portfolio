/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { projects } from "@/data/project_data";
import { Button } from "@heroui/react";

export default function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [showAll, setShowAll] = useState(false);
  const [visibleCredentials, setVisibleCredentials] = useState<
    Record<number, boolean>
  >({});

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const toggleCredentials = (projectId: number) => {
    setVisibleCredentials((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getTagColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      purple:
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      green:
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      pink: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      indigo:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      orange:
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    };
    return colorMap[color] || colorMap.blue;
  };

  const getLinkColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      green: "text-green-600 dark:text-green-400",
      pink: "text-pink-600 dark:text-pink-400",
      indigo: "text-indigo-600 dark:text-indigo-400",
      orange: "text-orange-600 dark:text-orange-400",
      cyan: "text-cyan-600 dark:text-cyan-400",
      yellow: "text-yellow-600 dark:text-yellow-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-md transition ${
                viewMode === "grid"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-md transition ${
                viewMode === "list"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
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
                        className={`px-3 py-1 ${getTagColorClasses(project.tagColor)} rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.credentials && (
                    <div className="mb-4 p-2 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                      <button
                        onClick={() => toggleCredentials(project.id)}
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                      >
                        {visibleCredentials[project.id]
                          ? "🔒 Hide Credentials"
                          : "🔓 Show Credentials"}
                      </button>
                      {visibleCredentials[project.id] && (
                        <div className="mt-2 text-slate-600 dark:text-slate-400">
                          <p>{project.credentials.number}</p>
                          <p>{project.credentials.password}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className={`${getLinkColorClasses(project.tagColor)} hover:underline`}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className={`${getLinkColorClasses(project.tagColor)} hover:underline`}
                    >
                      GitHub
                    </a>

                    {/* <Button
                      color="primary"
                      variant="flat"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                    >
                      Explore Project
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-48 h-32 md:h-auto shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${getTagColorClasses(project.tagColor)} rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.credentials && (
                    <div className="mb-4 p-2 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                      <button
                        onClick={() => toggleCredentials(project.id)}
                        className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition font-medium"
                      >
                        {visibleCredentials[project.id]
                          ? "🔒 Hide Credentials"
                          : "🔓 Show Credentials"}
                      </button>
                      {visibleCredentials[project.id] && (
                        <div className="mt-2 text-slate-600 dark:text-slate-400">
                          <p>{project.credentials.number}</p>
                          <p>{project.credentials.password}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className={`${getLinkColorClasses(project.tagColor)} hover:underline font-medium`}
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      className={`${getLinkColorClasses(project.tagColor)} hover:underline font-medium`}
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
