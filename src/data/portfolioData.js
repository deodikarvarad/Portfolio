import {
  Activity,
  Award,
  Blocks,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Trophy,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const frontendSkills = [
  { name: 'React.js', level: 92 },
  // { name: 'Next.js', level: 84 },
  { name: 'JavaScript ES6+', level: 88 },
  { name: 'Redux Toolkit', level: 86 },
  { name: 'Context API', level: 82 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML5', level: 94 },
  { name: 'CSS3', level: 91 },
  { name: 'REST API Integration', level: 87 },
  { name: 'Responsive Design', level: 93 },
];

export const tools = ['Git', 'Jira', 'Bitbucket', 'Postman', 'VS Code'];

export const aiTools = ['Cursor', 'Claude', 'Codex', 'ChatGPT'];

export const experienceHighlights = [
  'Developed production healthcare applications using React.js',
  'Built reusable component architecture for faster delivery and consistent UI quality.',
  'Improved application performance by 25-35% through optimization and UI tuning.',
  'Integrated 15+ REST APIs across admin and provider-facing workflows.',
  'Developed admin dashboards for operational visibility and healthcare workflows.',
  'Implemented Redux Toolkit state management for predictable frontend data flow.',
  'Delivered responsive, cross-browser compatible UIs for mobile, tablet, and desktop.',
  'Collaborated in Agile Scrum with designers, QA, and product stakeholders.',
];

export const projects = [
  {
    title: 'FV-CMD & FV-Provider',
    eyebrow: 'Healthcare Dashboards',
    description:
      'Admin and provider dashboard experiences for appointment scheduling, doctor onboarding, profile management, and role-aware workflows.',
    tech: ['React.js', 'Redux Toolkit', 'Responsive UI', 'REST APIs'],
    image: 'Healthcare Dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Fantasy Sports Platform',
    eyebrow: 'Interactive Sports Web App',
    description:
      'Developed a modern fantasy sports web application with reusable React components, responsive interactive UI, cross-browser compatibility, and performance-focused layouts for mobile, tablet, and desktop devices.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    image: 'Fantasy Sports Platform',
    icon: Trophy,
  },
  {
    title: 'PWD Tuljapur Website',
    eyebrow: 'Public Sector Website',
    description:
      'Official responsive website focused on mobile-first layouts, SEO optimization, accessibility improvements, and fast content discovery.',
    tech: ['React.js', 'Tailwind CSS', 'SEO', 'Accessibility'],
    image: 'Government Website',
    icon: ShieldCheck,
  },
];

export const achievements = [
  {
    title: '25-35% faster',
    description: 'Improved application performance through focused frontend optimization.',
    icon: Zap,
  },
  {
    title: '30% faster delivery',
    description: 'Reduced development time by building reusable component patterns.',
    icon: Blocks,
  },
  {
    title: '15+ APIs integrated',
    description: 'Connected production REST APIs into reliable frontend workflows.',
    icon: Code2,
  },
  {
    title: 'Healthcare scale',
    description: 'Built applications used by hospitals, providers, and admin teams.',
    icon: Activity,
  },
];

export const education = [
  {
    title: 'B.Tech Information Technology',
    institution: 'MGM University',
    duration: '2021 - 2025',
    detail: 'CGPA: 7.88',
    icon: GraduationCap,
  },
  {
    title: '12th HSC',
    institution: 'Higher Secondary Certificate',
    duration: 'Completed',
    detail: '93.67%',
    icon: Award,
  },
  {
    title: '10th SSC',
    institution: 'Secondary School Certificate',
    duration: 'Completed',
    detail: '94.20%',
    icon: BriefcaseBusiness,
  },
];

export const contactMethods = [
  { label: 'Email', value: 'deodikarvarad@gmail.com', href: 'mailto:deodikarvarad@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/varaddeodikar23', href: 'https://www.linkedin.com/in/varaddeodikar23/', icon: BriefcaseBusiness },
  { label: 'GitHub', value: 'github.com/deodikarvarad', href: 'https://github.com/deodikarvarad', icon: Code2 },
];

export const stats = [
  { value: '1+', label: 'Year React Experience' },
  { value: '15+', label: 'APIs Integrated' },
  { value: '35%', label: 'Performance Gains' },
  { value: '30%', label: 'Faster Delivery' },
];
