import type {
  AboutData,
  ContactData,
  CoursesData,
  EducationData,
  ExperienceData,
  PersonalData,
  PortfolioState,
  ProjectsData,
  SettingsData,
  SkillsData,
  SocialsData
} from './types';
// src/store/portfolio.ts
import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: (): PortfolioState => ({
    about: {
      title: '',
      subtitle: '',
      content: ''
    },
    contact: {
      title: '',
      subtitle: '',
      items: []
    },
    courses: {
      title: '',
      subtitle: '',
      items: []
    },
    education: {
      title: '',
      subtitle: '',
      items: []
    },
    experience: {
      title: '',
      subtitle: '',
      items: []
    },
    personal: {
      lastName: '',
      title: '',
      avatar: '',
      firstName: ''
    },
    projects: {
      title: '',
      subtitle: '',
      items: []
    },
    settings: {
      primaryColor: '',
      showContact: false,
      showExperience: false,
      keywords: '',
      showEducation: false,
      showAbout: false,
      showTestimonials: false,
      siteTitle: '',
      siteDescription: '',
      showCertifications: false,
      showProjects: false,
      showServices: false,
      showSkills: false
    },
    skills: {
      title: '',
      subtitle: '',
      techs: []
    },
    socials: {
      title: '',
      subtitle: '',
      items: []
    }
  }),

  actions: {
    setAbout(data: AboutData) {
      this.about = data;
    },
    setContact(data: ContactData) {
      this.contact = data;
    },
    setCourses(data: CoursesData) {
      this.courses = data;
    },
    setEducation(data: EducationData) {
      this.education = data;
    },
    setExperience(data: ExperienceData) {
      this.experience = data;
    },
    setPersonal(data: PersonalData) {
      this.personal = data;
    },
    setProjects(data: ProjectsData) {
      this.projects = data;
    },
    setSettings(data: SettingsData) {
      this.settings = data;
    },
    setSkills(data: SkillsData) {
      this.skills = data;
    },
    setSocials(data: SocialsData) {
      this.socials = data;
    }
  }
});
