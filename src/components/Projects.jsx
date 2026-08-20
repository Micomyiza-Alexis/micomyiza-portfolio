import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  ChevronDownIcon,
  CheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { projects } from '../data';

/* ============================================================
   COLOR SYSTEM — same layer palette used across Hero/About/Skills
============================================================ */

const PALETTE = ['#5b8dff', '#22d3ee', '#a78bfa', '#2dd4bf', '#f0b429'];

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return null;
  }
};

const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

/* ============================================================
   SHARED BITS
============================================================ */

const TechBadge = ({ tech }) => (
  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-400">
    {tech}
  </span>
);

const ProjectLinks = ({ demo, github, color }) => {
  if (!demo && !github) return null;

  return (
    <div className="flex gap-2">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300"
          style={{ backgroundColor: color }}
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
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-gray-300 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        >
          <CodeBracketIcon className="h-4 w-4" />
          Code
        </a>
      )}
    </div>
  );
};

/* Browser-chrome style visual — uses a real image if present, otherwise
   a generated placeholder derived only from real project data. */
const ProjectVisual = ({ project, color, chrome = false, className = '' }) => {
  const hostname = project.demo ? getHostname(project.demo) : null;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0f16] ${className}`}
    >
      {chrome && (
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          {hostname && (
            <span className="ml-2 truncate font-mono text-[10px] text-gray-600">
              {hostname}
            </span>
          )}
        </div>
      )}

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
              }}
              aria-hidden="true"
            />
            <span
              className="relative font-mono text-4xl font-bold tracking-tight"
              style={{ color: `${color}66` }}
            >
              {getInitials(project.name)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================================
   FILTER BAR — categories derived from real project data
============================================================ */

const FilterBar = ({ filters, activeFilter, onChange, counts }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible"
    role="tablist"
    aria-label="Project categories"
  >
    {filters.map(({ key, label, color }) => {
      const active = activeFilter === key;
      return (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={active}
          onClick={() => onChange(key)}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          style={{
            borderColor: active ? `${color}55` : 'rgba(255,255,255,0.1)',
            backgroundColor: active ? `${color}18` : 'rgba(255,255,255,0.02)',
            color: active ? '#fff' : '#9ca3af',
          }}
        >
          {label}
          <span
            className="rounded-md px-1.5 py-0.5 font-mono text-[9px]"
            style={{
              backgroundColor: active ? `${color}30` : 'rgba(255,255,255,0.05)',
              color: active ? color : '#6b7280',
            }}
          >
            {counts[key] || 0}
          </span>
        </button>
      );
    })}
  </motion.div>
);

/* ============================================================
   FULL-STACK MOTIF — quiet layer accent for the featured project
============================================================ */

const StackMotif = () => (
  <div className="flex items-center gap-1.5" aria-hidden="true">
    {PALETTE.map((c) => (
      <span
        key={c}
        className="h-1 w-6 rounded-full"
        style={{ backgroundColor: `${c}55` }}
      />
    ))}
  </div>
);

/* ============================================================
   FEATURED PROJECT — case-study preview
============================================================ */

const FeaturedProject = ({ project, color }) => {
  const meta = [
    project.role && { label: 'Role', value: project.role },
    project.tech?.length && { label: 'Stack', value: project.tech.slice(0, 4).join(' · ') },
    project.category && { label: 'Type', value: project.category },
    project.status && { label: 'Status', value: project.status },
  ].filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="group relative mb-10 overflow-hidden rounded-2xl border bg-[#0d111a]"
      style={{ borderColor: `${color}35` }}
    >
      <ProjectVisual project={project} color={color} chrome />

      <div className="p-7 md:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
            style={{ borderColor: `${color}40`, color, backgroundColor: `${color}12` }}
          >
            <SparklesIcon className="h-3.5 w-3.5" />
            Featured
          </span>
          <StackMotif />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {project.name}
            </h3>

            {project.description && (
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
                {project.description}
              </p>
            )}

            <div className="mt-8 space-y-6">
              {project.problemStatement && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                    Problem
                  </p>
                  <p className="text-sm leading-7 text-gray-400">{project.problemStatement}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest" style={{ color }}>
                    Solution
                  </p>
                  <p className="text-sm leading-7 text-gray-400">{project.solution}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            {meta.length > 0 && (
              <dl className="grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
                      {m.label}
                    </dt>
                    <dd className="mt-1 text-xs font-medium leading-5 text-gray-300">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {project.results?.length > 0 && (
              <div className="mt-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                  Key results
                </p>
                <div className="space-y-2.5">
                  {project.results.map((r, i) => (
                    <div key={i} className="flex gap-2.5 text-xs leading-5 text-gray-400">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.tech?.length > 0 && (
              <div className="mt-auto pt-8">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                  Full stack
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
          <ProjectLinks demo={project.demo} github={project.github} color={color} />
        </div>
      </div>
    </motion.article>
  );
};

/* ============================================================
   PROJECT CARD
============================================================ */

const ProjectCard = ({ project, color, wide, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.04 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d111a] transition-colors duration-300 hover:-translate-y-1 ${
        wide ? 'lg:col-span-2' : ''
      }`}
      style={{ borderColor: undefined }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}45`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
    >
      <ProjectVisual project={project} color={color} className={wide ? '' : ''} />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          {project.category && (
            <span
              className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ borderColor: `${color}40`, color, backgroundColor: `${color}12` }}
            >
              {project.category}
            </span>
          )}
          <ArrowRightIcon
            className="h-4 w-4 shrink-0 text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            style={{ color }}
          />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white">{project.name}</h3>

        {project.role && (
          <p className="mt-1 text-xs font-medium" style={{ color }}>
            {project.role}
          </p>
        )}

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">
          {project.description || project.solution}
        </p>

        {(project.problemStatement || project.contribution?.length || project.results?.length) && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 transition hover:text-white focus-visible:outline-none"
            >
              {expanded ? 'Hide details' : 'View details'}
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-4 border-t border-white/10 pt-4">
                    {project.problemStatement && (
                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-gray-600">
                          Problem
                        </p>
                        <p className="text-xs leading-6 text-gray-500">{project.problemStatement}</p>
                      </div>
                    )}
                    {project.contribution?.length > 0 && (
                      <div>
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-gray-600">
                          Contribution
                        </p>
                        <div className="space-y-1.5">
                          {project.contribution.map((item, i) => (
                            <div key={i} className="flex gap-2 text-xs text-gray-500">
                              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color }} />
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
                          {project.results.map((r, i) => (
                            <div key={i} className="flex gap-2 text-xs text-gray-500">
                              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                              {r}
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
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, wide ? 8 : 5).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}

        <div className="mt-auto pt-6">
          <ProjectLinks demo={project.demo} github={project.github} color={color} />
        </div>
      </div>
    </motion.article>
  );
};

/* ============================================================
   PROJECTS
============================================================ */

const OTHER_KEY = 'other';

const Projects = () => {
  const projectData = useMemo(() => projects || [], []);
  const prefersReducedMotion = useReducedMotion();

  const filters = useMemo(() => {
    const seen = [];
    projectData.forEach((p) => {
      const label = p.category || null;
      if (label && !seen.includes(label)) seen.push(label);
    });

    const hasUncategorized = projectData.some((p) => !p.category);

    const built = seen.map((label, i) => ({
      key: label,
      label,
      color: PALETTE[i % PALETTE.length],
    }));

    if (hasUncategorized) {
      built.push({ key: OTHER_KEY, label: 'Other', color: '#6b7280' });
    }

    return [{ key: 'all', label: 'All', color: '#5b8dff' }, ...built];
  }, [projectData]);

  const colorByCategory = useMemo(() => {
    const map = {};
    filters.forEach((f) => {
      map[f.key] = f.color;
    });
    return map;
  }, [filters]);

  const [activeFilter, setActiveFilter] = useState('all');

  const counts = useMemo(() => {
    const result = { all: projectData.length };
    filters.forEach((f) => {
      if (f.key === 'all') return;
      result[f.key] = projectData.filter((p) =>
        f.key === OTHER_KEY ? !p.category : p.category === f.key
      ).length;
    });
    return result;
  }, [projectData, filters]);

  const featured = projectData.find((p) => p.featured) || projectData[0];

  const matchesFilter = (project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === OTHER_KEY) return !project.category;
    return project.category === activeFilter;
  };

  const filteredFeatured = featured && matchesFilter(featured) ? featured : null;

  const remainingProjects = projectData.filter(
    (p) => matchesFilter(p) && p.id !== filteredFeatured?.id
  );

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080b12] py-28 text-white">
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
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
              Selected work
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Things I&apos;ve
              <span className="text-blue-500"> built.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-gray-500 lg:justify-self-end">
              Real applications, backend systems, and digital products built
              to solve practical problems.
            </p>
          </div>

          <p className="mt-5 font-mono text-xs text-gray-600">
            Idea → architecture → development → deployment.
          </p>
        </motion.div>

        {/* Filters */}
        {filters.length > 2 && (
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
            counts={counts}
          />
        )}

        {/* Featured */}
        {filteredFeatured && (
          <FeaturedProject
            project={filteredFeatured}
            color={colorByCategory[filteredFeatured.category] || PALETTE[0]}
          />
        )}

        {/* Grid */}
        {remainingProjects.length > 0 ? (
          <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode={prefersReducedMotion ? 'wait' : 'popLayout'}>
              {remainingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  color={colorByCategory[project.category] || PALETTE[index % PALETTE.length]}
                  wide={index % 3 === 0}
                  index={prefersReducedMotion ? 0 : index}
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
            <h3 className="mt-4 text-lg font-bold text-white">No projects in this category yet.</h3>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/[0.07]"
            >
              View all projects
            </button>
          </motion.div>
        ) : null}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#0d111a] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Get in touch
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Have an idea worth building?
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#080b12] transition hover:bg-blue-400"
            >
              Let&apos;s work together
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;