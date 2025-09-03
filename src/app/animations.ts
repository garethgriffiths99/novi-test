// Professional page transition animations
export const animationVariants = [
  // Move to left/ from right
  {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to right/ from left
  {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to top/ from bottom
  {
    initial: { opacity: 0, y: 100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to bottom/ from top
  {
    initial: { opacity: 0, y: -100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade / from right
  {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade / from left
  {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade / from bottom
  {
    initial: { opacity: 0, y: 100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade / from top
  {
    initial: { opacity: 0, y: -100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade left / Fade right
  {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade right / Fade left
  {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade top / Fade bottom
  {
    initial: { opacity: 0, y: -100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fade bottom / Fade top
  {
    initial: { opacity: 0, y: 100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Different easing / from right
  {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "anticipate" as const,
      duration: 0.8,
    },
  },
  // Different easing / from left
  {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "anticipate" as const,
      duration: 0.8,
    },
  },
  // Different easing / from bottom
  {
    initial: { opacity: 0, y: 100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "anticipate" as const,
      duration: 0.8,
    },
  },
  // Different easing / from top
  {
    initial: { opacity: 0, y: -100 },
    in: { opacity: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "anticipate" as const,
      duration: 0.8,
    },
  },
  // Scale down / from right
  {
    initial: { opacity: 0, x: 100, scale: 0.8 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale down / from left
  {
    initial: { opacity: 0, x: -100, scale: 0.8 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale down / from bottom
  {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale down / from top
  {
    initial: { opacity: 0, y: -100, scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale down / scale down
  {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale up / scale up
  {
    initial: { opacity: 0, scale: 1.2 },
    in: { opacity: 1, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to left / scale up
  {
    initial: { opacity: 0, x: 100, scale: 0.8 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to right / scale up
  {
    initial: { opacity: 0, x: -100, scale: 0.8 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to top / scale up
  {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Move to bottom / scale up
  {
    initial: { opacity: 0, y: -100, scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Scale down / scale up
  {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Slide
  {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Glue
  {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    in: { opacity: 1, scale: 1, y: 0 },
    transition: {
      type: "tween" as const,
      ease: "backOut" as const,
      duration: 0.8,
    },
  },
  // Flip
  {
    initial: { opacity: 0, rotateY: -90 },
    in: { opacity: 1, rotateY: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fall
  {
    initial: { opacity: 0, y: -100, rotateX: 90 },
    in: { opacity: 1, y: 0, rotateX: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Newspaper
  {
    initial: { opacity: 0, scale: 0.8, rotateZ: -15 },
    in: { opacity: 1, scale: 1, rotateZ: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Push / Pull
  {
    initial: { opacity: 0, x: 100, scale: 0.9 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Fold / Unfold
  {
    initial: { opacity: 0, scaleX: 0 },
    in: { opacity: 1, scaleX: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Room
  {
    initial: { opacity: 0, scale: 0.8, rotateY: -15 },
    in: { opacity: 1, scale: 1, rotateY: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Cube
  {
    initial: { opacity: 0, rotateY: -90, scale: 0.8 },
    in: { opacity: 1, rotateY: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Carousel
  {
    initial: { opacity: 0, x: 100, rotateY: -45 },
    in: { opacity: 1, x: 0, rotateY: 0 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  // Sides
  {
    initial: { opacity: 0, x: -100, scale: 0.8 },
    in: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
];
