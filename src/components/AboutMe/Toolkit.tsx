import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CV_DATA } from "../../helpers/cv-data";
import styles from "./styles.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export const Toolkit  = () => {
    return (
        <div className={styles.toolkit}>
            <h4>My Toolkit</h4>
            <div className={styles.toolkitWrapper}>
                {CV_DATA.technologies.map((item, index) =>                 
                    <div className={styles.toolkitCard} key={index}>
                        <FontAwesomeIcon icon={item.logo as IconProp} />
                        <p>{item.tool}</p>
                    </div>
                )}
            </div>
        </div>
    )
}