export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  badges: string[];
  githubUrl: string;
  demoUrl?: string;
  highlight?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  badge: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  emoji: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  file: string;
  institution: "alura" | "dio";
}
