import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ServerIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

const techStacks = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'Python', 'PHP', 'REST APIs'],
  database: ['PostgreSQL', 'Supabase', 'SQL', 'Prisma'],
  tools: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel'],
};

const approach = [
  {
    number: '01',
    title: 'Understand',
    description:
      'I start by understanding the problem, the users, and what the product actually needs to accomplish.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'I turn ideas into clean interfaces, reliable APIs, and maintainable systems using modern technologies.',
  },
  {
    number: '03',
    title: 'Improve',
    description:
      'I test, debug, optimize, and refine the product until the experience feels right.',
  },
];

const SkillGroup = ({ icon: Icon, title, description, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
  >
    <div className="mb-5 flex items-start justify-between">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
        <Icon className="h-5 w-5 text-blue-400" />
      </div>

      <span className="font-mono text-xs text-gray-600">
        {skills.length.toString().padStart(2, '0')} skills
      </span>
    </div>

    <h3 className="text-lg font-bold text-white">{title}</h3>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      {description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-blue-500/30 hover:text-blue-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080b12] py-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[15%] h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-violet-600/5 blur-[130px]" />

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
          className="mb-20 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              About me
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I build digital products
            <span className="text-blue-500"> that solve problems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a full-stack developer focused on building practical,
            scalable web applications. I enjoy working across the stack —
            from interfaces users interact with to the APIs and databases
            powering them.
          </p>
        </motion.div>

        {/* Main story */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-blue-500/10" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d111a] p-2">
              <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-[#080b12]/85 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Available for freelance work
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      Building useful things on the web
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-28 w-28 rounded-2xl border border-blue-500/20 bg-blue-500/5" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
              The developer behind the code
            </p>

            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Curious by nature.
              <br />
              <span className="text-gray-500">Builder by choice.</span>
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-400">
              <p>
                My journey into technology started with curiosity — wanting
                to understand how websites and applications actually work.
                That curiosity turned into a passion for building things.
              </p>

              <p>
                Today, I work across frontend and backend development,
                creating applications that combine thoughtful interfaces
                with reliable systems behind the scenes.
              </p>

              <p>
                I particularly enjoy backend development, APIs, databases,
                and solving the problems that aren't always visible on the
                screen.
              </p>
            </div>

            {/* Focus */}
            <div className="mt-8 space-y-3">
              {[
                'Clean and maintainable code',
                'Responsive and accessible interfaces',
                'Reliable backend systems and APIs',
                'Continuous learning and improvement',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore my work

                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        </div>

        {/* Approach */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
              How I work
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              From idea to product.
            </h3>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {approach.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0d111a] p-7 transition hover:bg-[#10151f]"
              >
                <span className="font-mono text-sm text-blue-500">
                  {item.number}
                </span>

                <h4 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Toolkit */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
              My toolkit
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Technologies I use.
            </h3>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            <SkillGroup
              icon={CodeBracketIcon}
              title="Frontend"
              description="Building responsive interfaces and polished user experiences."
              skills={techStacks.frontend}
            />

            <SkillGroup
              icon={ServerIcon}
              title="Backend"
              description="Building APIs and server-side systems that power applications."
              skills={techStacks.backend}
            />

            <SkillGroup
              icon={WrenchScrewdriverIcon}
              title="Database"
              description="Designing data models and working with reliable persistence layers."
              skills={techStacks.database}
            />

            <SkillGroup
              icon={PaintBrushIcon}
              title="Tools"
              description="The tools I use to design, develop, test, and ship products."
              skills={techStacks.tools}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;