import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../styles.module.scss";

export const Details = () => (
  <div className={styles.containerDetails}>
    <h1 className={styles.name}>{CV_DATA.name}</h1>
    <h2 className={styles.title}>{CV_DATA.title}</h2>
  </div>
);
