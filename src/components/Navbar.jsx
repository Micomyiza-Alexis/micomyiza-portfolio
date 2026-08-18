import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ========================================
  // SCROLL + ACTIVE SECTION
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => link.href.replace('#', ''))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ========================================
  // LOCK BODY SCROLL ON MOBILE MENU
  // ========================================

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // ========================================
  // ESCAPE KEY
  // ========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // ========================================
  // NAV CLICK
  // ========================================

  const handleClick = (href) => {
    setMobileOpen(false);

    const id = href.replace('#', '');
    setActiveSection(id);
  };

  return (
    <>
      {/* ========================================
          NAVBAR
      ======================================== */}

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <nav
          className={`
            mx-auto max-w-6xl
            rounded-2xl
            border
            transition-all duration-500
            ${
              scrolled || mobileOpen
                ? `
                  border-white/[0.09]
                  bg-[#080b12]/95
                  shadow-2xl
                  shadow-black/30
                  backdrop-blur-2xl
                `
                : `
                  border-transparent
                  bg-transparent
                `
            }
          `}
        >
          {/* ========================================
              NAVBAR TOP
          ======================================== */}

          <div className="flex h-[68px] items-center justify-between px-3 sm:px-5">

            {/* LOGO */}

            <motion.a
              href="#home"
              onClick={() => handleClick('#home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white text-sm font-black text-[#080b12] shadow-lg shadow-white/5">
                <span className="relative z-10">MA</span>

                <div className="absolute inset-0 -translate-x-full bg-blue-400/40 transition-transform duration-500 group-hover:translate-x-full" />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold tracking-tight text-white">
                  Micomyiza Alexis
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Developer
                </p>
              </div>
            </motion.a>

            {/* ========================================
                DESKTOP NAV
            ======================================== */}

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeSection === id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className="relative rounded-xl px-4 py-2 text-sm font-medium"
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-white/[0.07]"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`
                        relative z-10 transition-colors
                        ${
                          active
                            ? 'text-white'
                            : 'text-gray-500 hover:text-gray-200'
                        }
                      `}
                    >
                      {link.name}
                    </span>

                    {active && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* ========================================
                DESKTOP CTA
            ======================================== */}

            <motion.a
              href="#contact"
              onClick={() => handleClick('#contact')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                group hidden items-center gap-2
                rounded-xl
                bg-white
                px-4 py-2.5
                text-sm font-bold
                text-[#080b12]
                transition
                hover:bg-blue-50
                md:flex
              "
            >
              Let's talk

              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* ========================================
                MOBILE MENU BUTTON
            ======================================== */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={
                mobileOpen
                  ? 'Close navigation'
                  : 'Open navigation'
              }
              aria-expanded={mobileOpen}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                border border-white/[0.1]
                bg-white/[0.05]
                text-gray-300
                shadow-lg shadow-black/10
                transition
                hover:bg-white/[0.1]
                hover:text-white
                md:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                  >
                    <Bars3Icon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* ========================================
              MOBILE MENU
          ======================================== */}

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                className="
                  overflow-hidden
                  border-t border-white/[0.08]
                  md:hidden
                "
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  className="px-3 pb-4 pt-3"
                >

                  {/* MENU LABEL */}

                  <div className="mb-3 flex items-center justify-between px-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Navigation
                    </span>

                    <span className="text-[10px] text-gray-600">
                      Menu
                    </span>
                  </div>

                  {/* LINKS */}

                  <div className="space-y-1">
                    {navLinks.map((link, index) => {
                      const id = link.href.replace('#', '');
                      const active = activeSection === id;

                      return (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={() =>
                            handleClick(link.href)
                          }
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.045,
                            duration: 0.2,
                          }}
                          className={`
                            group
                            flex min-h-[50px]
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            text-sm font-medium
                            transition-all
                            ${
                              active
                                ? `
                                  border border-blue-400/20
                                  bg-blue-500/[0.1]
                                  text-white
                                `
                                : `
                                  border border-transparent
                                  text-gray-400
                                  hover:bg-white/[0.05]
                                  hover:text-white
                                `
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">

                            {/* ACTIVE INDICATOR */}

                            <span
                              className={`
                                h-1.5 w-1.5 rounded-full
                                transition-all
                                ${
                                  active
                                    ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]'
                                    : 'bg-gray-700 group-hover:bg-gray-400'
                                }
                              `}
                            />

                            <span>{link.name}</span>
                          </div>

                          <ArrowUpRightIcon
                            className={`
                              h-4 w-4
                              transition-all
                              ${
                                active
                                  ? 'text-blue-400 opacity-100'
                                  : 'text-gray-600 opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100'
                              }
                            `}
                          />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* DIVIDER */}

                  <div className="my-4 h-px bg-white/[0.06]" />

                  {/* CTA */}

                  <motion.a
                    href="#contact"
                    onClick={() =>
                      handleClick('#contact')
                    }
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: navLinks.length * 0.045,
                    }}
                    className="
                      flex min-h-[52px]
                      items-center justify-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-4
                      text-sm font-bold
                      text-[#080b12]
                      shadow-xl shadow-black/20
                      transition
                      hover:bg-blue-50
                    "
                  >
                    Let's talk

                    <ArrowUpRightIcon className="h-4 w-4" />
                  </motion.a>

                  {/* SMALL STATUS */}

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-600">
                      Available for freelance work
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* ========================================
          MOBILE BACKDROP
      ======================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="
              fixed inset-0
              z-[90]
              bg-black/50
              backdrop-blur-[2px]
              md:hidden
            "
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;