import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { contactMethods } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <Container id="contact" className="py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        description="Open to Frontend React Developer opportunities where polished UI, performance, and maintainable component systems matter."
        align="center"
      />

      <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-white/[0.04] sm:p-8">
        <div className="grid gap-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                className="focus-ring flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-brand-500 hover:bg-white dark:border-slate-700 dark:bg-ink-900 dark:hover:border-mint-400 dark:hover:bg-white/[0.05]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:bg-mint-400/10 dark:text-mint-400">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-900 dark:text-white">{method.label}</span>
                  <span className="mt-1 block break-all text-sm text-slate-600 dark:text-slate-300">{method.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
