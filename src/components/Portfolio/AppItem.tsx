import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { App } from "../../helpers/cv-data";
import React from "react";
import { ScaleCard } from "../shared-components/ScaleCard/ScaleCard";

interface Props {
    app: App;
}
export const AppItem: React.FC<Props> = ({ app }) => {
    return (
        <ScaleCard>
            <li className={styles.itemWrapper}>
                <a href={app.url} className={styles.link}>
                    <div className={styles.imgWrapper}>
                        <img src={app.imgUrl} alt={app.name} className={styles.img}/>
                        <div className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faEye as IconProp} size="2x"/>
                        </div>
                    </div>
                    <div className={styles.brief}>
                        <p className={styles.name}>{app.name}</p>
                        <p className={styles.tools}>Tools: {app.tools.map((tool, index) => (
                            <span className={styles.tool} key={index}>
                                {tool}{index < app.tools.length - 1 && ", "}
                            </span>
                        ))}</p>
                    </div>
                </a>
                
            </li>
        </ScaleCard>
        
    )
}