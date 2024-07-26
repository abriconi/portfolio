import { faHtml5, faCss3, faJsSquare, faReact, IconDefinition, faCss3Alt, faGoogle, faSass } from "@fortawesome/free-brands-svg-icons";
import { faBug, faClipboardList, faClock, faCode, faCodeBranch, faGlobe, faLaptopCode, faMobileAlt, faObjectGroup, faPencilRuler, faPlug, faRoute, faSyncAlt, faTachometerAlt, faUniversalAccess, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { ExternalRoutes } from "../routes";
import { Skill } from "../components/Resume/components/Skill";

enum Tools {
  html = "HTML5",
  css = "CSS3",
  saas = "SCSS",
  js = "JavaScript",
  ts = "TypeScript",
  tailwind = "Tailwind CSS",
  react = "React",
  router = "React-router",
  redux = " Redux",
  scss = "SCSS",
  moment = "Moment.js",
  material = "Material UI",
  iFrame = "iFrame",
  react_hook_form = "React-hook-form",
  scrum = "Scrum", 
  agile = "Agile Methodologies",
}

interface Toolkit {
  tool: string;
  logo: IconDefinition;
}

interface Activity {
  item: string,
  brief: string,
  logo: IconDefinition,
}

interface Entry {
  institution: string;
  date: string;
  brief: string;
}

export interface Education extends Entry {
  degree: string,
}

export interface Experience extends Entry {
  position: string,
}

export interface Skill {
  skill: string,
  points: number,
}

export interface Certificate {
  name: string,
  organization: string,
  date: string,
  skills: string[],
  url: string,
}

export interface App {
  name: string,
  imgUrl: string,
  url: string,
  tools: string[],
}
  
interface Cv_data {
  name: string,
  title: string,
  location: string,
  email: string,
  phone: string,
  aboutMe: string,
  technologies: Toolkit[],
  activities: Activity[],
  education: Education[],
  experience: Experience[],
  skills: Skill[],
  certificates: Certificate[],
  apps: App[],
}

const description = `Hello! I am a passionate front-end developer with a solid foundation in HTML, CSS, JavaScript and React, specializing in building responsive and interactive web applications. 
I'm constantly self-studying and learning for 4-5 hours daily to enhance my skills. 
With strong communication skills, I effectively collaborate within teams and take responsibility with confidence. I am excited to continue pushing the boundaries of web development and delivering outstanding digital experiences.`;

const activities: Activity[] = [
  {
    item: "Responsive Apps",
    brief: "Building applications that look and function flawlessly on any device.",
    logo: faMobileAlt,
  },
  {
    item: "Web Development",
    brief: "Creating dynamic and user-friendly websites using modern technologies.",
    logo: faLaptopCode,
  },
  {
    item: "Performance Optimization",
    brief: "Enhancing web performance for faster load times and better user engagement.",
    logo: faTachometerAlt,
  },
  {
    item: "Accessibility",
    brief: "Ensuring web content is accessible to all users, including those with disabilities.",
    logo: faUniversalAccess,
  },
  {
    item: "Version Control",
    brief: "Using Git for efficient and collaborative version control in development projects.",
    logo: faCodeBranch,
  },
  {
    item: "API Integration",
    brief: "Integrating third-party APIs to extend the functionality of web applications.",
    logo: faPlug,
  },
  {
    item: "Code Refactoring",
    brief: "Improving code structure and readability for maintainability and scalability.",
    logo: faSyncAlt,
  },
  {
    item: "Cross-Browser Compatibility",
    brief: "Ensuring consistent functionality and appearance across different web browsers.",
    logo: faGlobe,
  }
];

const toolkit: Toolkit[] = [
  { tool: Tools.html, logo: faHtml5 },
  { tool: Tools.css, logo: faCss3 },
  { tool: Tools.js, logo: faJsSquare },
  { tool: Tools.scss, logo: faSass },
  { tool: Tools.react, logo: faReact },
  { tool: Tools.ts, logo: faCode },
  { tool: Tools.tailwind, logo: faCss3Alt },
  { tool: Tools.material, logo: faGoogle },
  { tool: Tools.moment, logo: faClock },
  { tool: Tools.iFrame, logo: faObjectGroup },
  { tool: Tools.react_hook_form, logo: faClipboardList },
  { tool: Tools.router, logo: faRoute },
];

const education: Education[] = [
  {
    institution: "Kryvyi Rih Technical University",
    date: "2005-2010",
    brief: "I hold a degree in Program Management of Foreign Economic Activity from Kryvyi Rih Technical University, providing me with a strong foundation in international business and trade.",
    degree: "Specialist",
  },
  {
    institution: "ICP-Certification",
    date: "2019",
    brief: "Passed Agile courses and obtained certification, studying project management methodologies, familiarizing with Scrum team roles, learning to correctly assess task difficulty and understanding Scrum ceremonies and their purposes.",
    degree: "Agile Certification"
  },
  {
    institution: "Epam Ukraine",
    date: "2022-2023",
    brief: "Completed comprehensive courses Front-End and JavaScript Program Intermediate Level covering core front-end technologies including JavaScript (JS), HTML, CSS, SCSS, React, and Redux. Gained practical experience in building responsive and interactive web applications, enhancing skills in modern web development practices and tools. Built the project 'Courses'.",
    degree: "",
  },
  {
    institution: "Epam Ukraine",
    date: "2023",
    brief: "Completed an in-depth TypeScript course, gaining comprehensive knowledge of TypeScript's advanced features, type system, and integration with modern JavaScript frameworks. Enhanced ability to develop robust and maintainable codebases.",
    degree: ""
  }

];

const experience: Experience [] =[
  {
    institution: "KONKORD",
    date: "2011 - 2015",
    brief: "Built long-term relationships with key clients, searched for new clients, presented and sold products, managed client expectations, and resolved complaints.",
    position: "Sales Manager",
  },
  {
    institution: "Manufactura.ua",
    date: "2015 - 2015",
    brief: "Searched for new clients, presented and sold products, managed client expectations, and resolved complaints.",
    position: "Sales Manager",
  },
  {
    institution: "Manufactura.ua",
    date: "2015 - 2019",
    brief:  "Led a sales team from 10 to 30 members, built a sales retail department including managers of different levels and engineers, managed 14 stores, and opened 10 new stores. Taught and improved team's knowledge through mentoring and performance evaluations, conducted daily meetings for product updates, worked with key clients through meetings and negotiations, adapted a web development team for e-commerce support, created motivation systems, set and implemented sales plans, developed ad strategies, implemented a CRM system for the sales department, resolved complaints, and managed team and customer expectations.",
    position: "Head Of Sales Department",
  },
  {
    institution: "IT Fabryka",
    date: "2019 - 2020",
    brief: "Increased the company's net profit by attracting new clients and recontacting old customers, recruiting new IT specialists to boost productivity, initiating and implementing an IT-specialist training program, analyzing and regulating company expenses, and calculating compensation and bonuses.",
    position: "Chief Financial Officer",
  },
  
];

const skills: Skill[] = [
  { skill: Tools.html, points: 95},
  { skill: Tools.js, points: 90 },
  { skill: Tools.ts, points: 90 },
  { skill: Tools.react, points: 80 },
  { skill: Tools.css, points: 90 },
  { skill: Tools.redux, points: 55 },
  { skill: "Teamwork", points: 95 },
  { skill: "Leadership", points: 95 },
  { skill: "Problem Solving", points: 90 },
  { skill: "Organization Skills", points: 95 },
  { skill: "Communication", points: 95 },
  { skill: "Public speaking", points: 90 },
  { skill: Tools.agile, points: 70 },
  { skill: Tools.scrum, points: 70 },


];

const certificates: Certificate[] = [
  { 
    name: "ICAgile Certified Professional", 
    organization: "ICAgile", 
    date: "Feb 2019", 
    skills: [Tools.scrum, Tools.agile],
    url: "/img/certificate.webp" 
  },
  { 
    name: "Front-end and JavaScript Program", 
    organization: "EPAM Ukraine", 
    date: "Sep 2022", 
    skills: [Tools.html, Tools.scss, Tools.css, Tools.js, Tools.react, Tools.redux, Tools.router],  
    url: "/img/certificate-vertical.jpg" 
  },
  { 
    name: "TypeScript-In-Depth", 
    organization: "EPAM Ukraine", 
    date: "Sep 2022",
    skills: [Tools.ts],
    url: "/img/certificate.webp" 
  },
  { 
    name: "Upper-intermediate English level", 
    organization: "Green Forest",
    date: "Feb 2019", 
    skills: ["Upper-intermediate English"], 
    url: "/img/certificate-vertical.jpg" 
  },
];

const apps: App[] = [
  {
    name: "Courses",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.Courses,
    tools: [Tools.react, Tools.redux, Tools.scss, Tools.ts, Tools.router],
  },
  {
    name: "Budget Planner",
    imgUrl: "img/mockup-devices.jpg",
    url: ExternalRoutes.Budget,
    tools: [Tools.react, Tools.router, Tools.material, Tools.moment, Tools.react_hook_form],
  },
  {
    name: "CV Builder",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.CV_Builder,
    tools: [Tools.react, Tools.router, Tools.react_hook_form, Tools.iFrame, Tools.tailwind],
  },
  {
    name: "TODO List",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.TODO_List,
    tools: [Tools.react],
  },
  {
    name: "Calculator",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.Calculator,
    tools: [Tools.react],
  }
];

export const CV_DATA: Cv_data = {
  name: "Alona Heptinh",
  title: "Front-end developer",
  location: "Lviv, Ukraine",
  email: "alona-heptinh@gmail.com",
  phone: "+38 (098) 256-34-09",
  aboutMe: description,
  technologies: toolkit,
  activities: activities,
  education: education,
  experience: experience,
  skills: skills,
  certificates: certificates,
  apps: apps,
};
