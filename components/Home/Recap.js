import { motion } from "framer-motion";

import styles from "../../styles/Home/Recap.module.css";

const Recap = () => {
  return (
    <div className={styles.recapWrapper}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.whiteBoxWrapper}
      >
        <div className={styles.recapHeader}>
          <div className={styles.dateWrapper}>
            <h2>Daily Recap</h2>
            <h3>09 August 2022</h3>
          </div>
          <div className={styles.valueWrapper}>
            <div>
              <p>Interpersonal</p>
              <p>Relationship</p>
            </div>
            <hr />
            <p>Humility</p>
          </div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h3>Welcome Aboard</h3>
          </div>
          <div className={styles.recapBody}>
            <p>
              On the first day, Voyagers were informed of CHAIN LEAMICA as the
              values and characters of a Prasmulyan. The voyagers were
              introduced to their new home, Universitas Prasetiya Mulya from
              sessions brought by Prof. Dr. Djisman Simandjuntak, Dr. Rudy
              Handoko, and Franky Supriyadi, Ph.D.
            </p>
            <br />
            <p>
              Besides that, Interpersonal relationships and Humility were
              introduced as the main focus of today. On this day, voyagers were
              provided with some speaker sessions by Fellexandro Ruby and some
              alumni of Universitas Prasetiya Mulya. They taught us how to
              become an outstanding college student, by implementing those
              values. Gear yourselves up for another exciting journey to come.
            </p>
            <br />
            <p>
              Aim for the sky, enjoy every step along the way, Because One Port
              Makes All.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recap;
