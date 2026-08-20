import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowRightIcon,
  CodeBracketIcon,
  ServerIcon,
  ArrowPathRoundedSquareIcon,
  CircleStackIcon,
  ChevronDownIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

/* ============================================================
   CONFIG
============================================================ */

const roles = [
  'Full-Stack Developer',
  'Backend Developer',
  'Web Application Developer',
];

const STAGES = [
  {
    id: 'frontend',
    label: 'Frontend',
    sub: 'React · Next.js · TypeScript',
    trace: 'GET /dashboard  →  rendering UI, 3 components hydrated',
    icon: CodeBracketIcon,
    color: '#5b8dff',
    glow: 'rgba(91,141,255,0.16)',
  },
  {
    id: 'api',
    label: 'API',
    sub: 'REST endpoints · Auth middleware',
    trace: 'POST /api/v1/session  →  200 OK · 14ms',
    icon: ArrowPathRoundedSquareIcon,
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.16)',
  },
  {
    id: 'backend',
    label: 'Backend',
    sub: 'Node.js · Express · Business logic',
    trace: 'handler:getUserData()  →  executed in 6ms',
    icon: ServerIcon,
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.16)',
  },
  {
    id: 'database',
    label: 'Database',
    sub: 'PostgreSQL · Prisma ORM',
    trace: 'SELECT * FROM users WHERE id = 42  →  1 row · 3ms',
    icon: CircleStackIcon,
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,0.16)',
  },
];

/* ============================================================
   TYPING ROLE
============================================================ */

const TypingRole = () => {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? roles[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting && text === current) {
          setDeleting(true);
        } else if (deleting && text === '') {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        }
      },
      deleting ? 40 : text === current ? 2000 : 70
    );

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex, prefersReducedMotion]);

  return (
    <span className="inline-flex items-center font-mono text-blue-400">
      {text}
      {!prefersReducedMotion && (
        <span className="ml-1 h-[1.1em] w-[2px] animate-pulse bg-blue-400" />
      )}
    </span>
  );
};

/* ============================================================
   MAGNETIC BUTTON
============================================================ */

const MagneticButton = ({ href, children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
    },
    [x, y, prefersReducedMotion]
  );

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={prefersReducedMotion ? undefined : { x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
};

/* ============================================================
   REQUEST PIPELINE (signature element)
============================================================ */

const RequestPipeline = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(STAGES[0].id);
  const [log, setLog] = useState([STAGES[0].trace]);
  const [auto, setAuto] = useState(!prefersReducedMotion);
  const resumeTimer = useRef(null);

  const setStage = useCallback((id, userTriggered) => {
    setActiveId(id);
    const stage = STAGES.find((s) => s.id === id);
    setLog((prev) => [stage.trace, ...prev].slice(0, 4));

    if (userTriggered) {
      setAuto(false);
      clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => setAuto(true), 6000);
    }
  }, []);

  useEffect(() => {
    if (!auto || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveId((current) => {
        const idx = STAGES.findIndex((s) => s.id === current);
        const next = STAGES[(idx + 1) % STAGES.length];
        setLog((prev) => [next.trace, ...prev].slice(0, 4));
        return next.id;
      });
    }, 2600);
    return () => clearInterval(interval);
  }, [auto, prefersReducedMotion]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const activeIndex = STAGES.findIndex((s) => s.id === activeId);
  const activeStage = STAGES[activeIndex];

  return (
    <div className="relative">
      {/* ambient glow tied to active stage */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] blur-3xl transition-colors duration-700"
        style={{ backgroundColor: activeStage.glow }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f16]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            request&nbsp;trace
          </div>
          <span className="font-mono text-[11px] text-gray-600">
            client → db
          </span>
        </div>

        {/* pipeline body */}
        <div
          className="relative flex flex-col gap-1 px-5 py-6 sm:px-7"
          role="tablist"
          aria-label="Full-stack request pipeline"
        >
          {/* connecting line */}
          <div
            className="absolute left-[38px] top-8 bottom-8 w-px bg-white/10 sm:left-[42px]"
            aria-hidden="true"
          />

          {/* traveling pulse */}
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute left-[35px] h-[7px] w-[7px] rounded-full sm:left-[39px]"
              style={{ backgroundColor: activeStage.color }}
              animate={{ top: [`${activeIndex * 25 + 4}%`, `${activeIndex * 25 + 20}%`] }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          )}

          {STAGES.map((stage, i) => {
            const isActive = stage.id === activeId;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => setStage(stage.id, true)}
                onFocus={() => setStage(stage.id, true)}
                onClick={() => setStage(stage.id, true)}
                className="group relative z-10 flex items-center gap-4 rounded-xl px-2 py-3 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: isActive ? stage.color : 'rgba(255,255,255,0.1)',
                    backgroundColor: isActive ? `${stage.color}1A` : 'rgba(255,255,255,0.03)',
                  }}
                >
                  <Icon
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: isActive ? stage.color : '#6b7280' }}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] text-gray-600"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="text-sm font-semibold transition-colors duration-300"
                      style={{ color: isActive ? '#fff' : '#9ca3af' }}
                    >
                      {stage.label}
                    </span>
                  </span>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="block overflow-hidden font-mono text-xs text-gray-500"
                      >
                        {stage.sub}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            );
          })}
        </div>

        {/* trace log */}
        <div
          className="border-t border-white/10 bg-black/20 px-5 py-4 sm:px-7"
          aria-live="polite"
        >
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-600">
            live log
          </p>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
            {log.map((line, i) => (
              <p
                key={line + i}
                className="truncate transition-opacity duration-300"
                style={{ opacity: 1 - i * 0.22, color: i === 0 ? activeStage.color : '#6b7280' }}
              >
                <span className="text-gray-700">&gt;</span> {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   HERO
============================================================ */

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 50, y: 30 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#05070b] text-white"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        {!prefersReducedMotion && (
          <div
            className="absolute inset-0 opacity-40 transition-[background] duration-300"
            style={{
              background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, rgba(91,141,255,0.06), transparent 60%)`,
            }}
          />
        )}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#05070b_88%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20"
        >
          {/* ============================ LEFT ============================ */}
          <div>
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 font-mono text-xs text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                {!prefersReducedMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              status: available for freelance work
            </motion.div>

            <motion.p
              variants={item}
              className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
              <span className="text-blue-500">.</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-6 flex flex-col gap-1 text-xl font-semibold sm:flex-row sm:items-center sm:gap-3 sm:text-2xl"
            >
              <span className="text-gray-500">I&apos;m a</span>
              <TypingRole />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I design and ship complete web systems — from the interface
              someone taps, through the API and server logic, down to the
              database that keeps it honest.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <MagneticButton
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                View my work
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Let&apos;s build something
              </MagneticButton>

              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  <DocumentArrowDownIcon className="h-4 w-4" />
                  Download CV
                </a>
              )}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400 transition-colors duration-300 hover:border-blue-400/40 hover:text-white"
              >
                <CodeBracketIcon className="h-5 w-5" />
              </a>

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-sm font-bold text-gray-400 transition-colors duration-300 hover:border-blue-400/40 hover:text-white"
                >
                  in
                </a>
              )}

              <div className="hidden h-7 w-px bg-white/10 sm:block" aria-hidden="true" />

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </div>

          {/* ============================ RIGHT ============================ */}
          <motion.div variants={item}>
            <RequestPipeline />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition-colors hover:text-gray-300 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        {!prefersReducedMotion && <ChevronDownIcon className="h-4 w-4 animate-bounce" />}
      </motion.a>
    </section>
  );
};

export default Hero;