import { faHtml5, faCss3, faJsSquare, faReact, IconDefinition, faCss3Alt, faGoogle, faSass } from "@fortawesome/free-brands-svg-icons";
import { faBug, faClipboardList, faClock, faCode, faCodeBranch, faGlobe, faLaptopCode, faMobileAlt, faObjectGroup, faPencilRuler, faPlug, faRoute, faSyncAlt, faTachometerAlt, faUniversalAccess, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { ExternalRoutes } from "../routes";

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
  skills: string,
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

//TODO
const description = `Hello! I am a passionate and dedicated front-end developer with a keen eye for design and a strong focus on creating seamless user experiences.
With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive web applications that are both aesthetically pleasing and highly functional. My expertise extends to modern front-end frameworks and libraries, including React, which I use to develop dynamic and efficient applications. I thrive on turning complex problems into simple, elegant solutions and am always eager to learn and adopt new technologies to enhance my skill set. I have a deep appreciation for clean, maintainable code and prioritize performance and accessibility in every project I undertake. Collaboration and communication are at the heart of my work ethic, ensuring that I can effectively translate client requirements into outstanding digital experiences. Whether working on a solo project or as part of a team, I bring creativity, technical proficiency, and a passion for innovation to every endeavor.
I am excited to continue my journey in front-end development, constantly striving to push the boundaries of what is possible on the web.`;

//TODO
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
    item: "UI/UX Design",
    brief: "Designing intuitive and engaging user interfaces for enhanced user experience.",
    logo: faPencilRuler,
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
    item: "Testing and Debugging",
    brief: "Implementing thorough testing and debugging to ensure quality and reliability.",
    logo: faBug,
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
//TODO
const education: Education[] = [
  {
    institution: "Kryvyi Rih Technical University",
    date: "2005-2010",
    brief: "Business Administration and Management, Specialist, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, saepe sint iure praesentium voluptate nemo natus ipsum porro cumque optio dolores architecto vitae nostrum ducimus? Nulla in enim quo fuga.",
    degree: "Specialist",
  },
  {
    institution: "Kryvyi Rih Technical University",
    date: "2005-2010",
    brief: "Business Administration and Management, Specialist, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, saepe sint iure praesentium voluptate nemo natus ipsum porro cumque optio dolores architecto vitae nostrum ducimus? Nulla in enim quo fuga.",
    degree: "Specialist",
  }
]
;

const experience: Experience [] =[
  {
    institution: "Lorem ipsum",
    date: "lorem iosum",
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    position: "Front-End Developer",
  },
  {
    institution: "Lorem ipsum",
    date: "lorem iosum",
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    position: "Front-End Developer",
  },
  {
    institution: "Lorem ipsum",
    date: "lorem iosum",
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    position: "Front-End Developer",
  },
];

const skills: Skill[] = [
  { skill: "JavaScript", points: 90 },
  { skill: "TypeScript", points: 80 },
  { skill: "React", points: 85 },
  { skill: "Redux", points: 55 },
  { skill: "HTML", points: 95 },
  { skill: "CSS", points: 90 },
  { skill: "Sass", points: 80 },
  { skill: "Git", points: 60 },
  { skill: "Webpack", points: 65 },
  { skill: "Node.js", points: 30 },
];

const certificates: Certificate[] = [
  { 
    name: "ICAgile Certified Professional", 
    organization: "ICAgile", 
    date: "Feb 2019", 
    skills: "Scrum, Agile Methodologies, Agile Web Development", 
    url: "/img/Certificate.webp" 
  },
  { 
    name: "Front-end and JavaScript Program", 
    organization: "EPAM Systems", 
    date: "Sep 2022", 
    skills:"HTML, SCSS, Cascading Style Sheets (CSS), JavaScript",  
    url: "/img/certifacate-vertical.jpg" 
  },
  { 
    name: "TypeScript-In-Depth", 
    organization: "",
    date: "",
    skills: "",
    url: "/img/Certificate.webp" 
  },
  { 
    name: "Upper-intermediate English level", 
    organization: "Green Forest",
    date: "Feb 2019", 
    skills: "", 
    url: "/img/certifacate-vertical.jpg" 
  },
]
//TODO
const apps: App[] = [
  {
    name: "Courses",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.Courses,
    tools: [Tools.react, Tools.redux],
  },
  {
    name: "Budget Planner",
    imgUrl: "img/mockup-devices.jpg",
    url: ExternalRoutes.Budget,
    tools: [Tools.react],
  },
  {
    name: "CV Builder",
    imgUrl: "img/mockup-laptop.jpg",
    url: ExternalRoutes.CV_Builder,
    tools: [Tools.react],
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
]

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
