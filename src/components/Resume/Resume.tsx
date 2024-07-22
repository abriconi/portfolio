import { faGraduationCap, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import { Section } from "./Section";
import styles from "./styles.module.scss";
import { EducationItem } from "./EducationItem";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CV_DATA } from "../../helpers/cv-data";
import { ExperienceItem } from "./ExperienceItem";
import { Skills } from "./Skills";

export const Resume = () => {
    return ( 
        <div className={styles.wrapper}>
            <HeadingDetailed text="Resume"/>
            <Section icon={faGraduationCap as IconProp} title="Education" array={CV_DATA.education} ItemComponent={EducationItem} />
            <Section icon={faLaptop as IconProp} title="Experience" array={CV_DATA.experience} ItemComponent={ExperienceItem} />
            <Skills />
        </div> )
    ;
}
    