import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSmartphone,
  FiLayers,
  FiCpu,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
} from "react-icons/fi";
import { projects } from "../data/projects";
import { Reveal, SpotlightCard } from "../components/MotionPrimitives";

const projectIcons = {
  mobile: FiSmartphone,
  layers: FiLayers,
  cpu: FiCpu,
};

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.tag))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tag === selectedTag);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-[#0b141a] py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                02 / Selected Work
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects that
                <span className="text-teal-400"> tell my story.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-gray-400">
                A selection of projects where I explore software engineering
                concepts, solve practical problems, and build applications.
              </p>
            </div>

            <span className="self-start rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
              {String(filteredProjects.length).padStart(2, "0")} Projects
            </span>
          </div>
        </Reveal>

        {/* Category Filter Tabs with Sliding Pill */}
        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedTag === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedTag(cat)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-teal-400/40 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-teal-500 shadow-lg shadow-teal-500/25"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid with Layout Transitions */}
        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = projectIcons[project.icon] || FiLayers;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    project.featured && selectedTag === "All"
                      ? "lg:col-span-2"
                      : ""
                  }
                >
                  <SpotlightCard
                    className={`group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#112329] p-6 transition-colors duration-300 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-900/15 sm:p-8 ${
                      project.featured && selectedTag === "All" ? "lg:p-10" : ""
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
                    />

                    <div className="relative">
                      <div className="mb-8 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/15 bg-teal-400/10 text-teal-400 transition-transform duration-300 group-hover:scale-110">
                          <Icon size={27} aria-hidden="true" />
                        </div>

                        <span className="text-sm font-medium text-gray-500">
                          / {project.number}
                        </span>
                      </div>

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                        {project.category}
                      </p>

                      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mb-7 max-w-2xl leading-7 text-gray-400">
                        {project.description}
                      </p>

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
                    </div>

                    {/* Bottom Bar */}
                    <div className="relative flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-200 transition-colors hover:border-teal-400/50 hover:text-teal-400"
                          >
                            <FiGithub size={15} />
                            Source Code
                          </motion.a>
                        )}

                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/15 px-4 py-2 text-xs font-medium text-teal-300 transition-colors hover:bg-teal-500 hover:text-white"
                          >
                            Live Demo
                            <FiArrowUpRight size={15} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;