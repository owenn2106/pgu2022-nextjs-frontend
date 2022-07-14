import { useEffect } from "react";

import styles from "../../styles/Community/Modal.module.css";

const Modal = ({ open, onClose, ...props }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`${styles.Modal} ${open ? styles.Open : ""}`}
      onClick={onClose}
    >
      <div className={styles.ModalContent}>
        <p className={styles.CloseSign}>Click Anywhere to Close</p>
        <div className={styles.ModalBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
