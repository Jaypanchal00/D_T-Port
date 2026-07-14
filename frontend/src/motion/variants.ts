// Placeholder file for motion variants (not used without framer-motion)
// Keeping for potential future use or reference

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUp = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

export const slideDown = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
