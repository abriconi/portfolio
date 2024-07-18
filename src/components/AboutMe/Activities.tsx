import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CV_DATA } from "../../helpers/cv-data"
import styles from "./styles.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Activities = () => {
    //TODO find all and rewrite to className
    const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim();
    return (
        <div className={styles.activities}>
            <h4 className={styles.heading}>What I'm Doing </h4>
            <div className={styles.activitiesWrapper}>
                {CV_DATA.activities.map((item) => 
                    <div className={styles.activitiesCard}>
                        <FontAwesomeIcon icon={item.logo as IconProp} size="2x" style={{ color: iconColor }}/>
                        <div className={styles.description}>
                            <h5 className={styles.itemHeading}>{item.item}</h5>
                            <p className={styles.itemBrief}>{item.brief}</p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}