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
            <h3>11 August 2022</h3>
          </div>
          <div className={styles.valueWrapper}>
            <div>
              <p>Caring</p>
            </div>
            <hr />
            <p>Integrity</p>
          </div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h3>Sea Legs Shall Shake</h3>
          </div>
          <div className={styles.recapBody}>
            <p>
              On this day, Voyagers are focused on the values of caring and
              integrity, as it allows students to develop creativity and
              acknowledgment in work. Today&apos;s sessions were brought by Aria
              Widyanto with the topic &quot;Action speaks Louder than
              Words&quot;, &quot;Leadership&quot; by Prof Agus W. Soehadi Ph.D.,
              and &quot;Anti Corruption&quot; by Erlangga Adikusumah.
            </p>
            <br />
            <p>
              One of Aria&apos;s words that could be quoted is &quot;The drive
              for caring can start from the realization that people cannot
              survive on their own. When we acknowledge our dependence on
              others, we feel compelled to help those who are in need&quot;.
              That&apos;s why we have to show our act of kindness to everyone.
            </p>
            <br />
            <p>
              Voyagers also participated in the Scavenger Hunt, teaching them to
              work as a whole with moral principles. They must approach
              committees as a team to enhance their knowledge of campus life.
            </p>
            <br />
            <p>
              Caring and integrity are crucial as it allows students to develop
              creativity and acknowledgment in work. Brace yourselves, a storm
              is coming.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recap;
