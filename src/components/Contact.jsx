import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b12] py-28 text-white"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-gray-500"> useful.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Have a project, freelance opportunity, collaboration or
            interesting idea? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <ContactItem
              icon={EnvelopeIcon}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />

            <ContactItem
              icon={PhoneIcon}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone}`}
            />

            <ContactItem
              icon={MapPinIcon}
              label="Location"
              value={personalInfo.location}
            />

            <div className="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">
                  Currently available
                </span>
              </div>

              <p className="text-sm leading-6 text-gray-500">
                Open to freelance projects, junior developer roles,
                collaborations and interesting technical challenges.
              </p>
            </div>

            <div className="pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
                Find me online
              </p>

              <div className="flex gap-3">
                <SocialButton href={personalInfo.github} label="GitHub" />

                {personalInfo.linkedin && (
                  <SocialButton
                    href={personalInfo.linkedin}
                    label="LinkedIn"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <CheckIcon className="h-8 w-8 text-emerald-400" />
                </div>

                <h3 className="text-2xl font-bold">
                  Your email client should be open.
                </h3>

                <p className="mt-3 max-w-md text-gray-500">
                  Finish sending the message from your email application.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-7 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
                >
                  Send message
                  <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
                </motion.button>

                <p className="text-center text-xs text-gray-600">
                  Your message will be sent through your email client.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-300">
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
    />
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-500/20 hover:bg-white/[0.04]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
        <Icon className="h-5 w-5 text-blue-400" />
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-gray-600">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-gray-200">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const SocialButton = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition hover:border-blue-500/20 hover:text-white"
  >
    {label}
  </a>
);

export default Contact;