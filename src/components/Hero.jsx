import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  ServerIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

const roles = [
  'Full-Stack Developer',
  'Backend Developer',
  'Web Application Developer',
];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
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
    }, deleting ? 45 : text === current ? 1800 : 80);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-blue-400">
      {text}
      <span className="animate-pulse text-blue-300">_</span>
    </span>
  );
};

const SocialIcon = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-white"
  >
    {children}
  </motion.a>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080b12] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for freelance work
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Hello, I'm
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              {personalInfo.name}
              <span className="text-blue-500">.</span>
            </h1>

            <div className="mt-7 flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
              <span className="text-gray-400">I'm a</span>
              <TypingEffect />
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              I build modern web applications that turn ideas into
              practical digital products — from clean interfaces to
              reliable backend systems and APIs.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                View my work
                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-gray-200 transition hover:bg-white/[0.07]"
              >
                Let's talk
              </motion.a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-3">
              <SocialIcon href={personalInfo.github}>
                <CodeBracketIcon className="h-5 w-5" />
              </SocialIcon>

              {personalInfo.linkedin && (
                <SocialIcon href={personalInfo.linkedin}>
                  <span className="text-sm font-bold">in</span>
                </SocialIcon>
              )}

              <a
                href={`mailto:${personalInfo.email}`}
                className="ml-3 text-sm text-gray-500 transition hover:text-white"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d111a] p-7 shadow-2xl">
              
              {/* Terminal top */}
              <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-gray-600">
                  alexis@developer:~
                </span>
              </div>

              <div className="font-mono text-sm leading-8">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = {'{'}
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">name:</span>{' '}
                  <span className="text-emerald-300">
                    "{personalInfo.name}"
                  </span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">focus:</span>{' '}
                  <span className="text-emerald-300">
                    "Full-Stack Development"
                  </span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">frontend:</span>{' '}
                  <span className="text-emerald-300">"React / Next.js"</span>,
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">backend:</span>{' '}
                  <span className="text-emerald-300">"Node.js / APIs"</span>,
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">database:</span>{' '}
                  <span className="text-emerald-300">"PostgreSQL"</span>,
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">status:</span>{' '}
                  <span className="text-emerald-300">"building..."</span>
                </p>

                <p>{'}'};</p>
              </div>

              {/* Stack */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <CodeBracketIcon className="mb-3 h-6 w-6 text-blue-400" />
                  <p className="font-semibold">Frontend</p>
                  <p className="mt-1 text-xs text-gray-500">
                    React · Next.js · Tailwind
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <ServerIcon className="mb-3 h-6 w-6 text-violet-400" />
                  <p className="font-semibold">Backend</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Node.js · APIs · PostgreSQL
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-500/5 px-4 py-3 text-sm text-blue-300">
                <SparklesIcon className="h-5 w-5" />
                Always learning. Always building.
              </div>
            </div>

            {/* Decorative square */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl border border-blue-500/20 bg-blue-500/5" />
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition hover:text-gray-300 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDownTrayIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;