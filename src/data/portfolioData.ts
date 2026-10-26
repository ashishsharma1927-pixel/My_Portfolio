import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Ashish Sharma',
  title: 'Python Backend Developer',
  headline: 'Building Reliable Backend Solutions with Python & Django.',
  shortIntro:
    "I'm a Python Backend Developer with hands-on experience building REST APIs, working with databases, testing endpoints, and debugging backend applications.",
  aboutText:
    'I specialize in Python, Django, and Django REST Framework, focusing on building resilient REST APIs and efficient relational database schemas. Holding a B.Sc. in Mathematics from Himachal Pradesh University, I combine analytical thinking with systematic backend engineering to develop scalable endpoints, optimize data queries, and resolve complex application bugs.',
  location: 'Bilaspur, Himachal Pradesh, India',
  email: 'ashishsharma1927@gmail.com',
  phone: '+91 90152 10471',
  github: 'https://github.com/ashishsharma1927-pixel',
  linkedin: 'https://linkedin.com/in/ashish-sharma-742268416',
  resumeUrl: '/Ashish_Sharma_Resume.pdf',
  heroTechLabels: ['Python & Django', 'REST APIs', 'React 19 & Three.js'],
  aboutHighlights: [
    { label: 'Location', value: 'Bilaspur, Himachal Pradesh, India' },
    { label: 'Education', value: 'B.Sc. Mathematics' },
    { label: 'Focus', value: 'Backend & Full-Stack Development' },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Django REST Framework' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Frontend & 3D Interactive',
    skills: [
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'Three.js / WebGL' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'Background Tasks & Caching',
    skills: [
      { name: 'Redis' },
      { name: 'Celery' },
    ],
  },
  {
    title: 'Testing & Development Tools',
    skills: [
      { name: 'Postman' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Deployment & IDE',
    skills: [
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'Antigravity IDE' },
    ],
  },
];

/* 
  Projects Showcase
*/
export const projectsData: Project[] = [
  {
    id: 'hrms',
    title: 'HRMS — Human Resource Management System',
    tagline: 'Employee & Department Management Application',
    category: 'Backend Architecture • Django REST API',
    description:
      'A human resource management application focused on employee and department management, powered by scalable Django REST Framework APIs.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'MySQL',
      'Postman',
      'Render',
      'Vercel',
    ],
    details: [
      'Django REST Framework API development and testing for employee and department data.',
      'Employee and department data management with relational database relationships and foreign keys.',
      'Serializer validation, clean error handling, and robust HTTP response formatting.',
      'Testing request payloads, API responses, and HTTP status codes (200, 201, 400, 401, 404) using Postman.',
      'Frontend and backend deployment integration connecting Vercel frontend with Render backend.',
    ],
    liveUrl: 'https://hrms-frontend-cr1h.vercel.app/login',
    backendUrl: 'https://hrms-backend-yj0q.onrender.com',
    badge: 'Featured Project',
  },
  {
    id: 'segs',
    title: 'SEGS — Spatial 3D E-Commerce Platform',
    tagline: 'Spatial 3D E-Commerce Platform & Precision Hardware Architecture',
    category: '3D Spatial Commerce • React 19 & WebGL',
    description:
      'A next-generation spatial digital commerce platform engineered with React 19, Three.js / React Three Fiber, and Tailwind CSS. Bridging the gap between tactile physical hardware and digital spatial retail, SEGS features a real-time WebGL audio studio, dynamic material shaders, acoustic telemetry HUDs, and an end-to-end multi-step checkout funnel.',
    technologies: [
      'React 19',
      'Three.js',
      'React Three Fiber',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'Vite',
      'Vercel',
    ],
    details: [
      'Interactive 3D Spatial Audio Studio (/experience) with 360° real-time WebGL orbit, dynamic exploded focal hotspots, and live acoustic telemetry HUD.',
      'Real-time material shader customizer supporting Aerospace Titanium, Matte Obsidian, Space Silver, and Imperial Bronze finishes.',
      'Full e-commerce funnel with faceted product filtering, dynamic cart & saved wishlist sync with persistent localStorage state, and promo code engine.',
      'Multi-step checkout flow (Shipping address, priority dispatch, encrypted payment card/Apple Pay, and order manifest generation).',
      'Real-time 5-step order courier telemetry tracking (/tracking) with GPS transit waypoints, printable invoice, and customs duty verification.',
      'Enterprise resilience featuring global React ErrorBoundary, automated GPU WebGL fallback detection, and zero 3rd-party cookie tracking.',
    ],
    liveUrl: 'https://segs-one.vercel.app/',
    githubUrl: 'https://github.com/ashishsharma1927-pixel/segs',
    badge: 'Spatial 3D Commerce',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'it-infonity',
    role: 'Backend Developer Intern',
    company: 'IT Infonity',
    duration: 'May 2026 – October 2026',
    type: 'Internship',
    responsibilities: [
      'Worked on Django APIs and server-side application logic.',
      'Tested API endpoints using Postman to verify request payloads, headers, and HTTP status codes.',
      'Debugged stack traces, database query issues, and input validation errors to resolve application bugs.',
      'Participated in application testing and collaborated with the engineering team using Git and GitHub.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'bsc',
    degree: 'B.Sc. in Mathematics',
    institution: 'Himachal Pradesh University (HPU), Shimla',
    durationOrYear: 'Completed: 2025',
    scoreOrDetail: 'Strong foundation in analytical reasoning & mathematical modeling',
  },
  {
    id: 'dca',
    degree: 'Diploma in Computer Applications (DCA)',
    institution: 'Soft Brain',
    durationOrYear: 'October 2024 – September 2025',
    scoreOrDetail: 'Core computer science fundamentals & programming concepts',
  },
  {
    id: 'class-12',
    degree: 'Class XII (Senior Secondary Education)',
    institution: 'HPBOSE, Dharamshala',
    durationOrYear: '2021',
    scoreOrDetail: 'Score: 80%',
  },
  {
    id: 'class-10',
    degree: 'Class X (Secondary Education)',
    institution: 'HPBOSE, Dharamshala',
    durationOrYear: '2019',
    scoreOrDetail: 'Score: 80%',
  },
];
