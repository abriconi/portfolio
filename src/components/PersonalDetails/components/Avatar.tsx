import styles from "../PersonalDetails.module.scss";

export const Avatar = () => {
  return (
    <div className={styles.containerAvatar}>
      <img src="public/img/portrait-small.jpeg" className={styles.avatar} />
    </div>
  );
};
