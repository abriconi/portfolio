import { Skill as SkillType } from "../../../helpers/cv-data";
import styles from "../styles.module.scss";

interface Props {
  item: SkillType;
}
export const Skill: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.skillItem}>
      <p className={styles.skillName}>
        {item.skill}
        <span className={styles.points}>{` ${item.points}%`}</span>
      </p>
      <div className={styles.skillPoints}>
        <div className={styles.skillPoint} style={{ width: `${item.points}%` }}></div>
      </div>
    </div>
  );
};
