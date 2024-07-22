import { Experience as ExperienceType } from "../../helpers/cv-data"
import styles from "./styles.module.scss";

interface Props {
    item: ExperienceType;
}
export const Experience: React.FC<Props> = ({ item }) => {
    return (
        <li className={styles.itemWrapper}>
            <h5 className={styles.itemHeading}>{`${item.institution}, ${item.position}`}</h5>
            <p className={styles.itemDate}>{item.date}</p>
            <p className={styles.itemBrief}>{item.brief}</p>
        </li>
    )
}