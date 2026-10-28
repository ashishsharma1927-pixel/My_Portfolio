import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Ashish Sharma',
  title: 'Python Backend Developer',
  headline: 'Building Reliable Backend Solutions with Python & Django.',
  shortIntro:
    "I'm a Python Backend Developer with hands-on experience building REST APIs, working with databases, testing endpoints, and debugging backend applications.",
  aboutText:
    'I specialize in Python, Django, and Django REST Framework, focusing on building resilient REST APIs, real-time WebSocket telemetry with Django Channels, and full-stack SaaS platforms. Holding a B.Sc. in Mathematics from Himachal Pradesh University, I combine analytical thinking with systematic backend engineering to develop scalable endpoints, optimize data queries, and resolve complex application bugs.',
  location: 'Bilaspur, Himachal Pradesh, India',
  email: 'ashishsharma1927@gmail.com',
  phone: '+91 90152 10471',
  github: 'https://github.com/ashishsharma1927-pixel',
  linkedin: 'https://linkedin.com/in/ashish-sharma-742268416',
  resumeUrl: '/Ashish_Sharma_Resume.pdf',
  heroTechLabels: ['Python 3 & Django 6', 'WebSockets & Channels', 'Stripe & Cloud SaaS'],
  aboutHighlights: [
    { label: 'Location', value: 'Bilaspur, Himachal Pradesh, India' },
    { label: 'Education', value: 'B.Sc. Mathematics' },
    { label: 'Focus', value: 'Backend & Full-Stack Development' },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend Architecture',
    skills: [
      { name: 'Python 3' },
      { name: 'Django 6.0' },
      { name: 'Django REST Framework' },
      { name: 'Django Channels (WebSockets)' },
      { name: 'ASGI (Daphne)' },
      { name: 'WSGI (Gunicorn)' },
    ],
  },
  {
    title: 'Frontend & UI Engineering',
    skills: [
      { name: 'Vanilla JavaScript (ES6+)' },
      { name: 'HTML5 Semantic' },
      { name: 'Custom Vanilla CSS3' },
      { name: 'Glassmorphism & Micro-interactions' },
      { name: 'Responsive Layouts' },
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL (Cloud)' },
      { name: 'SQLite3 (dj-database-url)' },
      { name: 'MySQL' },
      { name: 'Relational Schema Design' },
    ],
  },
  {
    title: 'Async, WebSockets & Caching',
    skills: [
      { name: 'Django Channels' },
      { name: 'WebSocket Telemetry' },
      { name: 'In-Memory Django Cache' },
      { name: 'Non-blocking Daemon Threads' },
    ],
  },
  {
    title: 'APIs, Payments & Security',
    skills: [
      { name: 'Stripe Checkout & Webhooks' },
      { name: 'Resend HTTPS REST Email API' },
      { name: '6-digit Email OTP Verification' },
      { name: 'Brute-Force Rate Limiting' },
      { name: 'Dynamic CSRF Protection' },
    ],
  },
  {
    title: 'Cloud DevOps & Deployment',
    skills: [
      { name: 'Render Cloud PaaS' },
      { name: 'Vercel Edge' },
      { name: 'WhiteNoise Asset Compression' },
      { name: 'Auto-Migrate & Auto-Seed' },
      { name: 'Postman API Testing' },
      { name: 'Git & GitHub' },
    ],
  },
];

/* 
  Projects Showcase
*/
export const projectsData: Project[] = [
  {
    id: 'omnipilot',
    title: 'OmniPilot Studio OS',
    tagline: 'All-in-One AI Content Generation & SaaS Growth Operating System',
    category: 'Full-Stack AI SaaS • Python 3 & Django 6.0 Channels',
    description:
      'A full-stack SaaS operating system that unifies AI-powered multi-channel content generation, live pipeline tracking, real-time revenue analytics via WebSockets, and seamless Stripe payments into an uncluttered, modern dashboard command center.',
    technologies: [
      'Python 3',
      'Django 6.0',
      'Django Channels (WebSockets)',
      'ASGI (Daphne)',
      'WSGI (Gunicorn)',
      'Cloud PostgreSQL',
      'Stripe Payments & Webhooks',
      'Resend HTTPS REST API',
      'Vanilla JavaScript (ES6+)',
      'Render Cloud PaaS',
      'WhiteNoise',
    ],
    details: [
      'AI Content Studio & Multi-Format Generator: Generates viral LinkedIn carousel slides, Twitter/X threads, and conversion-focused copy with real-time token counters, reading-time estimators, and tone analyzers.',
      'Live WebSocket Telemetry Dashboard: Real-time metrics streaming dynamic Monthly Recurring Revenue (MRR), total invoiced sums, and active lead volume without page refreshes.',
      'Client Pipeline & Invoicing CRM: Full CRUD management for inbound client leads, deal stages, and professional invoice generation with instant Stripe checkout.',
      'Multi-Tier Stripe Subscription Billing: Multi-tiered monetization with automated credit allocation upon checkout completion and dynamic webhook handlers.',
      'Cloud Network Firewall Resilience: Engineered a dual-path dispatch engine bypassing cloud hosting raw SMTP port restrictions (587/465) via Port 443 HTTPS REST APIs (Resend) with graceful fallback.',
      'Sub-Second Asynchronous Dispatching: Decoupled transactional email I/O into native non-blocking daemon background threads, reducing sign-up latency by 98% (from 70+ seconds down to 0.96s).',
      'Zero-Downtime Deployment Orchestration: Custom WSGI/ASGI entrypoints (app.py & gunicorn.conf.py) that automatically detect dynamic host ports, run schema migrations, collect compressed static assets via WhiteNoise, and auto-seed the demo workspace on startup.',
    ],
    liveUrl: 'https://omnipilot-nmko.onrender.com/',
    githubUrl: 'https://github.com/ashishsharma1927-pixel/OmniPilot',
    badge: 'Flagship AI SaaS',
    image: '/Omnipilot.png',
    demoCredentials: {
      email: 'test@yopmail.com',
      password: 'Test@123',
    },
  },
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
    image: '/hrms-dashboard.png',
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
