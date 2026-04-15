import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

// ========================================
// SOCIAL ICON COMPONENT
// ========================================
const SocialIcon = ({ href, icon: Icon, label, delay = 0, isSvg = false }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
    className="group relative"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
    <div className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
      {isSvg ? (
        <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
          {Icon}
        </svg>
      ) : (
        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
      )}
    </div>
  </motion.a>
);

// ========================================
// FOOTER LINK GROUP
// ========================================
const FooterLinkGroup = ({ title, links, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, type: 'spring', stiffness: 100 }}
    viewport={{ once: true }}
  >
    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
      {title}
    </h4>
    <div className="space-y-3">
      {links.map((link, idx) => (
        <motion.a
          key={idx}
          href={link.href}
          whileHover={{ x: 5 }}
          className="text-sm text-gray-400 hover:text-blue-300 transition-colors flex items-center gap-2"
        >
          <span className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
          {link.label}
        </motion.a>
      ))}
    </div>
  </motion.div>
);

// ========================================
// MAIN FOOTER COMPONENT
// ========================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ];

  const projectLinks = [
    { label: 'View Projects', href: '#projects' },
    { label: 'GitHub', href: personalInfo.github },
    { label: 'LinkedIn', href: personalInfo.linkedin },
  ];

  const socialLinks = [
    {
      href: personalInfo.github,
      label: 'GitHub',
      icon: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />',
      isSvg: true,
    },
    {
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />',
      isSvg: true,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 border-t border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        {/* Top section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            {/* Left column - Brand & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MA</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-sm text-gray-400">Frontend Engineer & UI/UX Designer</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Building beautiful, performant web experiences. Let's create something amazing together.
              </p>

              {/* Email CTA */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl opacity-75 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all font-semibold text-white">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>Get in Touch</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Right column - Quick links grid */}
            <div className="grid grid-cols-2 gap-8">
              <FooterLinkGroup
                title="Navigate"
                links={quickLinks}
                delay={0.1}
              />
              <FooterLinkGroup
                title="Explore"
                links={projectLinks}
                delay={0.2}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom section */}
          <div className="pt-12 space-y-8">
            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Connect
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <SocialIcon
                    key={idx}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                    delay={0.3 + idx * 0.1}
                    isSvg={social.isSvg}
                  />
                ))}
                <SocialIcon
                  href={`mailto:${personalInfo.email}`}
                  icon={EnvelopeIcon}
                  label="Email"
                  delay={0.5}
                />
              </div>
            </div>

            {/* Footer credits */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-400">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {currentYear} {personalInfo.name}. All rights reserved.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span>Built with</span>
                <span className="text-blue-400 font-semibold">React</span>
                <span>•</span>
                <span className="text-purple-400 font-semibold">Tailwind</span>
                <span>•</span>
                <span className="text-pink-400 font-semibold">Framer Motion</span>
              </motion.div>

              {/* Scroll to top button */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
                aria-label="Scroll to top"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <ArrowUpRightIcon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated blob effect */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(0.95);
          }
          25% {
            transform: translate(20px, -50px) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
