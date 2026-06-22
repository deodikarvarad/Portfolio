import AnimatedCard from '../components/AnimatedCard.jsx';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <Container id="projects" className="py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected frontend projects with business-facing UI."
        description="Project cards emphasize product interfaces, dashboard UX, accessibility, SEO, and responsive implementation."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <AnimatedCard key={project.title} delay={index * 0.08} className="group flex h-full flex-col p-0">
              <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-slate-200 p-4 dark:bg-slate-900">
                <div className="flex h-full flex-col justify-between rounded-lg bg-gradient-to-br from-ink-900 via-brand-600 to-mint-400 p-5 text-white transition duration-300 group-hover:scale-[1.02]">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">{project.image}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-bold text-brand-600 dark:text-mint-400">{project.eyebrow}</p>
                <h3 className="mt-2 text-xl font-extrabold text-ink-900 dark:text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-white/5 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </Container>
  );
}
