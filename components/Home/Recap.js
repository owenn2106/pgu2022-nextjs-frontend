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
            <h3>10 August 2022</h3>
          </div>
          <div className={styles.valueWrapper}>
            <div>
              <p>Non-</p>
              <p>Discrimination</p>
            </div>
            <hr />
            <p>Communication</p>
          </div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h3>Through The Seven Seas</h3>
          </div>
          <div className={styles.recapBody}>
            <p>
              Our second day of Prasmul Gear Up 2022 has shown us the importance
              of non-discrimination and communication in our lives. Voyagers had
              speaker sessions brought by Liko Subakti, CEO of “Project Seed”,
              Dea Rizkita, and Jessica Mila. As Kak Dea Rizkita said, open up as
              many opportunities as you can for everyone by not being
              discriminatory as college is a place where we may develop
              relations and grow a mature attitude. Kak Jessica Mila also said
              that it is crucial to be aware of our own flaws in order to
              understand how to overcome them.
            </p>
            <br />
            <p>
              Apart from that, the A.P.A Race taught them practical teamwork
              skills and to navigate the path around their new home. With those
              skills, voyagers are expected to set their own principles and be
              open to the many opportunities ahead of them to grow even further.
            </p>
            <br />
            <p>Tides will get higher the next day, stay alert.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recap;
