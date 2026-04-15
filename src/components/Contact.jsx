import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

// ========================================
// CONTACT INFO CARD
// ========================================
const ContactInfoCard = ({ icon: Icon, label, value, href, delay = 0 }) => (
  <motion.a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, type: 'spring' }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
    <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
          <Icon className="w-6 h-6 text-blue-300" />
        </div>
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">{label}</p>
          <p className="text-lg font-semibold text-white mt-1">{value}</p>
        </div>
      </div>
    </div>
  </motion.a>
);

// ========================================
// SOCIAL LINK
// ========================================
const SocialLink = ({ href, icon: Icon, label, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
    <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
      {typeof Icon === 'string' ? (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          {Icon === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
          {Icon === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
        </svg>
      ) : (
        <Icon className="w-6 h-6 text-white" />
      )}
    </div>
  </motion.a>
);

// ========================================
// MAIN CONTACT COMPONENT
// ========================================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

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
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20"
    >
      {/* ========================================
          ANIMATED BACKGROUND
          ======================================== */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQgOC4wNi0xOCAxOC0xOHMxOCA4LjA2IDE4IDE4LTguMDYgMTgtMTggMTgtMTgtOC4wNi0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />

      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
            💬 LET'S COLLABORATE
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-300">
              Ready to Build Something Great?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project, an idea, or just want to say hi? Drop me a line and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN - CONTACT INFO */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactInfoCard
                icon={EnvelopeIcon}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactInfoCard
                icon={PhoneIcon}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactInfoCard
                icon={MapPinIcon}
                label="Location"
                value={personalInfo.location}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-4">
                <SocialLink
                  href={personalInfo.github}
                  icon="github"
                  label="GitHub"
                  delay={0.5}
                />
                <SocialLink
                  href={personalInfo.linkedin}
                  icon="linkedin"
                  label="LinkedIn"
                  delay={0.6}
                />
                <SocialLink
                  href={`mailto:${personalInfo.email}`}
                  icon={EnvelopeIcon}
                  label="Email"
                  delay={0.7}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
            
            <form
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alexis Micomyiza"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-2"
                >
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-green-200 font-medium">
                    Message sent! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2"
                >
                  <span className="text-sm text-red-200 font-medium">
                    Please fill in all fields.
                  </span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-75 group-hover:opacity-100 blur transition-opacity disabled:opacity-50" />
                <div className="relative flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white disabled:opacity-50">
                  <span>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </span>
                  {status !== 'sending' && (
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
