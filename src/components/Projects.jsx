import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon,
  SparklesIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { projects } from '../data';
import { ANIMATIONS, SECTION } from '../theme';

// ========================================
// ENHANCED PROJECT CARD
// ========================================
const ProjectCard = ({ project, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Gradient border glow - Enhanced */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

      {/* Card container */}
      <div className="relative h-full p-8 md:p-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Featured badge - Enhanced */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-2 left-8 z-10"
          >
            <div className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5" /> FEATURED
              </span>
            </div>
          </motion.div>
        )}

        {/* Header */}
        <div className="mb-6 mt-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                {project.category}
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
              <CodeBracketSquareIcon className="w-6 h-6 text-purple-300" />
            </div>
          </div>
          
          {/* Problem → Solution */}
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">The Problem</p>
              <p className="text-sm text-gray-300 leading-relaxed">{project.problemStatement}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Our Solution</p>
              <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl mb-6">
            {project.results.map((result, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: delay + 0.1 + idx * 0.05 }} viewport={{ once: true }}>
                <p className="text-xs text-blue-200 font-semibold flex items-start gap-1.5">
                  <CheckIcon className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{result}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">Key Features</p>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, idx) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.2 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg border border-blue-500/20 text-xs font-semibold text-blue-300 hover:border-blue-500/40 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-6 border-t border-white/10">
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group/link flex-1 relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover/link:opacity-100 blur transition-opacity" />
              <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <span>Live Demo</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          )}
          
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group/link flex-1 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-lg opacity-0 group-hover/link:opacity-100 blur transition-opacity" />
            <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white text-sm hover:bg-white/20 hover:border-white/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Code</span>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// ========================================
// MAIN PROJECTS COMPONENT
// ========================================
const Projects = () => {
  return (
    <section
      id="projects"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 ${SECTION.padding}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQgOC4wNi0xOCAxOC0xOHMxOCA4LjA2IDE4IDE4LTguMDYgMTgtMTggMTgtMTgtOC4wNi0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />

      <motion.div
        className="absolute top-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      <div className={SECTION.container}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className={`text-center ${SECTION.headerMargin}`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4"
          >
            💼 FEATURED WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-300">
              Projects That Made an Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real problems → <span className="text-blue-400 font-semibold">Real solutions</span> → <span className="text-purple-400 font-semibold">Real impact</span>. Each project represents a challenge I solved, value I delivered, and lessons I learned.
          </motion.p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={ANIMATIONS.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={ANIMATIONS.itemVariants}>
              <ProjectCard project={project} delay={index * 0.1} />
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center pt-16 border-t border-white/10"
        >
          <p className="text-gray-400 mb-8 text-lg">
            See all my work and explore more projects on GitHub
          </p>
          <motion.a
            href="https://github.com/Micomyiza-Alexis"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              <span>Explore More on GitHub</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
