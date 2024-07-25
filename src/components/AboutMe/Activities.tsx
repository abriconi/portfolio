import { CV_DATA } from "../../helpers/cv-data"
import styles from "./styles.module.scss";
import { Icon } from "../shared-components/Icon/Icon";

export const Activities = () => {
    return (
        <div className={styles.activities}>
            <h4 className={styles.heading}>What I'm Doing </h4>
            <div className={styles.activitiesWrapper}>
                {CV_DATA.activities.map((item, index) => 
                    <div className={styles.activitiesCard} key={index}>
                        <Icon icon={item.logo} />
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