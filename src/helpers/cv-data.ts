import { faHtml5, faCss3, faJsSquare, faReact, IconDefinition, faSass } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCogs } from "@fortawesome/free-solid-svg-icons";

interface Toolkit {
  tool: string;
  logo: IconDefinition;
}

//TODO
const description = `Hello! I am a passionate and dedicated front-end developer with a keen eye for design and a strong focus on creating seamless user experiences.
With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive web applications that are both aesthetically pleasing and highly functional. My expertise extends to modern front-end frameworks and libraries, including React, which I use to develop dynamic and efficient applications. I thrive on turning complex problems into simple, elegant solutions and am always eager to learn and adopt new technologies to enhance my skill set. I have a deep appreciation for clean, maintainable code and prioritize performance and accessibility in every project I undertake. Collaboration and communication are at the heart of my work ethic, ensuring that I can effectively translate client requirements into outstanding digital experiences. Whether working on a solo project or as part of a team, I bring creativity, technical proficiency, and a passion for innovation to every endeavor.
I am excited to continue my journey in front-end development, constantly striving to push the boundaries of what is possible on the web.`;

const toolkit: Toolkit[] = [
  { tool: "HTML5", logo: faHtml5 },
  { tool: "CSS3", logo: faCss3 },
  { tool: "JavaScript", logo: faJsSquare },
  { tool: "React", logo: faReact },
  { tool: "TypeScript", logo: faCode },
  { tool: "Redux", logo: faCogs },
];

export const CV_DATA = {
  name: "Alona Heptinh",
  title: "Front-end developer",
  location: "Lviv, Ukraine",
  email: "alona-heptinh@gmail.com",
  phone: "+38 (098) 256-34-09",
  aboutMe: description,
  technologies: toolkit,
};
