import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { AppRoutes } from "../../routes";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to={AppRoutes.About}>About</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Resume}>Resume</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Portfolio}>Portfolio</Link></li>
        <li className={styles.menuItem}><Link to={AppRoutes.Features}>Features</Link></li>
      </ul>
    </nav>
  );
};
