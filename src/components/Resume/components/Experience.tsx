import { Experience as ExperienceType } from "../../../helpers/interfaces";
import styles from "../styles.module.scss";

interface Props {
  item: ExperienceType;
}
export const Experience: React.FC<Props> = ({ item }) => {
  return (
    <li className={styles.itemWrapper}>
      <h3 className={styles.itemHeading}>{`${item.institution}, ${item.position}`}</h3>
      <p className={styles.itemDate}>{item.date}</p>
      <p className={styles.itemBrief}>{item.brief}</p>
    </li>
  );
};
