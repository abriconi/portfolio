import React from "react";
import styles from "../styles.module.scss";
import { Certificate as CertificateType } from "../../../helpers/cv-data";
import { formatArrayToString } from "../../../helpers/utils";

interface Props {
    item: CertificateType,
}

export const Certificate: React.FC<Props> = ({ item }) => {
    const skills = formatArrayToString(item.skills);

    return (
        <li className={styles.certificateItem}>
            <div className={styles.imgWrapper}>
                <img src={item.url} alt="Certificate" className={styles.img} />
            </div>
            <div className={styles.infoWrapper}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.info}>{item.organization}</p>
                <p className={styles.info}>{item.date}</p>
                <p className={styles.skills}>Skills: <span className={styles.skillItems}>{skills}</span></p>
            </div>
        </li>
    );
}