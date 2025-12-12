import { Variants, Transition } from "framer-motion";

// Scroll-triggered animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Hover animation variants
export const hoverLift: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};

export const hoverGlow: Variants = {
  rest: { boxShadow: "0 0 0px rgba(212, 197, 154, 0)" },
  hover: { 
    boxShadow: "0 10px 40px -10px rgba(212, 197, 154, 0.4)",
    transition: { duration: 0.3 }
  }
};

// Click/tap animation variants
export const tapScale: Variants = {
  rest: { scale: 1 },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const tapBounce: Variants = {
  rest: { scale: 1 },
  tap: { 
    scale: 0.9,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};

// Combined animations
export const cardHover: Variants = {
  rest: { 
    y: 0, 
    scale: 1,
    rotateX: 0,
    rotateY: 0
  },
  hover: { 
    y: -12,
    scale: 1.03,
    rotateX: 2,
    rotateY: 2,
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const buttonPress: Variants = {
  rest: { 
    scale: 1,
    boxShadow: "0 0 20px -5px rgba(212, 197, 154, 0.3)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 5px 30px -5px rgba(212, 197, 154, 0.5)",
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    boxShadow: "0 0 10px -5px rgba(212, 197, 154, 0.2)",
    transition: { duration: 0.1 }
  }
};

// Scroll progress animation
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.6 },
      y: { duration: 0.8 },
      scale: { duration: 0.8 }
    }
  }
};

// Parallax variants
export const parallaxUp: Variants = {
  rest: { y: 0 },
  hover: { 
    y: -20,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const parallaxDown: Variants = {
  rest: { y: 0 },
  hover: { 
    y: 20,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    clipPath: "inset(0 0 100% 0)"
  },
  visible: { 
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Viewport options for scroll animations
export const viewportOptions = {
  once: false, // Re-trigger on scroll
  margin: "-100px",
  amount: 0.3
};

export const viewportOptionsOnce = {
  once: true,
  margin: "-50px",
  amount: 0.2
};

