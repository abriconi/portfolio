import styles from "../MainInfo.module.scss";

export const Avatar = () => {
  return (
    <div className={styles.containerAvatar}>
      <img src="/img/portrait-small.jpeg" className={styles.avatar} />
    </div>
  );
};
