export interface ContactData {
  city: string;
  phone: string;
  page: string;
  email: string;
}

export interface PersonalData {
  lastName: string;
  title: string;
  avatar: string;
  firstName: string;
}

export interface TechSkill {
  name: string;
  level: number;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  techs: TechSkill[];
}

export interface SettingsData {
  primaryColor: string;
  showContact: boolean;
  showExperience: boolean;
  keywords: string;
  showEducation: boolean;
  showAbout: boolean;
  showTestimonials: boolean;
  siteTitle: string;
  siteDescription: string;
  showCertifications: boolean;
  showProjects: boolean;
  showServices: boolean;
  showSkills: boolean;
}

export interface SocialsData {
  linkedin: string;
  github: string;
  instagram: string;
}

export interface EducationItem {
  status: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  location: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export interface ExperienceItem {
  current: boolean;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface AboutData {
  title: string;
  subtitle: string;
  content: string;
}

export interface CourseItem {
  name: string;
  image: string;
}

export interface CoursesData {
  title: string;
  subtitle: string;
  items: CourseItem[];
}

export interface ProjectItem {
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  techs: string[];
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  items: ProjectItem[];
}

export interface PortfolioState {
  about: AboutData;
  contact: ContactData;
  courses: CoursesData;
  education: EducationData;
  experience: ExperienceData;
  personal: PersonalData;
  projects: ProjectsData;
  settings: SettingsData;
  skills: SkillsData;
  socials: SocialsData;
}