import styles from "./styles.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Portfolio</li>
        <li className={styles.menuItem}>Features</li>
        <li className={styles.menuItem}>Contacts</li>
      </ul>
    </nav>
  );
};
