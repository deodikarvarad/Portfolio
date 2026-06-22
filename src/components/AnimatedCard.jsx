import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`rounded-lg border border-slate-200 bg-white/85 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-brand-500/50 dark:border-slate-800 dark:bg-white/[0.04] dark:hover:border-mint-400/50 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
