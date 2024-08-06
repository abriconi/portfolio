import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../styles.module.scss";
import { Icon } from "../../shared-components/Icon/Icon";

export const Social = () => {
  return (
    <div className={styles.containerSocial}>
      {CV_DATA.social.map((item) => (
        <a href={item.link}>
          <Icon icon={item.icon} size="xl" />
        </a>
      ))}
    </div>
  );
};
