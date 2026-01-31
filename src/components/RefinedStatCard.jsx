import { motion } from 'framer-motion';
import EnhancedCounter from './EnhancedCounter';
import { transitions } from '../config/design-system';

export default function RefinedStatCard({ icon: Icon, label, value, change, trend, delay = 0 }) {
  const isPositive = change?.startsWith('+');
  const trendColors = {
    up: 'text-green-600 bg-green-50',
    down: 'text-red-600 bg-red-50',
    stable: 'text-neutral-600 bg-neutral-50',
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
      whileHover={{
        y: -4,
        transition: transitions.spring,
      }}
      className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={transitions.spring}
        >
          <Icon size={24} strokeWidth={2} />
        </motion.div>

        {change && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
            }`}
          >
            {change}
          </motion.span>
        )}
      </div>

      <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
        {label}
      </p>

      <div className="text-3xl font-bold text-neutral-900 mb-4">
        <EnhancedCounter value={value} />
      </div>

      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{
            duration: 1.2,
            delay: delay + 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
        />
      </div>
    </motion.div>
  );
}
