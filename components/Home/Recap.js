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
            <h3>15 August 2022</h3>
          </div>
          <div className={styles.valueWrapper}>
            <div>
              <p>Analytical</p>
              <p>Thinking</p>
            </div>
            <hr />
            <p>Leadership</p>
          </div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h3>Surviv(or)loss</h3>
          </div>
          <div className={styles.recapBody}>
            <p>
              On the fourth day, two values are emphasized, Analytical Thinking
              and Leadership, through speaker sessions brought by Alamanda
              Shantika and Christian Sugiono. Alamanda Shantika shared the
              importance of Analytical thinking with the topic, &quot;Building a
              Thorough Way of Thinking&quot;. She recalled analytical thinking
              as a way to search for opportunities and to view from another
              perspective. While Christian Sugiono equipped us with Leadership
              skills with his topic &quot;Building Trust and Respect&quot;. He
              mentioned leadership as a skill to encourage others to achieve
              goals. As a student, those skills help us to achieve tasks, build
              relationships, and decision making.
            </p>
            <br />
            <p>
              Voyagers also attended the Scavenger Hunt. Through this session,
              Voyagers learned how to cooperate with moral standards as a group.
              To increase their understanding as a freshman, they must answer
              some questions regarding campus life through some interviews with
              Prasmul Gear Up committees.
            </p>
            <br />
            <p>
              By this chance, we hope voyagers could understand the importance
              of Analytical Thinking and Leadership and implement it in their
              daily life.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recap;
