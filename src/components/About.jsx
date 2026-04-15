import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  BoltIcon,
  PaintBrushIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

// ========================================
// HIGHLIGHT CARD COMPONENT
// ========================================
const HighlightCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, type: 'spring', stiffness: 100 }}
    viewport={{ once: true, margin: '-100px' }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
    <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-blue-300" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// ========================================
// FLOATING BADGE COMPONENT
// ========================================
const FloatingBadge = ({ text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    className="absolute group"
  >
    <div className="relative px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/30 hover:border-white/50 transition-all">
      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
        <CheckCircleIcon className="w-3.5 h-3.5 text-green-400" />
        {text}
      </span>
    </div>
  </motion.div>
);

// ========================================
// TECH SKILL PILL
// ========================================
const TechPill = ({ name, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring' }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1 }}
    className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-gray-200 hover:bg-white/15 hover:border-white/30 transition-all"
  >
    {name}
  </motion.span>
);

// ========================================
// MAIN ABOUT COMPONENT
// ========================================
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Highlight cards data
  const highlights = [
    {
      icon: BoltIcon,
      title: 'Performance Obsessed',
      description: 'I optimize every pixel and millisecond. Fast, responsive applications that scale seamlessly.',
    },
    {
      icon: PaintBrushIcon,
      title: 'UI/UX Thinking',
      description: 'Beautiful design is useless without intuitive interaction. I balance aesthetics with functionality.',
    },
    {
      icon: CogIcon,
      title: 'Problem Solver',
      description: 'I break down complex challenges into elegant solutions. Debugging is my superpower.',
    },
    {
      icon: SparklesIcon,
      title: 'Continuous Growth',
      description: 'Always learning new technologies and best practices. Staying ahead of the curve is non-negotiable.',
    },
  ];

  // Tech stack
  const techStacks = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'PHP', 'Python', 'Supabase', 'SQL'],
    tools: ['Git/GitHub', 'Figma', 'VS Code', 'Docker', 'Vercel'],
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20"
    >
      {/* ========================================
          ANIMATED BACKGROUND ELEMENTS
          ======================================== */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQgOC4wNi0xOCAxOC0xOHMxOCA4LjA2IDE4IDE4LTguMDYgMTgtMTggMTgtMTgtOC4wNi0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ========================================
          MAIN CONTENT
          ======================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ========================================
            SECTION HEADER
            ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4">
              WHO I AM
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-300">
              Building for Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a <span className="text-blue-400 font-semibold">full-stack developer & UI/UX enthusiast</span> obsessed with building experiences that are not just beautiful, but <span className="text-purple-400 font-semibold">genuinely useful</span>. Every project starts with understanding the problem, then crafting an elegant solution that users love.
          </motion.p>
        </motion.div>

        {/* ========================================
            TWO-COLUMN LAYOUT
            ======================================== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-32">
          
          {/* LEFT COLUMN - PROFILE VISUAL */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Gradient border frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-xl" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-2">
                <img
                  src={personalInfo.profilePicture}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent rounded-2xl pointer-events-none" />
              </div>

              {/* Floating skill badges */}
              <FloatingBadge text="Frontend Specialist" delay={0.6} />
              <FloatingBadge text="UI/UX Focused" delay={0.8} />
              <FloatingBadge text="Performance Expert" delay={1.0} />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - ABOUT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">The Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                What started as curiosity became passion, and passion became expertise. I didn't just learn to code—I learned to solve problems, think like a user, and create experiences that matter.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I specialize in building <span className="text-blue-400 font-semibold">scalable</span>, <span className="text-purple-400 font-semibold">performant</span> web applications that users love and businesses rely on. I bridge the gap between design and engineering, ensuring every pixel serves a purpose.
              </p>
            </motion.div>

            {/* Expertise focus */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-2xl font-bold text-white">What I Focus On</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Building <span className="text-blue-400 font-semibold">performant</span> frontends that scale</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Creating <span className="text-purple-400 font-semibold">intuitive</span> user experiences</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Writing <span className="text-pink-400 font-semibold">clean, maintainable</span> code</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mentoring and <span className="text-blue-400 font-semibold">collaborating</span> with teams</span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white">
                  <span>See My Work</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                  <span>Let's Collaborate</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================
            KEY HIGHLIGHTS GRID
            ======================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 lg:mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Approach
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I don't just build features—I build solutions. Here's what sets me apart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                {...highlight}
                delay={0.5 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* ========================================
            TECH STACK SECTION
            ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-3xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
          
          <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              My Toolkit
            </h3>

            <div className="space-y-8">
              {/* Frontend */}
              <div>
                <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStacks.frontend.map((tech, idx) => (
                    <TechPill key={tech} name={tech} delay={0.1 + idx * 0.05} />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-widest mb-4">
                  Backend & Database
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStacks.backend.map((tech, idx) => (
                    <TechPill key={tech} name={tech} delay={0.1 + idx * 0.05} />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm font-semibold text-pink-300 uppercase tracking-widest mb-4">
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStacks.tools.map((tech, idx) => (
                    <TechPill key={tech} name={tech} delay={0.1 + idx * 0.05} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;