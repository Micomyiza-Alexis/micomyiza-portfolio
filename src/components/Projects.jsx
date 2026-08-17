import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ChevronDownIcon,
  FunnelIcon,
  CheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { projects } from '../data';

const PROJECT_TYPE_LABELS = {
  personal: 'Personal',
  contribution: 'Contribution',
  professional: 'Professional',
  team: 'Team',
  academic: 'Academic',
};

const PROJECT_TYPE_STYLES = {
  personal: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  contribution: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
  professional: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  team: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  academic: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
};

const getProjectType = (project) => project.type || 'personal';

const ProjectTypeBadge = ({ type }) => (
  <span
    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
      PROJECT_TYPE_STYLES[type] || PROJECT_TYPE_STYLES.personal
    }`}
  >
    {PROJECT_TYPE_LABELS[type] || 'Personal'}
  </span>
);

const TechBadge = ({ tech }) => (
  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-400">
    {tech}
  </span>
);

const ProjectLinks = ({ demo, github }) => {
  if (!demo && !github) return null;

  return (
    <div className="flex gap-2">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500"
        >
          Live Demo
          <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-gray-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        >
          <CodeBracketIcon className="h-4 w-4" />
          Code
        </a>
      )}
    </div>
  );
};

const FilterBar = ({ activeFilter, onChange, counts }) => {
  const filters = [
    ['all', 'All'],
    ['personal', 'Personal'],
    ['professional', 'Professional'],
    ['contribution', 'Contributions'],
    ['team', 'Team'],
    ['academic', 'Academic'],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="mb-4 flex items-center justify-center gap-2 text-gray-600">
        <FunnelIcon className="h-4 w-4" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Filter projects
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {filters.map(([value, label]) => {
          const active = activeFilter === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold transition ${
                active
                  ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                  : 'border-white/10 bg-white/[0.02] text-gray-500 hover:border-white/20 hover:text-gray-300'
              }`}
            >
              {label}

              <span
                className={`rounded-md px-1.5 py-0.5 text-[9px] ${
                  active
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'bg-white/5 text-gray-600'
                }`}
              >
                {counts[value]}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ project }) => {
  const type = getProjectType(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative mb-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0d111a]"
    >
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="p-7 md:p-10">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
            <SparklesIcon className="h-3.5 w-3.5" />
            Featured
          </span>

          <ProjectTypeBadge type={type} />

          {project.category && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
              {project.category}
            </span>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {project.name}
            </h3>

            {project.role && (
              <p className="mt-2 text-sm font-medium text-blue-400">
                {project.role}
              </p>
            )}

            {project.description && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400">
                {project.description}
              </p>
            )}

            <div className="mt-8 space-y-6">
              {project.problemStatement && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                    Problem
                  </p>

                  <p className="text-sm leading-7 text-gray-400">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-blue-500">
                    Solution
                  </p>

                  <p className="text-sm leading-7 text-gray-400">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            {project.results?.length > 0 && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                  Key results
                </p>

                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex gap-2.5 text-xs leading-5 text-gray-400"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.contribution?.length > 0 && (
              <div className="mt-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                  My contribution
                </p>

                <div className="space-y-2">
                  {project.contribution.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 text-xs leading-5 text-gray-500"
                    >
                      <span className="text-blue-500">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.tech?.length > 0 && (
              <div className="mt-auto pt-8">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                  Stack
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <ProjectLinks
            demo={project.demo}
            github={project.github}
          />
        </div>
      </div>
    </motion.article>
  );
};

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const type = getProjectType(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0d111a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <ProjectTypeBadge type={type} />

          {project.category && (
            <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-gray-600">
              {project.category}
            </p>
          )}
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
          <CodeBracketIcon className="h-4 w-4 text-gray-500 transition group-hover:text-blue-400" />
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white">
        {project.name}
      </h3>

      {project.role && (
        <p className="mt-1 text-xs font-medium text-blue-400">
          {project.role}
        </p>
      )}

      <p className="mt-4 line-clamp-4 text-sm leading-7 text-gray-500">
        {project.description || project.solution}
      </p>

      {(project.problemStatement ||
        project.contribution?.length ||
        project.results?.length) && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 transition hover:text-blue-400"
          >
            {expanded ? 'Hide details' : 'View details'}

            <ChevronDownIcon
              className={`h-3.5 w-3.5 transition-transform ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-5 border-t border-white/10 pt-5">
                  {project.problemStatement && (
                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-gray-600">
                        Problem
                      </p>

                      <p className="text-xs leading-6 text-gray-500">
                        {project.problemStatement}
                      </p>
                    </div>
                  )}

                  {project.contribution?.length > 0 && (
                    <div>
                      <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-gray-600">
                        Contribution
                      </p>

                      <div className="space-y-1.5">
                        {project.contribution.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-2 text-xs text-gray-500"
                          >
                            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.results?.length > 0 && (
                    <div>
                      <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-gray-600">
                        Results
                      </p>

                      <div className="space-y-1.5">
                        {project.results.map((result, index) => (
                          <div
                            key={index}
                            className="flex gap-2 text-xs text-gray-500"
                          >
                            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {project.tech?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      )}

      <div className="mt-auto pt-6">
        <ProjectLinks
          demo={project.demo}
          github={project.github}
        />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectData = projects || [];

  const featured =
    projectData.find((project) => project.featured) ||
    projectData[0];

  const counts = useMemo(() => {
    const result = {
      all: projectData.length,
      personal: 0,
      contribution: 0,
      professional: 0,
      team: 0,
      academic: 0,
    };

    projectData.forEach((project) => {
      const type = getProjectType(project);

      if (result[type] !== undefined) {
        result[type] += 1;
      }
    });

    return result;
  }, [projectData]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectData;

    return projectData.filter(
      (project) => getProjectType(project) === activeFilter
    );
  }, [activeFilter, projectData]);

  const filteredFeatured =
    activeFilter === 'all' ||
    (featured && getProjectType(featured) === activeFilter)
      ? featured
      : null;

  const remainingProjects = filteredProjects.filter(
    (project) => project.id !== filteredFeatured?.id
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b12] py-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-[20%] h-80 w-80 rounded-full bg-blue-600/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
              Selected work
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Things I've
              <span className="text-blue-500"> built.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-gray-500 lg:justify-self-end">
              A selection of products, experiments, contributions, and
              professional work. Each project represents a problem I
              wanted to solve or a product I wanted to bring to life.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <FilterBar
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          counts={counts}
        />

        {/* Featured */}
        {filteredFeatured && (
          <FeaturedProject project={filteredFeatured} />
        )}

        {/* Grid */}
        {remainingProjects.length > 0 ? (
          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {remainingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : !filteredFeatured ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center"
          >
            <CodeBracketIcon className="mx-auto h-8 w-8 text-gray-600" />

            <h3 className="mt-4 text-lg font-bold text-white">
              Nothing here yet.
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Try another project category.
            </p>

            <button
              onClick={() => setActiveFilter('all')}
              className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/[0.07]"
            >
              View all projects
            </button>
          </motion.div>
        ) : null}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#0d111a] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                More on GitHub
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                There's more where that came from.
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Explore my repositories, experiments, and open-source work.
              </p>
            </div>

            <a
              href="https://github.com/Micomyiza-Alexis"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#080b12] transition hover:bg-blue-400"
            >
              GitHub Profile

              <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;