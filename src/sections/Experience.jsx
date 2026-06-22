import { BriefcaseBusiness } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard.jsx';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { experienceHighlights } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <Container id="experience" className="py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Production frontend work in healthcare technology."
        description="Current role focused on React and Next.js interfaces, component systems, admin dashboards, and API-driven frontend workflows."
      />
      <div className="mt-10">
        <AnimatedCard className="relative overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="bg-ink-900 p-6 text-white dark:bg-white/[0.06] sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-mint-400 text-ink-950">
                <BriefcaseBusiness size={24} aria-hidden="true" />
              </div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-mint-400">Dec 2024 - Present</p>
              <h3 className="mt-3 text-2xl font-extrabold">Software Engineer - Frontend</h3>
              <p className="mt-3 text-slate-300">MyCLNQ Health India Pvt Ltd</p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="relative border-l border-slate-200 pl-6 dark:border-slate-700">
                {experienceHighlights.map((item) => (
                  <div key={item} className="relative pb-5 last:pb-0">
                    <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-white dark:bg-mint-400 dark:ring-ink-950" />
                    <p className="text-sm font-semibold leading-7 text-slate-700 dark:text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </Container>
  );
}
