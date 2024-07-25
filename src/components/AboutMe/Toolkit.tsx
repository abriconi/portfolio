import { CV_DATA } from "../../helpers/cv-data";
import styles from "./styles.module.scss";
import { Icon } from "../shared-components/Icon/Icon";


export const Toolkit  = () => {
    return (
        <div className={styles.toolkit}>
            <h4 className={styles.heading}>My Toolkit</h4>
            <div className={styles.toolkitWrapper}>
                {CV_DATA.technologies.map((item, index) =>                 
                    <div className={styles.toolkitCard} key={index}>
                        <Icon icon={item.logo} />
                        <p className={styles.toolBrief}>{item.tool}</p>
                    </div>
                )}
            </div>
        </div>
    )
}