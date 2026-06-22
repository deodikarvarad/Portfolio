import AnimatedCard from '../components/AnimatedCard.jsx';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { aiTools, frontendSkills, tools } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <Container id="skills" className="py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Modern frontend stack with product delivery discipline."
        description="A practical toolkit for building scalable React interfaces, dashboards, and responsive web applications."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {frontendSkills.map((skill, index) => (
          <AnimatedCard key={skill.name} delay={index * 0.025} className="p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-bold text-ink-900 dark:text-white">{skill.name}</h3>
              <span className="text-sm font-bold text-brand-600 dark:text-mint-400">{skill.level}%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-600 to-mint-400"
                style={{ width: `${skill.level}%` }}
                aria-hidden="true"
              />
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-white/[0.04]">
          <h3 className="text-lg font-extrabold text-ink-900 dark:text-white">Tools</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-700 dark:bg-white/5 dark:text-slate-200 dark:hover:border-mint-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-white/[0.04]">
          <h3 className="text-lg font-extrabold text-ink-900 dark:text-white">AI Tools</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-bold text-brand-600 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-mint-400/20 dark:bg-mint-400/10 dark:text-mint-400 dark:hover:border-mint-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
