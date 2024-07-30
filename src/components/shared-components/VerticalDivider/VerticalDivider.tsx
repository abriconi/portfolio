import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}
export const VerticalDivider: React.FC<Props> = ({ children }) => {
  return <div className={styles.divider}>{children}</div>;
};
