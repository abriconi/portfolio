import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InfoCard.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
    icon: IconProp;
    label: string;
    text: string;
}

export const InfoCard: React.FC<Props> = ({icon, label, text}) => {
    return (
        <div className={styles.cardContacts}>
            <div className={styles.wrapperContactIcon}>
                <FontAwesomeIcon icon={icon} size="xl" />
            </div>
            <div className={styles.wrapperContactItem}>
                <p className={styles.label}>{label}</p>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}