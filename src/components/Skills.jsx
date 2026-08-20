import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { skillsData } from '../data';

/* ============================================================
   CATEGORY CONFIG — color maps this stack to the rest of the site
============================================================ */

const CATEGORIES = [
  {
    key: 'frontend',
    title: 'Frontend',
    description: 'Interfaces that are responsive, accessible and easy to use.',
    icon: CodeBracketIcon,
    color: '#5b8dff',
  },
  {
    key: 'backend',
    title: 'Backend',
    description: 'APIs and server-side systems built for real applications.',
    icon: ServerIcon,
    color: '#a78bfa',
  },
  {
    key: 'database',
    title: 'Databases',
    description: 'Structured data, queries and application persistence.',
    icon: CircleStackIcon,
    color: '#2dd4bf',
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    description: 'The tools I use to build, test and ship projects.',
    icon: WrenchScrewdriverIcon,
    color: '#f0b429',
  },
];

/* ============================================================
   LEVEL → TIER
============================================================ */

const levelTier = (level) => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Strong';
  if (level >= 40) return 'Intermediate';
  return 'Familiar';
};

const LevelIndicator = ({ level, color }) => {
  const filled = Math.max(1, Math.round(level / 20));
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="h-1 w-3.5 rounded-full transition-colors duration-300"
          style={{ backgroundColor: i < filled ? color : 'rgba(255,255,255,0.08)' }}
        />
      ))}
    </div>
  );
};

/* ============================================================
   SKILL CARD
============================================================ */

const SkillCard = ({ skill, color, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border p-5 transition-transform duration-300"
      style={{
        borderColor: hovered ? `${color}55` : 'rgba(255,255,255,0.09)',
        backgroundColor: hovered ? `${color}0d` : 'rgba(255,255,255,0.02)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0px)',
      }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
        <span
          className="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium"
          style={{ borderColor: `${color}40`, color }}
        >
          {levelTier(skill.level)}
        </span>
      </div>

      <p className="relative mt-2 text-xs leading-5 text-gray-500">
        {skill.description}
      </p>

      <div className="relative mt-4">
        <LevelIndicator level={skill.level} color={color} />
      </div>
    </motion.div>
  );
};

/* ============================================================
   CORE STACK STRIP
============================================================ */

const CoreStack = ({ core }) => (
  <div className="flex flex-wrap gap-2.5">
    {core.map(({ skill, color }) => (
      <span
        key={skill.name}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-gray-300"
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
        {skill.name}
      </span>
    ))}
  </div>
);

/* ============================================================
   FLOW RAIL — quiet architecture cue, not a diagram
============================================================ */

const FlowRail = () => (
  <div
    className="absolute -left-1 top-0 hidden h-full w-px flex-col lg:flex"
    aria-hidden="true"
  >
    <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
  </div>
);

/* ============================================================
   SKILLS
============================================================ */

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState(CATEGORIES[0].key);

  const activeCategory = CATEGORIES.find((c) => c.key === activeKey);
  const activeSkills = skillsData[activeKey] || [];

  const coreStack = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const skills = skillsData[cat.key] || [];
      if (skills.length === 0) return null;
      const top = [...skills].sort((a, b) => b.level - a.level)[0];
      return { skill: top, color: cat.color };
    }).filter(Boolean);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080b12] py-28 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full opacity-[0.05] blur-[130px] transition-colors duration-700"
        style={{ backgroundColor: activeCategory.color }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Technical stack
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            The stack behind
            <span className="text-gray-500"> my builds.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            I work across the interface, the API and server layer, the
            database, and the tools that ship it — not just the part
            visible in the browser.
          </p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600">
              Core stack
            </p>
            <CoreStack core={coreStack} />
          </div>
        </motion.div>

        <div className="relative lg:pl-8">
          <FlowRail />

          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="mb-8 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.key === activeKey;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(cat.key)}
                  className="relative flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                  style={{
                    borderColor: isActive ? `${cat.color}55` : 'rgba(255,255,255,0.1)',
                    color: isActive ? '#fff' : '#9ca3af',
                    backgroundColor: isActive ? `${cat.color}14` : 'transparent',
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: isActive ? cat.color : '#6b7280' }} />
                  {cat.title}
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: isActive ? cat.color : '#4b5563' }}
                  >
                    {(skillsData[cat.key] || []).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active category description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeKey + '-desc'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-6 max-w-lg text-sm text-gray-500"
            >
              {activeCategory.description}
            </motion.p>
          </AnimatePresence>

          {/* Skill grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeSkills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={activeCategory.color}
                  index={prefersReducedMotion ? 0 : i}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-500">
            Currently expanding my backend and API development skills.
          </p>

          <a
            href="#projects"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            See what I&apos;ve built →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;