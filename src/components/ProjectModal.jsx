import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiGithub,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiLayers,
  FiImage,
} from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index when switching projects
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Close on ESC key & lock background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const hasImages = project?.images && project.images.length > 0;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050b0e]/80 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-teal-400/20 bg-[#102026] p-6 text-white shadow-2xl sm:p-9"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-white"
            >
              <FiX size={20} />
            </button>

            {/* Header Info */}
            <div className="pr-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                {project.category}
              </span>
              <h3
                id="modal-project-title"
                className="mt-2 text-2xl font-bold sm:text-3xl"
              >
                {project.title}
              </h3>
            </div>

            {/* CONDITIONAL VIEW: Full Details vs Coming Soon */}
            {project.hasDetails ? (
              <div className="mt-7 space-y-8">
                {/* 1. Image Gallery Section */}
                {hasImages ? (
                  <div className="space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b141a]">
                      <img
                        src={project.images[activeImageIndex]}
                        alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                        className="max-h-80 w-full object-cover"
                      />
                    </div>

                    {/* Thumbnails (if more than 1 image) */}
                    {project.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {project.images.map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setActiveImageIndex(idx)}
                            className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                              activeImageIndex === idx
                                ? "border-teal-400 opacity-100"
                                : "border-transparent opacity-50 hover:opacity-80"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-sm text-gray-400">
                    <FiImage className="shrink-0 text-teal-400" size={20} />
                    <span>Project preview screenshots will be uploaded soon.</span>
                  </div>
                )}

                {/* 2. Project Overview */}
                <div>
                  <h4 className="mb-2.5 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Project Overview
                  </h4>
                  <p className="text-sm leading-7 text-gray-400 sm:text-base">
                    {project.overview || project.description}
                  </p>
                </div>

                {/* 3. Key Features */}
                {project.highlights && (
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Key Features
                    </h4>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-sm text-gray-300"
                        >
                          <FiCheck className="mt-0.5 shrink-0 text-teal-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 4. Future Updates / Roadmap */}
                {project.futureUpdates && project.futureUpdates.length > 0 && (
                  <div className="rounded-2xl border border-teal-400/20 bg-teal-500/[0.06] p-5">
                    <div className="mb-3 flex items-center gap-2 text-teal-300">
                      <FiClock size={18} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">
                        Future Updates & Roadmap
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {project.futureUpdates.map((update) => (
                        <li
                          key={update}
                          className="flex items-start gap-2.5 text-sm text-gray-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                          <span>{update}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* COMING SOON VIEW */
              <div className="my-8 flex flex-col items-center rounded-2xl border border-dashed border-teal-400/25 bg-[#0b141a]/60 px-6 py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-400">
                  <FiLayers size={26} />
                </div>
                <span className="mb-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3.5 py-1 text-xs font-medium text-teal-300">
                  Case Study Coming Soon
                </span>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  Detailed documentation & screenshots are on the way
                </h4>
                <p className="mt-2.5 max-w-md text-sm leading-6 text-gray-400">
                  {project.description}
                </p>
              </div>
            )}

            {/* Footer: Tech Stack & Links */}
            <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-gray-200 transition-colors hover:border-teal-400/50 hover:text-teal-400"
                  >
                    <FiGithub size={15} />
                    Source Code
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-teal-400"
                  >
                    Live Demo
                    <FiArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;