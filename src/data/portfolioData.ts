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
  heroTechLabels: ['Python', 'Django REST Framework', 'REST APIs'],
  aboutHighlights: [
    { label: 'Location', value: 'Bilaspur, Himachal Pradesh, India' },
    { label: 'Education', value: 'B.Sc. Mathematics' },
    { label: 'Focus', value: 'Backend Development' },
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
      { name: 'Render' },
      { name: 'Vercel' },
      { name: 'Antigravity IDE' },
    ],
  },
];

/* 
  Easily add new projects here in the future! 
  Just add a new object to this array with your project details.
*/
export const projectsData: Project[] = [
  {
    id: 'hrms',
    title: 'HRMS — Human Resource Management System',
    tagline: 'Employee & Department Management Application',
    description:
      'A human resource management application focused on employee and department management, backed by Django REST Framework APIs.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL/MySQL',
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
