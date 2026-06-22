import { useEffect } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import About from '../sections/About.jsx';
import Achievements from '../sections/Achievements.jsx';
import Contact from '../sections/Contact.jsx';
import Education from '../sections/Education.jsx';
import Experience from '../sections/Experience.jsx';
import Hero from '../sections/Hero.jsx';
import Projects from '../sections/Projects.jsx';
import Skills from '../sections/Skills.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { useDarkMode } from '../hooks/useDarkMode.js';
import { updateDocumentMeta } from '../utils/seo.js';

export default function PortfolioPage() {
  const { isDark, setIsDark } = useDarkMode();

  useEffect(() => {
    updateDocumentMeta({
      title: 'Varad Deodikar | Frontend React Developer',
      description:
        'Frontend React Developer portfolio for Varad Deodikar, focused on React.js, Redux Toolkit, Tailwind CSS, responsive UI, and performance optimization.',
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-ink-900 transition-colors dark:bg-ink-950 dark:text-white">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
