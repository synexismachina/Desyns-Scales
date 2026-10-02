import { motion } from "framer-motion";

/**
 * Single reusable scroll-reveal primitive so every section fades up the
 * same restrained way, once, the first time it enters view.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 22,
  className = "",
  once = true,
  amount = 0.3,
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
