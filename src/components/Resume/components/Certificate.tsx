import React, { useState } from "react";
import styles from "../styles.module.scss";
import { Certificate as CertificateType } from "../../../helpers/interfaces";
import { formatArrayToString } from "../../../helpers/utils";
import { ImageModal } from "../../shared-components/ImageModal/ImageModal";

interface Props {
  item: CertificateType;
}

export const Certificate: React.FC<Props> = ({ item }) => {
  const skills = formatArrayToString(item.skills);

  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <li className={styles.certificateItem}>
      {isOpen && <ImageModal url={item.url} isOpen={isOpen} onClose={handleCloseModal} />}
      <div className={styles.imgWrapper} onClick={handleImageClick}>
        <img src={item.url} alt="Certificate" className={styles.img} />
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.info}>{item.organization}</p>
        <p className={styles.info}>{item.date}</p>
        <p className={styles.skills}>
          Skills: <span className={styles.skillItems}>{skills}</span>
        </p>
      </div>
    </li>
  );
};
