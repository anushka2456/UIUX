import { motion } from 'framer-motion';
import { colors, glass, transitions } from '../config/design-system';

export default function RefinedCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  variant = 'medium',
}) {
  const variants = {
    light: 'glass-card-light',
    medium: 'glass-card-premium',
    strong: 'bg-white border border-neutral-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={hover ? {
        y: -4,
        transition: transitions.spring
      } : {}}
      className={`${variants[variant]} rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
