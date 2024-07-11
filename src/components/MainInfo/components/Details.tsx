import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../MainInfo.module.scss";

export const Details = () => {
  return (
    <div className={styles.wrapperDetails}>
      <h2>{CV_DATA.name}</h2>
      <p className={styles.title}>{CV_DATA.title}</p>
    </div>
  );
};
