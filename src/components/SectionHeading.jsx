import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-mint-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
