import styles from "../../styles/Home/Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <div className="container">
        <h2>WELCOME VOYAGERS</h2>

        <div className={styles.descriptionContent}>
          <h3>
            As Voyagers, you have to be able to survive throughout the whole
            journey. You must sail across the sea to reach your goal, navigating
            through tides and storms. The journey won't go easy, so prepare
            yourselves.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Description;
