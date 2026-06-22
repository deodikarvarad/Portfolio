import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const focusAreas = [
  'React.js application development',
  'Redux Toolkit and Context API state management',
  'REST API integration for production workflows',
  'Responsive UI development with Tailwind CSS',
  'Performance optimization and cross-browser polish',
];

export default function About() {
  return (
    <Container id="about" className="py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="About Me"
          title="Frontend engineer building reliable React experiences for real users."
          description="I am a React Developer with 1+ year of experience building healthcare applications where clarity, speed, and responsive UI matter every day."
        />
        <motion.div
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-white/[0.04] sm:p-8"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            My work focuses on building maintainable React interfaces with reusable components, predictable state
            management, API-connected data flows, and polished responsive layouts. I enjoy turning complex product
            requirements into clean frontend experiences that feel fast, accessible, and easy to use.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="flex gap-3 rounded-lg bg-slate-100 p-4 dark:bg-white/5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-600 dark:text-mint-400" size={20} aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
