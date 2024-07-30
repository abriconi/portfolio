import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}
export const ScaleCard: React.FC<Props> = ({ children }) => {
  return <div className={styles.scaleCard}>{children}</div>;
};
