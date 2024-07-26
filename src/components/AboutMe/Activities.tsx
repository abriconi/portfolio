import { CV_DATA } from "../../helpers/cv-data"
import styles from "./styles.module.scss";
import { Icon } from "../shared-components/Icon/Icon";
import { ShadowCard } from "../shared-components/ShadowCard/ShadowCard";

export const Activities = () => {
    return (
        <section className={styles.activitiesSection}>
            <h2 className={styles.heading}>What I'm Doing </h2>
            <div className={styles.activitiesWrapper}>
                {CV_DATA.activities.map((item, index) =>
                    <ShadowCard key={index}>
                        <div className={styles.activitiesCard} >
                            <Icon icon={item.logo} />
                            <div className={styles.description}>
                                <h3 className={styles.itemHeading}>{item.item}</h3>
                                <p className={styles.itemBrief}>{item.brief}</p>
                            </div>
                        </div>
                    </ShadowCard>
                )}
            </div>
        </section>
    )
}