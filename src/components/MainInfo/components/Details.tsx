import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../styles.module.scss";

export const Details = () => {
  return (
    <div className={styles.containerDetails}>
      <p className={styles.name}>{CV_DATA.name}</p>
      <p className={styles.title}>{CV_DATA.title}</p>
    </div>
  );
};
