import { RightCircleOutlined } from "@ant-design/icons";

import styles from "../../styles/Home/Program.module.css";

const Program = () => {
  return (
    <div className={styles.programSection}>
      <div className="container">
        <div className={styles.programTitle}>
          <h2>PROGRAM OVERVIEW</h2>
        </div>
        <div className={styles.programContent}>
          <hr />
          <a className={styles.programContentItem}>
            <span className={styles.program}>Scavenger Hunt</span>
            <RightCircleOutlined />
          </a>
          <hr />
          <a className={styles.programContentItem}>
            <span className={styles.program}>A.P.A. Race</span>
            <RightCircleOutlined />
          </a>
          <hr />
          <a className={styles.programContentItem}>
            <span className={styles.program}>Hackathon</span>
            <RightCircleOutlined />
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Program;
