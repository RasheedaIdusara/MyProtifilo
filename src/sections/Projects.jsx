import {
  FiSmartphone,
  FiLayers,
  FiCpu,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import { projects } from "../data/projects";

const projectIcons = {
  mobile: FiSmartphone,
  layers: FiLayers,
  cpu: FiCpu,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-[#0b141a] py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              02 / Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects that
              <span className="text-teal-400">
                {" "}tell my story.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-gray-400">
              A selection of projects where I explore
              software engineering concepts, solve
              practical problems, and build applications.
            </p>
          </div>

          <span className="self-start rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
            {String(projects.length).padStart(2, "0")} Projects
          </span>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 lg:grid-cols-2">

          {projects.map((project) => {

            const Icon = projectIcons[project.icon];

            return (
              <article
                key={project.id}
                className={`
                  group relative overflow-hidden
                  rounded-3xl border border-white/10
                  bg-[#112329] p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-teal-400/40
                  hover:shadow-xl hover:shadow-teal-900/10
                  sm:p-8
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                  ${project.featured ? "lg:col-span-2 lg:p-10" : ""}
                `}
              >

                {/* Decorative Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
                />

                <div className="relative">

                  {/* Top Row */}
                  <div className="mb-8 flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/15 bg-teal-400/10 text-teal-400">
                      <Icon size={27} aria-hidden="true" />
                    </div>

                    <span className="text-sm font-medium text-gray-500">
                      / {project.number}
                    </span>

                  </div>

                  {/* Category */}
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-7 max-w-2xl leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mb-8 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <FiCheck
                          className="mt-1 shrink-0 text-teal-400"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;
