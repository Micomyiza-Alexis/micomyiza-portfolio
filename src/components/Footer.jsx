import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

// ========================================
// SHARED ICONS (reusing existing SVG paths from the previous footer —
// no new icon library introduced)
// ========================================
const ICONS = {
  github: (
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
};

// ========================================
// SOCIAL LINK — small, quiet, icon-only with an accessible label
// ========================================
const SocialLink = ({ href, label, children, external = true }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    aria-label={label}
    className="group w-9 h-9 flex items-center justify-center rounded-md border border-white/10 text-gray-400 transition-colors hover:text-white hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
  >
    {children}
  </a>
);

// ========================================
// FOOTER NAV GROUP
// ========================================
const FooterNavGroup = ({ title, links }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
      {title}
    </h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ========================================
// MAIN FOOTER COMPONENT
// ========================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Internal anchors — mirrors the existing single-page navigation
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  // Existing external profiles, unchanged
  const connectLinks = [
    { label: 'GitHub', href: personalInfo.github, external: true },
    { label: 'LinkedIn', href: personalInfo.linkedin, external: true },
    { label: 'Email', href: `mailto:${personalInfo.email}`, external: false },
  ];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gray-950 border-t border-white/10">
      {/* Signature element: a single thin gradient hairline at the very top —
          the one accent this footer spends its "boldness" on */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-white font-semibold tracking-tight">
                {personalInfo.name}
                <span className="ml-0.5 text-blue-400 animate-pulse">_</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Building useful digital experiences through code, design, and technology.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white group"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <FooterNavGroup title="Navigate" links={navLinks} />
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FooterNavGroup title="Connect" links={connectLinks} />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 order-2 md:order-1">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3 order-1 md:order-2">
            <SocialLink href={personalInfo.github} label="GitHub profile">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                {ICONS.github}
              </svg>
            </SocialLink>
            <SocialLink href={personalInfo.linkedin} label="LinkedIn profile">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                {ICONS.linkedin}
              </svg>
            </SocialLink>
            <SocialLink href={`mailto:${personalInfo.email}`} label="Send an email" external={false}>
              <EnvelopeIcon className="w-4 h-4" />
            </SocialLink>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group ml-1 w-9 h-9 flex items-center justify-center rounded-md border border-white/10 text-gray-400 transition-colors hover:text-white hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <ArrowUpIcon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

          <p className="text-xs text-gray-600 font-mono order-3">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;