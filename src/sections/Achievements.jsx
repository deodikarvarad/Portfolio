import AnimatedCard from '../components/AnimatedCard.jsx';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <Container id="achievements" className="py-20">
      <SectionHeading
        eyebrow="Achievements"
        title="Measured improvements from frontend engineering."
        description="A concise view of outcomes that matter to product teams: speed, consistency, integration quality, and scalable UI delivery."
        align="left"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <AnimatedCard key={achievement.title} delay={index * 0.06}>
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:bg-mint-400/10 dark:text-mint-400">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-ink-900 dark:text-white">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{achievement.description}</p>
            </AnimatedCard>
          );
        })}
      </div>
    </Container>
  );
}
