import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ArrowRightIcon, 
  DocumentArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

// ========================================
// ANIMATED TYPING EFFECT COMPONENT
// ========================================
const TypingEffect = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// ========================================
// FLOATING BLOB BACKGROUND
// ========================================
const FloatingBlob = ({ delay = 0, duration = 20, className = '' }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${className}`}
    animate={{
      x: [0, 100, 0],
      y: [0, -100, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ========================================
// TECH STACK BADGE
// ========================================
const TechBadge = ({ icon: Icon, name, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
    <div className="relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all">
      <Icon className="w-5 h-5 text-blue-300" />
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  </motion.div>
);

// ========================================
// STAT CARD COMPONENT
// ========================================
const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: 'spring' }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
    <div className="relative px-6 py-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  </motion.div>
);

// ========================================
// MAIN HERO COMPONENT
// ========================================
const Hero = () => {
  const controls = useAnimation();

  // Start animations on mount
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Professional roles for typing effect
  const roles = [
    'Frontend Architect',
    'Full-Stack Engineer',
    'UI/UX Developer',
    'React Specialist',
    'Tech Lead',
  ];

  // Tech stack
  const techStack = [
    { icon: CodeBracketIcon, name: 'React' },
    { icon: CommandLineIcon, name: 'Next.js' },
    { icon: CpuChipIcon, name: 'TypeScript' },
    { icon: SparklesIcon, name: 'Tailwind' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      {/* ========================================
          ANIMATED BACKGROUND ELEMENTS
          ======================================== */}
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQgOC4wNi0xOCAxOC0xOHMxOCA4LjA2IDE4IDE4LTguMDYgMTgtMTggMTgtMTgtOC4wNi0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />

      {/* Floating Blobs */}
      <FloatingBlob className="top-1/4 left-1/4 w-96 h-96 bg-purple-500" duration={20} />
      <FloatingBlob className="bottom-1/4 right-1/4 w-96 h-96 bg-blue-500" duration={25} delay={5} />
      <FloatingBlob className="top-1/2 right-1/3 w-64 h-64 bg-pink-500" duration={30} delay={10} />

      {/* ========================================
          MAIN CONTENT
          ======================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ========================================
              LEFT COLUMN - CONTENT
              ======================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-75 blur group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="relative flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <span className="text-sm font-semibold text-green-300">Available for Hire</span>
                </div>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <p className="text-lg font-medium text-gray-300">
                👋 Hey there! I'm
              </p>
            </motion.div>

            {/* Name - Hero Element */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                  {personalInfo.name}
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role with Typing Effect */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <TypingEffect roles={roles} />
              </h2>
            </motion.div>

            {/* Value Proposition */}
            <motion.div variants={itemVariants}>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                I craft <span className="text-blue-400 font-semibold">scalable, high-performance</span> web applications that{' '}
                <span className="text-purple-400 font-semibold">delight users</span> and{' '}
                <span className="text-pink-400 font-semibold">drive business growth</span>. 
                Specialized in modern JavaScript frameworks and cloud-native architectures.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                  <span>View Projects</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 font-bold text-white text-sm md:text-base hover:bg-white/20 transition-all">
                  <span>Get in Touch</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Micomyiza-Alexis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </motion.a>

              {/* Divider */}
              <div className="w-px h-8 bg-white/20" />

              {/* Email */}
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
              >
                lexmico10@gmail.com
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ========================================
              RIGHT COLUMN - VISUAL ELEMENTS
              ======================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative hidden lg:block"
          >
            {/* Main Visual Card */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <StatCard value="5+" label="Years Experience" delay={0.8} />
                  <StatCard value="50+" label="Projects Shipped" delay={0.9} />
                  <StatCard value="100K+" label="Users Impacted" delay={1.0} />
                  <StatCard value="15+" label="Clients Served" delay={1.1} />
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <TechBadge
                        key={tech.name}
                        icon={tech.icon}
                        name={tech.name}
                        delay={1.2 + index * 0.1}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: 'spring' }}
                className="absolute -top-8 -left-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-75 group-hover:opacity-100 blur" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="w-5 h-5 text-white animate-pulse" />
                      <span className="font-black text-white text-sm">Top Rated</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========================================
          SCROLL INDICATOR
          ======================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 font-medium">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;