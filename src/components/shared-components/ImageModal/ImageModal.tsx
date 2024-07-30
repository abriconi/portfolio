import React from "react";
import styles from "./styles.module.scss";

interface Props {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<Props> = ({ url, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={url} alt="Certificate" className={styles.modalImage} />
      </div>
    </div>
  );
};
