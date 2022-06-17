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
            <span>Scavenger Hunt</span>
          </a>
          <hr />
          <a className={styles.programContentItem}>
            <span>A.P.A. Race</span>
          </a>
          <hr />
          <a className={styles.programContentItem}>
            <span>Hackathon</span>
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Program;
