import { faGraduationCap, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import { Section } from "./Section";
import styles from "./styles.module.scss";
import { Education } from "./Education";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CV_DATA } from "../../helpers/cv-data";
import { Experience } from "./Experience";
import { BgSection } from "./BgSection";
import { Skill } from "./Skill";
import { Certificate } from "./Certificate";
import { ShadowSection } from "./ShadowSection";

export const Resume = () => {
    return ( 
        <div className={styles.wrapper}>
            <HeadingDetailed text="Resume"/>
            <Section icon={faGraduationCap as IconProp} title="Education" array={CV_DATA.education} ItemComponent={Education} />
            <Section icon={faLaptop as IconProp} title="Experience" array={CV_DATA.experience} ItemComponent={Experience} />
            <BgSection title="My Skills" array={CV_DATA.skills} ItemComponent={Skill} />
            <ShadowSection title="My Certificates" array={CV_DATA.certificates} ItemComponent={Certificate} />
        </div> 
    );
}
    