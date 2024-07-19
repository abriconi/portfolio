import { Education } from "../../helpers/cv-data"
import { VerticalDivider } from "../shared-components/VerticalDivider/VerticalDivider";
import styles from "./styles.module.scss";

interface Props {
    item: Education
}
export const EducationItem: React.FC<Props> = ({ item }) => {
    return(
        <VerticalDivider>
            <li className={styles.itemWrapper}>
                <h5 className={styles.itemHeading}>{item.school}</h5>
                <p className={styles.itemDate}>{item.date}</p>
                <p className={styles.itemBrief}>{item.brief}</p>
            </li>
        </VerticalDivider>
    )
}