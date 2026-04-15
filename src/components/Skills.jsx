import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

// ========================================
// SKILL CARD COMPONENT
// ========================================
const SkillCard = ({ name, level, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 100 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ scale: 1.05 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
    <div className="relative p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-bold text-white">{name}</h4>
        <span className="text-xs font-semibold text-blue-300">{level}%</span>
      </div>
      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{description}</p>
      
      {/* Proficiency bar */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
        />
      </div>
    </div>
  </motion.div>
);

// ========================================
// CATEGORY SECTION
// ========================================
const SkillCategory = ({ title, skills, delay = 0, color = "blue" }) => {
  const colorClass = {
    blue: "text-blue-300",
    purple: "text-purple-300",
    pink: "text-pink-300",
    green: "text-green-300",
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <h3 className={`text-xl md:text-2xl font-bold mb-6 ${colorClass} flex items-center gap-2`}>
        <span className={`w-1 h-8 bg-gradient-to-b from-${color}-400 to-${color}-600 rounded-full`} />
        {title}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
            description={skill.description}
            delay={delay + idx * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ========================================
// MAIN SKILLS COMPONENT
// ========================================
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20"
    >
      {/* ========================================
          ANIMATED BACKGROUND
          ======================================== */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQgOC4wNi0xOCAxOC0xOHMxOCA4LjA2IDE4IDE4LTguMDYgMTgtMTggMTgtMTgtOC4wNi0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />

      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ========================================
          MAIN CONTENT
          ======================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
            🛠️ TECH EXPERTISE
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-300">
              My Toolbox
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering <span className="text-blue-400 font-semibold">modern web technologies</span> to build <span className="text-purple-400 font-semibold">fast, scalable solutions</span> that solve real problems.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Frontend */}
          <motion.div variants={itemVariants}>
            <SkillCategory
              title="Frontend Development"
              skills={skillsData.frontend}
              color="blue"
              delay={0}
            />
          </motion.div>

          {/* Backend */}
          <motion.div variants={itemVariants}>
            <SkillCategory
              title="Backend & Languages"
              skills={skillsData.backend}
              color="purple"
              delay={0.2}
            />
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants}>
            <SkillCategory
              title="Tools & Platforms"
              skills={skillsData.tools}
              color="pink"
              delay={0.4}
            />
          </motion.div>

          {/* Database */}
          <motion.div variants={itemVariants}>
            <SkillCategory
              title="Databases"
              skills={skillsData.database}
              color="green"
              delay={0.6}
            />
          </motion.div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring' }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mt-20 pt-16 border-t border-white/10"
        >
          <p className="text-gray-400 mb-6">
            Always learning and adapting to new technologies.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 blur transition-opacity" />
            <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white">
              Let's Discuss Your Project
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
