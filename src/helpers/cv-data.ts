import { faHtml5, faCss3, faJsSquare, faReact, IconDefinition, faSass } from "@fortawesome/free-brands-svg-icons";
import { faBug, faCode, faCodeBranch, faCogs, faGlobe, faLaptopCode, faMobileAlt, faPencilRuler, faPlug, faSyncAlt, faTachometerAlt, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

interface Toolkit {
  tool: string;
  logo: IconDefinition;
}

interface Activity {
  item: string,
  brief: string,
  logo: IconDefinition,
}

export interface Education {
  school: string,
  date: string,
  brief: string;
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
//TODO add tailwind, MaterialUI, moment
const toolkit: Toolkit[] = [
  { tool: "HTML5", logo: faHtml5 },
  { tool: "CSS3", logo: faCss3 },
  { tool: "JavaScript", logo: faJsSquare },
  { tool: "React", logo: faReact },
  { tool: "TypeScript", logo: faCode },
  { tool: "Redux", logo: faCogs },
];
//TODO
const education: Education[] = [
  {
    school: "Kryvyi Rih Technical University",
    date: "2005-2010",
    brief: "Business Administration and Management, Specialist, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, saepe sint iure praesentium voluptate nemo natus ipsum porro cumque optio dolores architecto vitae nostrum ducimus? Nulla in enim quo fuga."
  },
  {
    school: "Kryvyi Rih Technical University",
    date: "2005-2010",
    brief: "Business Administration and Management, Specialist, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, saepe sint iure praesentium voluptate nemo natus ipsum porro cumque optio dolores architecto vitae nostrum ducimus? Nulla in enim quo fuga."
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
};
