import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks, siteConfig } from '../constants/site.js';

export default function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl dark:border-slate-800 dark:bg-ink-950/82">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-lg" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink-900 text-sm font-extrabold text-mint-400 dark:bg-white dark:text-brand-600">
            VD
          </span>
          <span className="hidden text-sm font-extrabold text-ink-900 dark:text-white sm:block">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-mint-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-ink-900 transition hover:border-brand-500 dark:border-slate-700 dark:bg-white/5 dark:text-white dark:hover:border-mint-400"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-ink-900 lg:hidden dark:border-slate-700 dark:bg-white/5 dark:text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        className={`section-shell overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-ink-900">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="focus-ring rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
