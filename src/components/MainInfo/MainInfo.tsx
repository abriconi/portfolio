import { Avatar } from "./components/Avatar";
import { Contacts } from "./components/Contacts";
import { Details } from "./components/Details";
import { Social } from "./components/Social";
import styles from "./styles.module.scss";

export const MainInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <Details />
      <Contacts />
      <Social />
    </div>
  );
};
