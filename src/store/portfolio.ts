import type {
  AboutData,
  ContactData,
  CoursesData,
  EducationData,
  ExperienceData,
  PersonalData,
  ProjectsData,
  SettingsData,
  SkillsData,
  SocialsData
} from '@/types';

import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', () => {
  const about = ref<AboutData>({
    title: '',
    subtitle: '',
    content: ''
  });

  const contact = ref<ContactData>({
    title: '',
    subtitle: '',
    items: []
  });

  const courses = ref<CoursesData>({
    title: '',
    subtitle: '',
    items: []
  });

  const education = ref<EducationData>({
    title: '',
    subtitle: '',
    items: []
  });

  const experience = ref<ExperienceData>({
    title: '',
    subtitle: '',
    items: []
  });

  const personal = ref<PersonalData>({
    lastName: '',
    title: '',
    avatar: '',
    firstName: ''
  });

  const projects = ref<ProjectsData>({
    title: '',
    subtitle: '',
    items: []
  });

  const settings = ref<SettingsData>({
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
  });

  const skills = ref<SkillsData>({
    title: '',
    subtitle: '',
    techs: []
  });

  const socials = ref<SocialsData>({
    title: '',
    subtitle: '',
    items: []
  });

  const setAbout = (data: AboutData) => {
    about.value = data;
  };

  const setContact = (data: ContactData) => {
    contact.value = data;
  };

  const setCourses = (data: CoursesData) => {
    courses.value = data;
  };

  const setEducation = (data: EducationData) => {
    education.value = data;
  };

  const setExperience = (data: ExperienceData) => {
    experience.value = data;
  };

  const setPersonal = (data: PersonalData) => {
    personal.value = data;
  };

  const setProjects = (data: ProjectsData) => {
    projects.value = data;
  };

  const setSettings = (data: SettingsData) => {
    settings.value = data;
  };

  const setSkills = (data: SkillsData) => {
    skills.value = data;
  };

  const setSocials = (data: SocialsData) => {
    socials.value = data;
  };

  return {
    // State
    about,
    contact,
    courses,
    education,
    experience,
    personal,
    projects,
    settings,
    skills,
    socials,

    // Actions
    setAbout,
    setContact,
    setCourses,
    setEducation,
    setExperience,
    setPersonal,
    setProjects,
    setSettings,
    setSkills,
    setSocials
  };
});
