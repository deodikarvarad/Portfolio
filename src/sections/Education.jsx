import AnimatedCard from '../components/AnimatedCard.jsx';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <Container id="education" className="py-20">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation in information technology."
        description="Strong academic performance with a focused path into frontend product engineering."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {education.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedCard key={item.title} delay={index * 0.06}>
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-ink-900 text-mint-400 dark:bg-white dark:text-brand-600">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-ink-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 font-semibold text-slate-700 dark:text-slate-200">{item.institution}</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.duration}</p>
              <p className="mt-2 text-sm font-bold text-brand-600 dark:text-mint-400">{item.detail}</p>
            </AnimatedCard>
          );
        })}
      </div>
    </Container>
  );
}
