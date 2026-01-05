export const animationConfig = {
  // Timing
  fast: { duration: 0.3 },
  medium: { duration: 0.6 },
  slow: { duration: 1 },

  // Easing functions
  easeIn: [0.32, 0, 0.67, 0],
  easeOut: [0.33, 1, 0.68, 1],
  easeInOut: [0.42, 0, 0.58, 1],

  // Spring presets
  spring: {
    subtle: { damping: 15, stiffness: 200, mass: 0.5 },
    default: { damping: 10, stiffness: 100, mass: 1 },
    bouncy: { damping: 8, stiffness: 150, mass: 1.5 },
  },

  buttonRotate: {
    duration: 8,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },

  buttonRotateHover: {
    duration: 5,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },

  // Glow pulse
  glowPulse: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },

  // Stagger patterns
  staggerContainer: (staggerChildren = 0.1) => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: 0.1,
      },
    },
  }),

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  // Scroll animations
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  // Text animations
  textReveal: {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
    },
  },

  // Button animations
  buttonHover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },

  buttonTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
}

// Utility function for character reveal animation
export const characterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.3,
    },
  }),
}
