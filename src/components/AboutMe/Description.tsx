import { CV_DATA } from "../../helpers/cv-data";
import styles from "./styles.module.scss";

export const Description = () => {
  const { aboutMe } = CV_DATA;
  const paragraphs = aboutMe.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div className={styles.descrWrapper}>
      {paragraphs.map((paragraph, index) => (
        <p className={styles.description} key={index}>{paragraph}</p>
      ))}
    </div>
  )
}