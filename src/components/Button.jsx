export default function Button({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary:
      'bg-ink-900 text-white shadow-glow hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-mint-400 dark:text-ink-950 dark:hover:bg-mint-500',
    secondary:
      'border border-slate-300 bg-white/80 text-ink-900 hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-white/5 dark:text-white dark:hover:border-mint-400 dark:hover:text-mint-400',
  };

  return (
    <Component
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
