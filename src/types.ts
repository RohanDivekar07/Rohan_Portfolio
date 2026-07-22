export interface Skill {
  name: string;
  category: 'programming' | 'backend' | 'frontend' | 'databases' | 'tools' | 'concepts';
  isPrimary: boolean;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  mentor: string;
  teamSize: number;
  keySkills: string[];
  technologies: string[];
  projectLink?: string;
  description: string;
  details: string[];
  category: 'backend' | 'fullstack' | 'core-programming' | 'ai-cv';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  keySkills: string[];
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  details?: string;
}

export interface ResearchPaper {
  title: string;
  conference: string;
  date: string;
  description: string;
  keySkills: string[];
}

export interface Achievement {
  title: string;
  category: 'copyright' | 'hackathon' | 'other';
  description: string;
}

export interface Certification {
  title: string;
  provider: string;
  keySkills: string[];
  description: string;
}
