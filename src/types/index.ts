export interface Project {
  id: string;
  title: string;
  tagline: string;
  category?: string;
  description: string;
  technologies: string[];
  details: string[];
  liveUrl?: string;
  backendUrl?: string;
  githubUrl?: string;
  badge?: string;
  image?: string;
  demoCredentials?: {
    email: string;
    password?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  location?: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  durationOrYear: string;
  scoreOrDetail?: string;
}
