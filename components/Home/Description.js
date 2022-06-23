import styles from "../../styles/Home/Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <div style={{ margin: "0 auto", width: "100%" }}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.descriptionTitle1}>WELCOME</h2>
          <img src="/images/decor/blue-line.png" />
          <h2 className={styles.descriptionTitle2}>VOYAGERS</h2>
        </div>

        <div className={styles.descriptionContent}>
          <p>
            As Voyagers, you have to be able to survive throughout the whole
            journey. You must sail across the sea to reach your goal, navigating
            through tides and storms. The journey won't go easy, so prepare
            yourselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
