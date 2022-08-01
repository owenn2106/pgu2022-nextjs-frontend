import { motion } from "framer-motion";
import ChainAmicaDetail from "./ChainAmicaDetail";

import styles from "../../styles/Home/ChainAmica.module.css";

const ChainAmica = () => {
  return (
    <div className={styles.ChainAmicaWrapper}>
      <div className="container">
        <motion.div
          className={styles.HeadingMotto}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <p>
            THE VALUES AND CHARACTERISTICS THAT ALL PRASETIYA MULYA STUDENTS
            SHOULD POSSESS
          </p>
        </motion.div>

        <div className={styles.Wording}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            viewport={{ once: true }}
            className={styles.Chain}
          >
            <h2>CHAIN</h2>
            <p>
              The five essential values that will help you <br />
              survive university life and beyond
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            viewport={{ once: true }}
            className={styles.LeAmica}
          >
            <h2>LEAMICA</h2>
            <p>
              Represents the characteristics{" "}
              <br className={styles.leamicaBreakLine} />
              of a Prasmulyan
            </p>
          </motion.div>
        </div>
      </div>

      <ChainAmicaDetail />

      <motion.div
        className={styles.BoatWrapper}
        initial={{ y: 500 }}
        whileInView={{ y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
        }}
        viewport={{ once: true }}
      >
        <img
          className={styles.Boat}
          src="/images/backgrounds/boat.png/"
          alt="boat"
        />
      </motion.div>
    </div>
  );
};

export default ChainAmica;
