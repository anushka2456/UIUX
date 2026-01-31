import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import { colors, transitions } from '../config/design-system';

export default function RefinedHero() {
  return (
    <div className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * -100,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={transitions.spring}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-semibold text-neutral-700">
              Live Data • Updated 2min ago
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-neutral-900">
              India's Health
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Intelligence Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Real-time infectious disease tracking with transparent data visualization across all Indian states
          </p>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors flex items-center gap-2"
            >
              Explore Dashboard
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold border border-neutral-200 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
