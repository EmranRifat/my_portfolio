/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { projects, Project } from "@/data/project_data";

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

  const renderProjectLinks = (project: Project, showArrow = false) => {
    const linkClass = `${getLinkColorClasses(project.tagColor)} hover:underline font-medium text-sm sm:text-base`;
    const suffix = showArrow ? " →" : "";
    const isExternal = (url: string) => url.startsWith("http");

    return (
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <a
          href={project.liveDemo}
          target={isExternal(project.liveDemo) ? "_blank" : undefined}
          rel={isExternal(project.liveDemo) ? "noopener noreferrer" : undefined}
          className={linkClass}
        >
          Live Demo{suffix}
        </a>

        {typeof project.github === "string" ? (
          <a
            href={project.github}
            target={isExternal(project.github) ? "_blank" : undefined}
            rel={isExternal(project.github) ? "noopener noreferrer" : undefined}
            className={linkClass}
          >
            GitHub{suffix}
          </a>
        ) : (
          <>
            <a
              href={project.github.client}
              target={isExternal(project.github.client) ? "_blank" : undefined}
              rel={
                isExternal(project.github.client)
                  ? "noopener noreferrer"
                  : undefined
              }
              className={linkClass}
            >
              GitHub (Client){suffix}
            </a>
            {project.github.server && (
              <a
                href={project.github.server}
                target={
                  isExternal(project.github.server) ? "_blank" : undefined
                }
                rel={
                  isExternal(project.github.server)
                    ? "noopener noreferrer"
                    : undefined
                }
                className={linkClass}
              >
                GitHub (Server){suffix}
              </a>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-center sm:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              type="button"
              className={`px-3.5 sm:px-4 py-2 rounded-md transition ${
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
              aria-label="List view"
              type="button"
              className={`px-3.5 sm:px-4 py-2 rounded-md transition ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 md:hover:scale-[1.02] border-2 border-transparent hover:border-blue-500 dark:hover:border-purple-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              >
                <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2.5 sm:px-3 py-1 ${getTagColorClasses(project.tagColor)} rounded-full text-xs sm:text-sm`}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  {project.credentials && (
                    <div className="mb-4 p-2.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                      <button
                        onClick={() => toggleCredentials(project.id)}
                        type="button"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                      >
                        {visibleCredentials[project.id]
                          ? "🔒 Hide Credentials"
                          : "🔓 Show Credentials"}
                      </button>
                      {visibleCredentials[project.id] && (
                        <div className="mt-2 text-slate-600 dark:text-slate-300 break-all">
                          <p>{project.credentials.number}</p>
                          <p>{project.credentials.password}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-2">
                    {renderProjectLinks(project, false)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5 sm:space-y-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 flex flex-col md:flex-row gap-5 sm:gap-6 transform hover:-translate-y-1 md:hover:scale-[1.01] border-2 border-transparent hover:border-blue-500 dark:hover:border-purple-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              >
                <div className="w-full md:w-56 lg:w-64 h-48 sm:h-56 md:h-auto shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="grow min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-2.5 sm:px-3 py-1 ${getTagColorClasses(project.tagColor)} rounded-full text-xs sm:text-sm`}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    {project.credentials && (
                      <div className="mb-4 p-2.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                        <button
                          onClick={() => toggleCredentials(project.id)}
                          type="button"
                          className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition font-medium"
                        >
                          {visibleCredentials[project.id]
                            ? "🔒 Hide Credentials"
                            : "🔓 Show Credentials"}
                        </button>
                        {visibleCredentials[project.id] && (
                          <div className="mt-2 text-slate-600 dark:text-slate-300 break-all">
                            <p>{project.credentials.number}</p>
                            <p>{project.credentials.password}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {renderProjectLinks(project, true)}
                </div>
              </div>
            ))}
          </div>
        )}

        {projects.length > 3 && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              type="button"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
