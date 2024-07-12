import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../MainInfo.module.scss";

export const Details = () => {
  return (
    <div className={styles.wrapperDetails}>
      <p className={styles.name}>{CV_DATA.name}</p>
      <p className={styles.title}>{CV_DATA.title}</p>
    </div>
  );
};
