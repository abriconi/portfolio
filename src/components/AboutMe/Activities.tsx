import { CV_DATA } from "../../helpers/cv-data"
import styles from "./styles.module.scss";
import { Icon } from "../shared-components/Icon/Icon";
import { ShadowCard } from "../shared-components/ShadowCard/ShadowCard";

export const Activities = () => {
    return (
        <div className={styles.activities}>
            <h4 className={styles.heading}>What I'm Doing </h4>
            <div className={styles.activitiesWrapper}>
                {CV_DATA.activities.map((item, index) =>
                    <ShadowCard key={index}>
                        <div className={styles.activitiesCard} >
                            <Icon icon={item.logo} />
                            <div className={styles.description}>
                                <h5 className={styles.itemHeading}>{item.item}</h5>
                                <p className={styles.itemBrief}>{item.brief}</p>
                            </div>
                        </div>
                    </ShadowCard>
                )}
            </div>
        </div>
    )
}