/**
 * Global Design System
 * Single source of truth for all design tokens
 */

export const COLORS = {
  primary: 'blue',
  secondary: 'purple',
  accent: 'pink',
};

export const TYPOGRAPHY = {
  heading: {
    h1: 'text-5xl md:text-6xl lg:text-7xl font-black tracking-tight',
    h2: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-bold',
    h4: 'text-xl font-semibold',
  },
  body: {
    lg: 'text-lg text-gray-300 leading-relaxed',
    base: 'text-base text-gray-300 leading-relaxed',
    sm: 'text-sm text-gray-400 leading-relaxed',
    xs: 'text-xs text-gray-500 uppercase tracking-widest',
  },
};

export const SPACING = {
  px: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

export const BORDERS = {
  card: 'rounded-2xl',
  button: 'rounded-lg',
  badge: 'rounded-full',
  input: 'rounded-xl',
};

export const GLASS_EFFECTS = {
  card: 'bg-white/5 backdrop-blur-lg border border-white/10',
  cardHover: 'hover:bg-white/10 hover:border-white/20 transition-all duration-300',
  button: 'bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white',
};

export const ANIMATIONS = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
};

export const SECTION = {
  padding: 'py-24 md:py-32',
  headerMargin: 'mb-16 lg:mb-24',
  container: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full',
};
