import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles.module.scss";
import { ShadowCard } from "../../shared-components/ShadowCard/ShadowCard";
import { Icon } from "../../shared-components/Icon/Icon";

interface Props {
    icon: IconDefinition,
    label: string,
    contact: string,
}
export const ContactItem: React.FC<Props> = ({ icon, label, contact }) => {
    return (
        <ShadowCard>
            <div className={styles.contactCard}>
                <Icon icon={icon} />
                <div className={styles.contacts}>
                    <p className={styles.label}>{label}</p>
                    <p className={styles.info}>{contact}</p>
                </div>
            </div>
        </ShadowCard>
    )
}