import { Education as EducationType } from "../../../helpers/cv-data"
import styles from "../styles.module.scss";

interface Props {
    item: EducationType
}
export const Education: React.FC<Props> = ({ item }) => {
    return (
        <li className={styles.itemWrapper}>
            <h3 className={styles.itemHeading}>{`${item.institution}, ${item.degree}`}</h3>
            <p className={styles.itemDate}>{item.date}</p>
            <p className={styles.itemBrief}>{item.brief}</p>
        </li>
    )
}