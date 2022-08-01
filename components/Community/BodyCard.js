import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

import styles from "../../styles/Community/Body.module.css";

const BodyCard = ({
  id,
  name,
  logo,
  description,
  category,
  body1,
  body2,
  cp_name,
  cp_line,
  cp_wa,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.Card}
        onClick={() => setOpen(true)}
      >
        <div className={styles.logoWrapper}>
          <img src={logo} alt="logo" />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
      </motion.div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className={styles.Header}>
            <hr />
            <div className={styles.HeaderTitle}>
              <h2>{category}</h2>
              <h2>{id}</h2>
            </div>
            <hr />
          </div>
          <div className={styles.Content}>
            <div className={styles.ContentLeft}>
              <h1 className={styles.ContentTitle}>{name}</h1>
              <p>{body1}</p>
              <hr />
              <h3>{body2}</h3>
              <div className={styles.CP}>
                <h5>Contact Person:</h5>
                <p>
                  <strong>{cp_name}</strong>
                </p>
                <p>
                  Line: <strong>{cp_line}</strong>
                </p>
                <p>
                  WhatsApp: <strong>{cp_wa}</strong>
                </p>
              </div>
            </div>
            <div className={styles.ContentRight}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default BodyCard;
