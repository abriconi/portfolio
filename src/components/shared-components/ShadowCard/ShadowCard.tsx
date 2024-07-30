import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}
export const ShadowCard: React.FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
