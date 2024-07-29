import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { AppRoutes } from "../../routes";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink
            to={AppRoutes.About}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            About
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to={AppRoutes.Resume}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Resume
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to={AppRoutes.Portfolio}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to={AppRoutes.Features}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Features
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
