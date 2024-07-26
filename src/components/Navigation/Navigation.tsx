import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { AppRoutes } from "../../routes";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to={AppRoutes.About} className={styles.link}>About</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Resume} className={styles.link}>Resume</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Portfolio} className={styles.link}>Portfolio</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Features} className={styles.link}>Features</Link></li>
      </ul>
    </nav>
  );
};
