import { Education } from "../../helpers/cv-data"
import styles from "./styles.module.scss";

interface Props {
    item: Education
}
export const EducationItem: React.FC<Props> = ({ item }) => {
    return (
        <li className={styles.itemWrapper}>
            <h5 className={styles.itemHeading}>{`${item.institution}, ${item.degree}`}</h5>
            <p className={styles.itemDate}>{item.date}</p>
            <p className={styles.itemBrief}>{item.brief}</p>
        </li>
    )
}