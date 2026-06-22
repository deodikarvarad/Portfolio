import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import { siteConfig } from '../constants/site.js';
import { stats } from '../data/portfolioData.js';
import profileImage from '../assets/varad-profile.png';

const socials = [
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Linkedin },
  { label: 'GitHub', href: siteConfig.github, icon: Github },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
];

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.16),transparent_28%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.18),transparent_28%)]" />
      <Container className="grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-bold text-brand-600 dark:border-mint-400/20 dark:bg-mint-400/10 dark:text-mint-400">
            Available for Frontend React Developer roles
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-normal text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-brand-600 dark:text-mint-400 sm:text-3xl">{siteConfig.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build polished, responsive, and high-performing React interfaces for real production workflows,
            with hands-on experience in healthcare products, dashboard systems, API-driven UI, and reusable component architecture.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.resumeUrl} download>
              <Download size={18} aria-hidden="true" />
              Resume Download
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-white/5 dark:text-slate-200 dark:hover:border-mint-400 dark:hover:text-mint-400"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-white/[0.04]">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-ink-900 via-brand-600 to-mint-400 p-1">
              <div className="rounded-lg bg-slate-950 text-white">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <img
                    src={profileImage}
                    alt="Varad Deodikar"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-400">
                      Frontend React Developer
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Frontend-focused product builder</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                      <p className="text-2xl font-extrabold text-mint-400">{stat.value}</p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-slate-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
