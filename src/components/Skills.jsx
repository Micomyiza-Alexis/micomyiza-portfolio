import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { skillsData } from '../data';

const categories = [
  {
    key: 'frontend',
    title: 'Frontend',
    description: 'Interfaces that are responsive, accessible and easy to use.',
    icon: CodeBracketIcon,
  },
  {
    key: 'backend',
    title: 'Backend',
    description: 'APIs and server-side systems built for real applications.',
    icon: ServerIcon,
  },
  {
    key: 'database',
    title: 'Databases',
    description: 'Structured data, queries and application persistence.',
    icon: CircleStackIcon,
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    description: 'The tools I use to build, test and ship projects.',
    icon: WrenchScrewdriverIcon,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080b12] py-28 text-white"
    >
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            My technical
            <span className="text-gray-500"> toolbox.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A growing set of technologies I use to design, develop and
            deploy practical digital products.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const skills = skillsData[category.key] || [];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-blue-500/20 hover:bg-white/[0.04]"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                    {skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>

                        <span className="text-xs text-gray-600">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-blue-500"
                        />
                      </div>

                      <p className="mt-2 text-xs text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-500">
            Currently expanding my backend and API development skills.
          </p>

          <a
            href="#projects"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            See what I've built →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;