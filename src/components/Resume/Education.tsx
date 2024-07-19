import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { CV_DATA } from "../../helpers/cv-data";
import { EducationItem } from "./EducationItem";

export const Education = () => {
    const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim();
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.headingWrapper}>
                <FontAwesomeIcon icon={faGraduationCap} size="2x" style={{color: iconColor}}/>
                <h4 className={styles.heading}>Education</h4>
            </div>
            <ul className={styles.listWrapper}>
                {CV_DATA.education.map((item, index) => 
                    <EducationItem item={item} key={index} />
                )}
            </ul>
        </div>
    )
}