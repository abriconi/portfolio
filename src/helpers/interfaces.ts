import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Toolkit {
    tool: string;
    logo: IconDefinition;
}
  
export interface Activity {
    item: string;
    brief: string;
    logo: IconDefinition;
}
  
interface Entry {
    institution: string;
    date: string;
    brief: string;
}
  
export interface Education extends Entry {
    degree: string;
}
  
export interface Experience extends Entry {
    position: string;
}
  
export interface Skill {
    skill: string;
    points: number;
}
  
export interface Certificate {
    name: string;
    organization: string;
    date: string;
    skills: string[];
    url: string;
}
  
export interface App {
    name: string;
    imgUrl: string;
    url: string;
    tools: string[];
}
  
export interface Cv_data {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    aboutMe: string;
    technologies: Toolkit[];
    activities: Activity[];
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    certificates: Certificate[];
    apps: App[];
}
  