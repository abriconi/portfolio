import styles from "./styles.module.scss";
import { CV_DATA } from "../../helpers/cv-data";
import { SkillItem } from "./SkillItem";
export const Skills = () => {
    return (        
        <div className={styles.section}>
            <h3 className={styles.heading}>My Skills</h3>
            <ul className={styles.skillsWrapper}>
                {CV_DATA.skills.map((skill, index) => 
                    <SkillItem key={index} item={skill}/>
                )}
            </ul>
        </div>
    );
}