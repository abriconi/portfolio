import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { App } from "../../helpers/interfaces";
import { ScaleCard } from "../shared-components/ScaleCard/ScaleCard";
import { formatArrayToString } from "../../helpers/utils";

interface Props {
  app: App;
}
export const AppItem: React.FC<Props> = ({ app }) => {
  const tools = formatArrayToString(app.tools);

  return (
    <ScaleCard>
      <li className={styles.itemWrapper}>
        <a href={app.url} className={styles.link}>
          <div className={styles.imgWrapper}>
            <img src={app.imgUrl} alt={app.name} className={styles.img} />
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faEye as IconProp} size="2x" />
            </div>
          </div>
          <div className={styles.brief}>
            <h2 className={styles.name}>{app.name}</h2>
            <p className={styles.tools}>
              Tools: <span className={styles.tool}>{tools}</span>
            </p>
          </div>
        </a>
      </li>
    </ScaleCard>
  );
};
