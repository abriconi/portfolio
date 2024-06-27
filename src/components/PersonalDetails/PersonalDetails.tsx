import { Avatar } from "./components/Avatar";
import styles from "./PersonalDetails.module.scss";

export const PersonalDetails = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar />
    </div>
  );
};
