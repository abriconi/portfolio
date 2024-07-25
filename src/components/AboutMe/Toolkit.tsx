import { CV_DATA } from "../../helpers/cv-data";
import styles from "./styles.module.scss";
import { Icon } from "../shared-components/Icon/Icon";
import { ShadowCard } from "../shared-components/ShadowCard/ShadowCard";


export const Toolkit  = () => {
    return (
        <div className={styles.toolkit}>
            <h4 className={styles.heading}>My Toolkit</h4>
            <div className={styles.toolkitWrapper}>
                {CV_DATA.technologies.map((item, index) =>      
                <ShadowCard  key={index}>
                    <div className={styles.toolkitCard}>
                        <Icon icon={item.logo} />
                        <p className={styles.toolBrief}>{item.tool}</p>
                    </div>
                    </ShadowCard>        
                )}
            </div>
        </div>
    )
}