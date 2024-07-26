import { faGraduationCap, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import { Section } from "./components/Section";
import styles from "./styles.module.scss";
import { Education } from "./components/Education";
import { CV_DATA } from "../../helpers/cv-data";
import { Experience } from "./components/Experience";
import { BgSection } from "./components/BgSection";
import { Skill } from "./components/Skill";
import { Certificate } from "./components/Certificate";
import { ShadowSection } from "./components/ShadowSection";

export const Resume = () => {
    return ( 
        <div className={styles.wrapper}>
            <HeadingDetailed text="Resume"/>
            <Section icon={faGraduationCap} title="Education" array={CV_DATA.education} ItemComponent={Education} />
            <Section icon={faLaptop} title="Experience" array={CV_DATA.experience} ItemComponent={Experience} />
            <BgSection title="My Skills" array={CV_DATA.skills} ItemComponent={Skill} />
            <ShadowSection title="My Certificates" array={CV_DATA.certificates} ItemComponent={Certificate} />
        </div> 
    );
}
    