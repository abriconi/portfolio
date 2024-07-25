import styles from "./InfoCard.module.scss";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../Icon/Icon";

interface Props {
    icon: IconDefinition;
    label: string;
    text: string;
}

export const InfoCard: React.FC<Props> = ({icon, label, text}) => {
    return (
        <div className={styles.cardContacts}>
            <div className={styles.wrapperContactIcon}>
                <Icon icon={icon} />
            </div>
            <div className={styles.wrapperContactItem}>
                <p className={styles.label}>{label}</p>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}