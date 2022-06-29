import styles from "../../styles/Home/ChainAmica.module.css";

const ChainAmica = () => {
  return (
    <div className={styles.ChainAmicaWrapper}>
      <div className="container">
        <div className={styles.HeadingMotto}>
          <p>
            THE VALUES AND CHARACTERISTICS THAT ALL PRASETIYA MULYA STUDENTS
            SHOULD POSSESS
          </p>
        </div>

        <div className={styles.Wording}>
          <h2 className={styles.Chain}>CHAIN</h2>
          <h2 className={styles.LeAmica}>LEAMICA</h2>
        </div>
      </div>

      <div className={styles.BoatWrapper}>
        <img className={styles.Boat} src="/images/backgrounds/boat.png/" />
      </div>
    </div>
  );
};

export default ChainAmica;
